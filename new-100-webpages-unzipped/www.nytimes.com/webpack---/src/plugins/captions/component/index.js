/* eslint-disable react/prop-types, react/no-danger */

import preact from 'preact';
import {
    connect
} from 'preact-redux';
import pipe from 'tubo';
import styles from './styles.css';

// This is a dirty hack to force Safari on iOS 11 to draw some elements on the
// DOM that were not being drawn on screen.
function forcePaint(el) {
    const baseWidth = pipe(getComputedStyle(el).width, parseInt, Math.floor);

    el.style.width = `${baseWidth + Math.random()}px`;
}

const mapStateToProps = (state, ownProps) => {
    const {
        areCaptionsAvailable,
        areCaptionsEnabled,
        currentText,
        raiseCaptions
    } = state.plugins.captions;
    const {
        cssClass
    } = state.plugins.responsive;
    return {
        areCaptionsAvailable,
        areCaptionsEnabled,
        cssClass,
        currentText,
        raiseCaptions,
        ...ownProps
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({ ...ownProps
});

@connect(mapStateToProps, mapDispatchToProps)
class Captions extends preact.Component {
    shouldComponentUpdate(nextProps) {
        return (
            this.props.areCaptionsAvailable ||
            this.props.areCaptionsAvailable !== nextProps.areCaptionsAvailable
        );
    }

    getContainerCssClasses() {
        const classes = [styles.container, styles[this.props.cssClass]];
        if (this.props.raiseCaptions) {
            classes.push(styles.raised);
        }
        return classes.join(' ');
    }

    componentDidUpdate() {
        if (!this.containerRef) return;

        forcePaint(this.containerRef);
    }

    render() {
        if (!this.props.areCaptionsAvailable || !this.props.areCaptionsEnabled) {
            return null;
        }
        return ( <
            div className = {
                this.getContainerCssClasses()
            }
            ref = {
                el => {
                    this.containerRef = el;
                }
            } >
            <
            div className = {
                styles.cueWrap
            } >
            <
            span className = {
                styles.captions
            }
            dangerouslySetInnerHTML = {
                {
                    __html: this.props.currentText
                }
            }
            /> <
            /div> <
            /div>
        );
    }
}

export default Captions;



// WEBPACK FOOTER //
// ./src/plugins/captions/component/index.js