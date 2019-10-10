/* eslint-disable jsx-a11y/no-static-element-interactions */

import preact from 'preact';
import {
    bind
} from 'monocle-decorators';

import formatDuration from 'src/util/format-duration';
import Scrubber from '../scrubber';
import styles from '../styles.css';

const formatValueText = (progress, duration) =>
    `${formatDuration(progress)} of ${formatDuration(duration)}`;

class Timeline extends preact.Component {
    constructor() {
        super();
        this.state = {
            isMouseDown: false,
            hovered: false,
            transitioningWidth: false,
            finalWidthAchieved: false
        };
        this.container = null;
        this.slider = null;
        this.initialWidth = 0;
        this.finalWidth = 0;
    }

    componentDidMount() {
        if (this.container) {
            if (this.props.isTouch) {
                this.container.addEventListener('touchstart', this.handleTouchStart);
                this.container.addEventListener('touchmove', this.handleTouchMove);
                this.container.addEventListener('touchend', this.handleTouchEnd);
            } else {
                this.container.addEventListener('click', this.handleClick);
                this.container.addEventListener('mouseenter', this.handleMouseEnter);
                this.container.addEventListener('mouseleave', this.handleMouseLeave);
                this.container.addEventListener('mousedown', this.handleMouseDown);
                this.container.addEventListener('mousemove', this.handleMouseMove);
                this.container.addEventListener('mouseup', this.handleMouseUp);
                document.addEventListener('mousedown', this.handleDocumentMouseDown);
                document.addEventListener('mousemove', this.handleDocumentMouseMove);
                document.addEventListener('mouseup', this.handleDocumentMouseUp);
            }
            this.initialWidth =
                (this.container.getBoundingClientRect() || {}).width || 0;
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.duration && nextProps.duration) {
            this.finalWidth =
                (this.container.getBoundingClientRect() || {}).width || 0;
            this.setState(
                prevState => ({ ...prevState,
                    transitioningWidth: true
                }),
                () => {
                    this.timer = setTimeout(() => {
                        this.timer = clearTimeout(this.timer);
                        this.setState(prevState => ({
                            ...prevState,
                            transitioningWidth: false,
                            finalWidthAchieved: true
                        }));
                    }, 0);
                }
            );
        }
    }

    componentWillUnmount() {
        if (this.container) {
            if (this.props.isTouch) {
                this.container.removeEventListener('touchstart', this.handleTouchStart);
                this.container.removeEventListener('touchmove', this.handleTouchMove);
                this.container.removeEventListener('touchend', this.handleTouchEnd);
            } else {
                this.container.removeEventListener('click', this.handleClick);
                this.container.removeEventListener('mouseenter', this.handleMouseEnter);
                this.container.removeEventListener('mouseleave', this.handleMouseLeave);
                this.container.removeEventListener('mousedown', this.handleMouseDown);
                this.container.removeEventListener('mousemove', this.handleMouseMove);
                this.container.removeEventListener('mouseup', this.handleMouseUp);
                document.removeEventListener('mousedown', this.handleDocumentMouseDown);
                document.removeEventListener('mousemove', this.handleDocumentMouseMove);
                document.removeEventListener('mouseup', this.handleDocumentMouseUp);
            }
        }
    }

    @bind
    handleClick(event) {
        this.props.seek(this.getTimePosition(event));
    }

    @bind
    handleMouseEnter() {
        this.setState(prevState => ({
            ...prevState,
            hovered: true
        }));
    }

    @bind
    handleMouseLeave() {
        this.setState(prevState => ({
            ...prevState,
            hovered: this.props.isScrubbing
        }));
    }

    @bind
    handleMouseDown(event) {
        const isRightClick = event.button === 2;
        if (isRightClick) return;

        this.setState(prevState => ({
            ...prevState,
            isMouseDown: true
        }));
        this.handleMouseMove(event);
    }

    @bind
    handleMouseMove(event) {
        if (this.state.isMouseDown) {
            this.props.scrub(this.getTimePosition(event));
        }
    }

    @bind
    handleMouseUp(event) {
        if (this.state.isMouseDown) {
            this.props.seek(this.getTimePosition(event));
            this.props.scrub(null);
            this.setState(prevState => ({
                ...prevState,
                isMouseDown: false,
                hovered: false
            }));
        }
    }

    @bind
    handleDocumentMouseDown(event) {
        const isRightClick = event.button === 2;
        if (isRightClick) return;

        // this event handler is only used for blurring the <div role="slider">
        // because it's not a button, it won't automatically blur when another
        // element is clicked :/
        if (this.focused) {
            this.focused = false;
            if (this.slider) {
                this.slider.blur();
            }
        }
    }

    @bind
    handleDocumentMouseMove(event) {
        if (this.state.isMouseDown) {
            this.handleMouseMove(event);
        }
    }

    @bind
    handleDocumentMouseUp(event) {
        if (this.state.isMouseDown) {
            this.handleMouseUp(event);
        }
    }

    @bind
    handleTouchStart(event) {
        this.setState(prevState => ({
            ...prevState,
            hovered: true
        }));
        this.handleTouchMove(event);
    }

    @bind
    handleTouchMove(event) {
        this.props.scrub(this.getTimePosition(event));
    }

    @bind
    handleTouchEnd(event) {
        this.props.seek(this.getTimePosition(event));
        this.props.scrub(null);
        this.setState(prevState => ({
            ...prevState,
            hovered: false
        }));
    }

    @bind
    handleFocus() {
        this.focused = true;
    }

    @bind
    handleBlur() {
        this.focused = false;
    }

    @bind
    handleKeyDown(event) {
        if (
            event.key === 'ArrowRight' ||
            event.key === 'Right' ||
            event.key === 'ArrowUp' ||
            event.key === 'Up'
        ) {
            this.props.fastForward();
        } else if (
            event.key === 'ArrowLeft' ||
            event.key === 'Left' ||
            event.key === 'ArrowDown' ||
            event.key === 'Down'
        ) {
            this.props.rewind();
        }
    }

    getTimePosition(event) {
        const containerBCR = this.container.getBoundingClientRect();
        const pageX = this.props.isTouch ?
            event.changedTouches[0].pageX :
            event.pageX;
        const x = pageX - containerBCR.left;
        const time = this.props.duration / containerBCR.width * x;
        const trimmedTime = Math.max(0, Math.min(time, this.props.duration));
        return trimmedTime;
    }

    render() {
        const percentProgress = `${(this.props.progress / this.props.duration ||
      0) * 100}%`;
        const percentBuffered =
            this.props.bufferEnd === undefined ?
            percentProgress :
            `${(this.props.bufferEnd / this.props.duration || 0) * 100}%`;

        const style = {};
        if (this.state.transitioningWidth) {
            if (this.initialWidth && this.finalWidth) {
                style.transform = `scaleX(${this.initialWidth / this.finalWidth})`;
                style.transition = 'none';
            }
        }

        return ( <
            div className = {
                `${styles.timeline} ${styles.chunk}${
          this.state.hovered ? ` ${styles['timeline--hovered']}` : ''
        }`
            }
            ref = {
                container => {
                    this.container = container;
                }
            }
            style = {
                style
            } >
            <
            div className = {
                styles.timeline__progress
            }
            style = {
                {
                    width: percentProgress
                }
            }
            /> <
            div className = {
                styles.timeline__buffered
            }
            style = {
                {
                    width: percentBuffered
                }
            }
            /> <
            div className = {
                styles.timeline__duration
            } >
            <
            div className = {
                styles.timeline__slider
            }
            tabIndex = "0"
            role = "slider"
            title = "Seek"
            aria - label = "Seek"
            aria - valuemin = "0"
            aria - valuemax = {
                this.props.duration || 0
            }
            aria - valuenow = {
                this.props.progress || 0
            }
            aria - valuetext = {
                formatValueText(
                    this.props.progress,
                    this.props.duration
                )
            }
            onFocus = {
                this.handleFocus
            }
            onBlur = {
                this.handleBlur
            }
            onKeyDown = {
                this.handleKeyDown
            }
            ref = {
                el => {
                    this.slider = el;
                }
            }
            /> <
            /div> <
            div className = {
                `${styles.timeline__scrubber}${
            this.props.isScrubbing
              ? ` ${styles['timeline__scrubber--scrubbing']}`
              : ''
          }`
            }
            style = {
                {
                    left: percentProgress
                }
            } >
            <
            Scrubber isScrubbing = {
                this.props.isScrubbing
            }
            /> <
            /div> <
            /div>
        );
    }
}

export default Timeline;



// WEBPACK FOOTER //
// ./src/plugins/audio-controls/component/timeline/index.js