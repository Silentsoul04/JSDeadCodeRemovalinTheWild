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
import Play from './play';
import Rewind10Seconds from './rewind-10-seconds';
import Timeline from './timeline';
import TimelinePlaceholder from './timeline/TimelinePlaceholder';
import Volume from './volume';
import TranscriptDesktop from './transcript/desktop';
import TranscriptMobile from './transcript/mobile';
import styles from './styles.css';

const displayIfLargerThan = (playerClassName, breakpoint) =>
    orderedClassNames.indexOf(playerClassName) >
    orderedClassNames.indexOf(breakpoint);

const displayIfLessThanOrEqual = (playerClassName, breakpoint) =>
    orderedClassNames.indexOf(playerClassName) <=
    orderedClassNames.indexOf(breakpoint);

const mapStateToProps = (state, ownProps) => {
    const isTouch = safeChain(state, 'player.isTouch');
    const playerClassName = safeChain(state, 'plugins.responsive.cssClass');
    const isMediaPlaying = safeChain(state, 'player.isMediaPlaying');

    return {
        bufferEnd: safeChain(state, 'player.media.bufferEnd'),
        duration: safeChain(state, 'player.media.duration'),
        durationStyle: safeChain(
            state,
            'player.options.audioControls.durationStyle'
        ),
        error: safeChain(state, 'player.error'),
        isElementReady: safeChain(state, 'player.isElementReady'),
        isMediaBuffering: safeChain(state, 'player.isMediaBuffering'),
        isMediaLoaded: safeChain(state, 'player.isMediaLoaded'),
        isMediaMuted: safeChain(state, 'player.isMediaMuted'),
        isMediaPlaying,
        layout: state.plugins.audioControls.layout,
        mediaStarted: safeChain(state, 'player.mediaStarted'),
        isTouch,
        playerClassName,
        progress: safeChain(state, 'player.media.progress') || 0,
        shouldPlay: safeChain(state, 'player.shouldPlay'),
        suppressDurationPlaceholder: safeChain(
            state,
            'player.options.audioControls.suppressDurationPlaceholder'
        ),
        fastForward: safeChain(state, 'player.options.audioControls.fastForward') !== false,
        rewind: safeChain(state, 'player.options.audioControls.rewind') !== false,
        volume: safeChain(state, 'player.options.audioControls.volume') !== false,
        showTranscript: safeChain(
            state,
            'player.options.audioControls.showTranscript'
        ),
        transcript: safeChain(state, 'player.options.audioControls.transcript'),
        theme: safeChain(state, 'player.options.audioControls.theme'),
        audioWave: safeChain(state, 'player.options.audioControls.audioWave'),
        id: safeChain(state, 'player.media.id'),
        disableAudioDeeplinkInApps: safeChain(
            state,
            'player.options.disableAudioDeeplinkInApps'
        ),
        featureFlags: safeChain(state, 'plugins.featureFlags'),
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
            scrubTime: null, // maybe move this state into timeline, unless used by duration
            shouldScrubTo: null,
            inApp: getUrlParameterByName('nytapp') === 'true',
            isiOS: getUserAgent().indexOf('nytios') !== -1,
            waveDataArray: []
        };
        this.focusedElement = null;
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
    }

    setupAnalyser() {
        const audioEl = this.props.player.playback.video;
        audioEl.crossOrigin = 'anonymous';
        const audioCtx = new(window.AudioContext || window.webkitAudioContext)();
        const source = audioCtx.createMediaElementSource(audioEl);
        const analyser = audioCtx.createAnalyser();
        source.connect(analyser);
        analyser.connect(audioCtx.destination);
        analyser.fftSize = 512;
        analyser.smoothingTimeConstant = 0;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength); // mutatable

        const that = this;

        function loop() {
            analyser.getByteFrequencyData(dataArray);
            that.setState({
                waveDataArray: dataArray.slice()
            });
            setTimeout(loop, 200); // match the transition time in Wave
        }
        loop();
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
    showTranscript(evt) {
        if (
            this.props.showTranscript &&
            typeof this.props.showTranscript === 'function'
        )
            this.props.showTranscript(evt);
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
    togglePlay() {
        const canPause = this.props.isMediaPlaying || this.props.shouldPlay;
        if (canPause) {
            this.props.pause();
        } else {
            this.onClickPlay();
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
            if (!this.props.mediaStarted &&
                this.props.featureFlags.audioWave &&
                this.props.audioWave !== false
            ) {
                this.setupAnalyser();
            }

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
        const onMouseDown = this.props.isTouch ? null : this.onMouseDown;
        const onFocus = this.props.isTouch ? null : this.onFocus;
        const onBlur = this.props.isTouch ? null : this.onBlur;

        const canPause = this.props.isMediaPlaying || this.props.shouldPlay;
        const themeClass = this.props.theme === 'light' ? styles.light : '';

        const breakpointClass = styles[this.props.playerClassName] || '';

        const showFastForward =
            this.props.fastForward &&
            displayIfLargerThan(
                this.props.playerClassName,
                classSizes.SMALL.className
            );

        const showRewind =
            this.props.rewind &&
            displayIfLargerThan(
                this.props.playerClassName,
                classSizes.XSMALL.className
            );

        const showVolume =
            this.props.volume &&
            displayIfLargerThan(
                this.props.playerClassName,
                classSizes.XSMALL.className
            );

        const showDuration =
            this.props.duration || !this.props.suppressDurationPlaceholder;

        const durationCountdownMode = displayIfLessThanOrEqual(
            this.props.playerClassName,
            classSizes.XSMALL.className
        );

        if (this.props.layout === 'mobile') {
            return ( <
                div className = {
                    `${styles.wrapper} ${styles.mobile} ${themeClass} ${
            this.props.mediaStarted ? '' : styles.cover
          }`
                } >
                <
                FadeableCard show = {!this.props.error
                } >
                <
                div className = {
                    `${styles.container} ${styles.mobile}`
                } >
                <
                div className = {
                    styles.container__playback
                } > {
                    this.props.rewind &&
                    this.props.mediaStarted && ( <
                        Rewind10Seconds disabled = {!this.props.mediaStarted
                        }
                        onClick = {
                            this.rewind
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
                        theme = {
                            this.props.theme
                        }
                        />
                    )
                } <
                Play canPause = {
                    canPause
                }
                onClick = {
                    this.togglePlay
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
                isMediaBuffering = {
                    this.props.isMediaBuffering
                }
                isTouch = {
                    this.props.isTouch
                }
                theme = {
                    this.props.theme
                }
                breakpoint = {
                    this.props.playerClassName
                }
                layout = "mobile"
                cover = {!this.props.mediaStarted
                }
                /> {
                    this.props.fastForward &&
                        this.props.mediaStarted && ( <
                            FastForward10Seconds disabled = {!this.props.mediaStarted
                            }
                            onClick = {
                                this.fastForward
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
                            theme = {
                                this.props.theme
                            }
                            />
                        )
                } <
                /div>

                <
                div className = {
                    styles.container__duration
                } >
                <
                Duration duration = {
                    this.props.duration
                }
                progress = {
                    timestampProgress
                }
                style = {
                    this.props.durationStyle
                }
                mediaStarted = {
                    this.props.mediaStarted
                }
                theme = {
                    this.props.theme
                }
                /> <
                /div> <
                div className = {
                    styles.container__transcript
                } > {
                    this.props.transcript ? ( <
                        TranscriptMobile onMouseDown = {
                            onMouseDown
                        }
                        onFocus = {
                            onFocus
                        }
                        onBlur = {
                            onBlur
                        }
                        onClick = {
                            this.showTranscript
                        }
                        theme = {
                            this.props.theme
                        }
                        />
                    ) : null
                } <
                /div>

                <
                div className = {
                    styles.container__timeline
                } > {
                    this.props.mediaStarted ? ( <
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
                        theme = {
                            this.props.theme
                        }
                        waveDataArray = {
                            this.state.waveDataArray
                        }
                        layout = "mobile"
                        animate = {
                            this.props.mediaStarted ? true : null
                        }
                        />
                    ) : null
                } <
                /div> <
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

        return ( <
            div className = {
                `${styles.wrapper} ${breakpointClass} ${
          styles.desktop
        } ${themeClass} `
            } >
            <
            FadeableCard show = {!this.props.error
            } >
            <
            div className = {
                styles.container
            } > {
                showRewind && ( <
                    div className = {
                        styles.chunk
                    } >
                    <
                    Rewind10Seconds disabled = {!this.props.mediaStarted
                    }
                    onClick = {
                        this.rewind
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
                    theme = {
                        this.props.theme
                    }
                    layout = "desktop" /
                    >
                    <
                    /div>
                )
            } <
            div className = {
                styles.chunk
            } >
            <
            Play canPause = {
                canPause
            }
            onClick = {
                this.togglePlay
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
            isMediaBuffering = {
                this.props.isMediaBuffering ||
                // Force buffering state on first play.
                // This is to avoid the spinner circle flash.
                (!this.props.mediaStarted && this.props.shouldPlay)
            }
            isTouch = {
                this.props.isTouch
            }
            theme = {
                this.props.theme
            }
            breakpoint = {
                this.props.playerClassName
            }
            layout = "desktop"
            cover = {!this.props.mediaStarted
            }
            /> <
            /div> {
                showFastForward && ( <
                    div className = {
                        styles.chunk
                    } >
                    <
                    FastForward10Seconds disabled = {!this.props.mediaStarted
                    }
                    onClick = {
                        this.fastForward
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
                    theme = {
                        this.props.theme
                    }
                    layout = "desktop" /
                    >
                    <
                    /div>
                )
            } {
                showDuration && ( <
                    div className = {
                        styles.chunk
                    } >
                    <
                    Duration countdownMode = {
                        durationCountdownMode
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
                    mediaStarted = {
                        this.props.mediaStarted
                    }
                    theme = {
                        this.props.theme
                    }
                    /> <
                    /div>
                )
            } {
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
                    theme = {
                        this.props.theme
                    }
                    waveDataArray = {
                        this.state.waveDataArray
                    }
                    layout = "desktop" /
                    >
                ) : ( <
                    TimelinePlaceholder theme = {
                        this.props.theme
                    }
                    />
                )
            } {
                this.props.transcript && ( <
                    div className = {
                        `${styles.transcript} ${(this.props.theme ===
                  'light' &&
                  styles.light) ||
                  ''}`
                    } >
                    <
                    TranscriptDesktop onMouseDown = {
                        onMouseDown
                    }
                    onFocus = {
                        onFocus
                    }
                    onBlur = {
                        onBlur
                    }
                    onClick = {
                        this.showTranscript
                    }
                    isTranscriptAvailable /
                    >
                    <
                    /div>
                )
            } {
                showVolume && ( <
                    div className = {
                        styles.volumeContainer
                    } >
                    <
                    Volume disabled = {!this.props.mediaStarted
                    }
                    muted = {
                        this.props.isMediaMuted
                    }
                    onClick = {
                        this.toggleVolume
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
                    theme = {
                        this.props.theme
                    }
                    layout = "desktop" /
                    >
                    <
                    /div>
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
// ./src/plugins/audio-controls/componentV2/index.js