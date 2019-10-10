import preact from 'preact';
import {
    connect
} from 'preact-redux';
import safeChain from 'safe-chain';
import {
    bind
} from 'monocle-decorators';

import {
    actions as playerActions
} from 'src/player/actions';
import {
    classSizes,
    orderedClassNames
} from 'src/util-nyt/responsive-rules';
import getUrlParameterByName from 'src/util/get-url-parameter-by-name';
import getUserAgent from 'src/util/get-user-agent';

import Duration from './duration';
import ErrorSlate from './error-slate';
import FadeableCard from './fadeable-card';
import FastForward10Seconds from './fast-forward-10-seconds';
import PlaceholderTimeline from './placeholder-timeline';
import Play from './play';
import Pause from './pause';
import Rewind10Seconds from './rewind-10-seconds';
import Spinner from './spinner';
import Timeline from './timeline';
import Volume from './volume';
import styles from './styles.css';

const displayIfLargerThan = (playerClassName, breakpoint) =>
    orderedClassNames.indexOf(playerClassName) >
    orderedClassNames.indexOf(breakpoint);

const displayIfLessThanOrEqual = (playerClassName, breakpoint) =>
    orderedClassNames.indexOf(playerClassName) <=
    orderedClassNames.indexOf(breakpoint);

const getHeight = audioControls => {
    if (typeof audioControls === 'object' && 'height' in audioControls) {
        return audioControls.height;
    }
    return '70px';
};

const getPadding = audioControls => {
    if (typeof audioControls === 'object' && 'padding' in audioControls) {
        return audioControls.padding;
    }
    return '15px 20px';
};

const getVolumeSetting = audioControls => {
    if (audioControls === true) return true;
    if (typeof audioControls === 'object') return audioControls.volume !== false;
    return false;
};

const mapStateToProps = (state, ownProps) => {
    const isTouch = safeChain(state, 'player.isTouch');
    const playerClassName = safeChain(state, 'plugins.responsive.cssClass');
    const isMediaPlaying = safeChain(state, 'player.isMediaPlaying');

    return {
        bufferEnd: safeChain(state, 'player.media.bufferEnd'),
        durationCountdownMode: displayIfLessThanOrEqual(
            playerClassName,
            classSizes.XSMALL.className
        ),
        duration: safeChain(state, 'player.media.duration'),
        durationStyle: safeChain(
            state,
            'player.options.audioControls.durationStyle'
        ),
        error: safeChain(state, 'player.error'),
        fastForward: safeChain(state, 'player.options.audioControls.fastForward') &&
            displayIfLargerThan(playerClassName, classSizes.SMALL.className),
        isMediaBuffering: safeChain(state, 'player.isMediaBuffering'),
        isMediaLoaded: safeChain(state, 'player.isMediaLoaded'),
        isMediaMuted: safeChain(state, 'player.isMediaMuted'),
        isMediaPlaying,
        isTouch,
        height: getHeight(safeChain(state, 'player.options.audioControls')),
        padding: getPadding(safeChain(state, 'player.options.audioControls')),
        playerClassName,
        progress: safeChain(state, 'player.media.progress') || 0,
        rewind: safeChain(state, 'player.options.audioControls.rewind') &&
            displayIfLargerThan(playerClassName, classSizes.XSMALL.className),
        shouldPlay: safeChain(state, 'player.shouldPlay'),
        suppressDurationPlaceholder: safeChain(
            state,
            'player.options.audioControls.suppressDurationPlaceholder'
        ),
        volume:
            !isTouch &&
            getVolumeSetting(safeChain(state, 'player.options.audioControls')) &&
            displayIfLargerThan(playerClassName, classSizes.XSMALL.className),
        id: safeChain(state, 'player.media.id'),
        disableAudioDeeplinkInApps: safeChain(
            state,
            'player.options.disableAudioDeeplinkInApps'
        ),
        ...ownProps
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    play: () => dispatch(playerActions.shouldPlay()),
    pause: () => dispatch(playerActions.shouldPause()),
    clearError: () => dispatch(playerActions.clearError()),
    ...ownProps
});

@connect(mapStateToProps, mapDispatchToProps)
class AudioControls extends preact.Component {
    constructor() {
        super();
        this.state = {
            scrubTime: null,
            shouldScrubTo: null,
            inApp: getUrlParameterByName('nytapp') === 'true',
            isiOS: getUserAgent().indexOf('nytios') !== -1
        };
        this.focusedElement = null;
        this.play = null;
        this.pause = null;
    }

    componentDidUpdate(prevProps) {
        // keep progress at scrubbed-to position until it updates
        // to prevent jumpy timeline, esp on slow connections
        if (
            this.state.shouldScrubTo !== null &&
            prevProps.progress !== this.props.progress
        ) {
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState(prevState => ({
                ...prevState,
                shouldScrubTo: null
            }));
        }

        if (this.focusedElement) {
            const prevCanPause = prevProps.isMediaPlaying || prevProps.shouldPlay;
            const canPause = this.props.isMediaPlaying || this.props.shouldPlay;
            if (prevCanPause !== canPause) {
                // media was just played or just paused.
                // we know if this action was triggered by the keyboard
                // if we have a focusedElement (play or pause button).
                // but that focusedElement was just taken off the DOM.
                // (e.g. Play was focused/clicked, but we immediately replace it with the Pause button)
                // so we should reapply focus the button that was just added on the DOM.
                if (canPause && this.pause) {
                    // media was just played, focus Pause button
                    this.pause.focus();
                } else if (prevCanPause && this.play) {
                    // media was just paused, focus Play button
                    this.play.focus();
                }
            }
        }
    }

    componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }

    @bind
    seek(timestamp) {
        this.props.player.seek(timestamp);
    }

    @bind
    rewind() {
        this.seek(Math.max(0, this.props.progress - 10));
    }

    @bind
    fastForward() {
        this.seek(Math.min(this.props.progress + 10, this.props.duration));
    }

    @bind
    toggleVolume() {
        this.props.player.mute(!this.props.isMediaMuted);
    }

    @bind
    scrub(timestamp) {
        this.setState(prevState => ({
            ...prevState,
            scrubTime: timestamp,
            shouldScrubTo: timestamp === null ? prevState.scrubTime : null
        }));
    }

    @bind
    retry() {
        this.props.clearError();
        // add a slight delay to the retry to ensure a smooth
        // transition between error states if the retry fails
        this.timeout = setTimeout(() => {
            this.props.player.reloadVideo();
            this.props.play();
            clearTimeout(this.timeout);
            this.timeout = null;
        }, 300);
    }

    @bind
    onMouseDown(event) {
        // manually blur elements so that the focus ring does
        // not show up on mouse click
        // this way we will only apply focus styles for keyboard navigation
        event.preventDefault();
        if (this.focusedElement) {
            this.focusedElement.blur();
            this.focusedElement = null;
        }
    }

    @bind
    onClickPlay() {
        if (
            this.state.inApp &&
            this.state.isiOS &&
            this.props.id &&
            this.props.id !== 'unknown' &&
            !this.props.disableAudioDeeplinkInApps
        ) {
            const audioDeepLink = `nytimes://reader/id/${this.props.id}/audio`;
            const playAnchor = document.createElement('a');
            playAnchor.setAttribute('href', audioDeepLink);
            playAnchor.click();
        } else {
            this.props.play();
        }
    }

    @bind
    onFocus(event) {
        // keep track of focused button during keyboard navigation
        // so that we can remove the focus ring on mouse click
        if (event && event.target) {
            this.focusedElement = event.target;
        }
    }

    @bind
    onBlur() {
        this.focusedElement = null;
    }

    render() {
        const isScrubbing = this.state.scrubTime !== null;
        let timestampProgress = this.props.progress;
        let scrubHandleProgress = this.props.progress;
        if (isScrubbing) {
            scrubHandleProgress = this.state.scrubTime;
        } else if (this.state.shouldScrubTo !== null) {
            scrubHandleProgress = this.state.shouldScrubTo;
            timestampProgress = this.state.shouldScrubTo;
        }
        const canPause = this.props.isMediaPlaying || this.props.shouldPlay;
        const onMouseDown = this.props.isTouch ? null : this.onMouseDown;
        const onFocus = this.props.isTouch ? null : this.onFocus;
        const onBlur = this.props.isTouch ? null : this.onBlur;
        const onClickPlay = this.onClickPlay;
        let size;
        if (
            this.props.playerClassName === classSizes.XSMALL.className ||
            this.props.playerClassName === classSizes.XXSMALL.className
        ) {
            size = styles.small;
        }

        return ( <
            div className = {
                `${styles.wrapper}${size ? ` ${size}` : ''}`
            }
            style = {
                {
                    height: this.props.height
                }
            } >
            <
            FadeableCard show = {!this.props.error
            } >
            <
            div className = {
                styles.container
            }
            style = {
                {
                    padding: this.props.padding
                }
            } >
            {
                this.props.rewind && ( <
                    button className = {
                        `${styles.rewind} ${styles.chunk}`
                    }
                    onClick = {
                        this.rewind
                    }
                    title = "Rewind"
                    aria - label = "Rewind"
                    onMouseDown = {
                        onMouseDown
                    }
                    onFocus = {
                        onFocus
                    }
                    onBlur = {
                        onBlur
                    } >
                    <
                    div className = {
                        styles.center
                    } >
                    <
                    Rewind10Seconds / >
                    <
                    /div> <
                    /button>
                )
            } {
                canPause ? ( <
                    button className = {
                        `${styles.pause} ${styles.chunk}${
                  this.props.isMediaBuffering ? ` ${styles.buffering}` : ''
                }${this.props.isTouch ? ` ${styles.active}` : ''}`
                    }
                    onClick = {
                        this.props.pause
                    }
                    onMouseDown = {
                        onMouseDown
                    }
                    onFocus = {
                        onFocus
                    }
                    onBlur = {
                        onBlur
                    }
                    title = "Pause Audio"
                    aria - label = "Pause Audio"
                    ref = {
                        el => {
                            this.pause = el;
                        }
                    } >
                    <
                    Spinner / >
                    <
                    div className = {
                        styles.center
                    } >
                    <
                    Pause / >
                    <
                    /div> <
                    /button>
                ) : ( <
                    button className = {
                        `${styles.play} ${styles.chunk}${
                  this.props.isMediaBuffering ? ` ${styles.buffering}` : ''
                }${this.props.isTouch ? ` ${styles.active}` : ''}`
                    }
                    onClick = {
                        onClickPlay
                    }
                    onMouseDown = {
                        onMouseDown
                    }
                    onFocus = {
                        onFocus
                    }
                    onBlur = {
                        onBlur
                    }
                    title = "Play Audio"
                    aria - label = "Play Audio"
                    ref = {
                        el => {
                            this.play = el;
                        }
                    } >
                    <
                    Spinner / >
                    <
                    div className = {
                        styles.center
                    } >
                    <
                    Play / >
                    <
                    /div> <
                    /button>
                )
            } {
                this.props.fastForward && ( <
                    button className = {
                        `${styles['fast-forward']} ${styles.chunk}`
                    }
                    onClick = {
                        this.fastForward
                    }
                    title = "Fast Forward"
                    aria - label = "Fast Forward"
                    onMouseDown = {
                        onMouseDown
                    }
                    onFocus = {
                        onFocus
                    }
                    onBlur = {
                        onBlur
                    } >
                    <
                    div className = {
                        styles.center
                    } >
                    <
                    FastForward10Seconds / >
                    <
                    /div> <
                    /button>
                )
            } <
            Duration countdownMode = {
                this.props.durationCountdownMode
            }
            duration = {
                this.props.duration
            }
            progress = {
                timestampProgress
            }
            style = {
                this.props.durationStyle
            }
            suppressDurationPlaceholder = {
                this.props.suppressDurationPlaceholder
            }
            /> {
                this.props.isMediaLoaded ? ( <
                    Timeline bufferEnd = {
                        this.props.bufferEnd
                    }
                    progress = {
                        scrubHandleProgress
                    }
                    duration = {
                        this.props.duration
                    }
                    seek = {
                        this.seek
                    }
                    scrub = {
                        this.scrub
                    }
                    isScrubbing = {
                        isScrubbing
                    }
                    isMediaPlaying = {
                        this.props.isMediaPlaying
                    }
                    play = {
                        this.props.play
                    }
                    pause = {
                        this.props.pause
                    }
                    rewind = {
                        this.rewind
                    }
                    fastForward = {
                        this.fastForward
                    }
                    isTouch = {
                        this.props.isTouch
                    }
                    isMediaLoaded = {
                        this.props.isMediaLoaded
                    }
                    />
                ) : ( <
                    PlaceholderTimeline / >
                )
            } {
                this.props.volume && ( <
                    button className = {
                        `${styles.volume} ${styles.chunk}`
                    }
                    onClick = {
                        this.toggleVolume
                    }
                    title = {
                        this.props.isMediaMuted ? 'Unmute' : 'Mute'
                    }
                    aria - label = {
                        this.props.isMediaMuted ? 'Unmute' : 'Mute'
                    }
                    onMouseDown = {
                        onMouseDown
                    }
                    onFocus = {
                        onFocus
                    }
                    onBlur = {
                        onBlur
                    } >
                    <
                    div className = {
                        styles.center
                    } >
                    <
                    Volume isMediaMuted = {
                        this.props.isMediaMuted
                    }
                    /> <
                    /div> <
                    /button>
                )
            } <
            /div> <
            /FadeableCard> <
            FadeableCard show = {
                this.props.error
            } >
            <
            ErrorSlate error = {
                this.props.error
            }
            retry = {
                this.retry
            }
            player = {
                this.props.player
            }
            padding = {
                this.props.padding
            }
            onMouseDown = {
                onMouseDown
            }
            onFocus = {
                onFocus
            }
            onBlur = {
                onBlur
            }
            /> <
            /FadeableCard> <
            /div>
        );
    }
}

export default AudioControls;



// WEBPACK FOOTER //
// ./src/plugins/audio-controls/component/index.js