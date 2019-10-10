import actionTypes from './actions';
import isIphone from '../util/is-iphone';
import getDeviceType from '../util/get-device-type';

const initialState = {
    adData: null,
    adProgress: -1,
    device: getDeviceType(),
    activated: false,
    initTimestamp: Date.now(),
    isActive: false,
    isAdActive: false,
    isElementReady: false,
    isIphone: isIphone(),
    isMediaBuffering: false,
    isMediaEnded: false,
    isMediaLoaded: false,
    isMediaMuted: false,
    isMediaPlaying: false,
    isMediaHD: false,
    isSeeking: false,
    isPlaybackReady: false,
    isReady: false,
    isTouch: 'ontouchstart' in document.documentElement,
    dataFailed: false,
    masterFadeTime: 400,
    media: null,
    options: null,
    playerStartTimestamp: new Date(),
    playlist: null,
    shouldPlay: false,
    volume: 1,
    // If any media was already played (or started to play) in the current VHS instance.
    hasAnyMediaPlayed: false,
    error: null,
    didUserInteract: false,
    didSubtitleTrackLoad: false,
    mediaStarted: false
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.SET_PROPS:
            {
                const props = {
                    ...state,
                    ...action.props
                };
                return props;
            }
        case actionTypes.READY:
            return {
                ...state,
                isReady: true
            };
        case actionTypes.OPTIONS_READY:
            {
                const {
                    payload: options
                } = action;
                const newOptions = {
                    ...state.options,
                    ...options
                };
                return {
                    ...state,
                    options: newOptions
                };
            }
        case actionTypes.DATA_READY:
            {
                const {
                    media
                } = action;
                return {
                    ...state,
                    media,
                    isMediaLoaded: false
                };
            }
        case actionTypes.FETCH_DATA_STARTED:
            {
                return {
                    ...state,
                    dataFailed: false
                };
            }
        case actionTypes.FETCH_DATA_FAILED:
            {
                return {
                    ...state,
                    dataFailed: true
                };
            }
        case actionTypes.PLAYBACK_READY:
            {
                return {
                    ...state,
                    isPlaybackReady: true
                };
            }
        case actionTypes.DID_ERROR:
            {
                const {
                    error
                } = action;
                return {
                    ...state,
                    error
                };
            }
        case actionTypes.CLEAR_ERROR:
            {
                return {
                    ...state,
                    error: null
                };
            }
        case actionTypes.TOGGLE_HD:
            return {
                ...state,
                isMediaHD: !state.isMediaHD,
                isMediaBuffering: true
            };
        case actionTypes.media.SHOULD_LOAD:
            {
                return {
                    ...state,
                    shouldMediaLoad: true,
                    isMediaLoaded: false,
                    mediaStarted: false,
                    didSubtitleTrackLoad: false
                };
            }
        case actionTypes.media.DID_LOAD:
            {
                return {
                    ...state,
                    shouldMediaLoad: false,
                    isMediaEnded: false,
                    isMediaPlaying: false,
                    isMediaLoaded: true,
                    isAdActive: false
                };
            }
        case actionTypes.media.DID_PLAY:
            {
                const mediaStarted = !state.isAdActive;
                return {
                    ...state,
                    activated: true,
                    hasAnyMediaPlayed: true,
                    isMediaPlaying: true,
                    isMediaEnded: false,
                    shouldPlay: false,
                    isMediaBuffering: false,
                    mediaStarted
                };
            }
        case actionTypes.media.DID_PAUSE:
            return {
                ...state,
                isMediaPlaying: false,
                shouldPause: false
            };
        case actionTypes.media.DID_SEEK:
            return {
                ...state,
                isSeeking: false,
                seekTo: undefined
            };
        case actionTypes.media.DID_END:
            return {
                ...state,
                isMediaPlaying: false,
                isMediaEnded: true
            };
        case actionTypes.media.DID_MUTE:
            return {
                ...state,
                isMediaMuted: true
            };
        case actionTypes.media.DID_UNMUTE:
            return {
                ...state,
                isMediaMuted: false
            };
        case actionTypes.media.DID_SWITCH_HLS_LEVEL:
            {
                const newMedia = {
                    ...state.media,
                    hlsLevel: action.level
                };
                return {
                    ...state,
                    media: newMedia
                };
            }
        case actionTypes.media.DID_SUBTITLE_TRACK_LOAD:
            {
                return {
                    ...state,
                    didSubtitleTrackLoad: true
                };
            }
        case actionTypes.media.IS_BUFFERING:
            return {
                ...state,
                isMediaBuffering: action.isMediaBuffering
            };
        case actionTypes.media.volume.DID_CHANGE:
            {
                const {
                    volume
                } = action;
                return {
                    ...state,
                    volume
                };
            }
        case actionTypes.media.duration.DID_CHANGE:
            {
                const {
                    duration
                } = action;
                const newMedia = {
                    ...state.media,
                    duration
                };
                return {
                    ...state,
                    media: newMedia
                };
            }
        case actionTypes.media.progress.DID_BUFFER:
            {
                const {
                    bufferEnd
                } = action;
                return {
                    ...state,
                    media: {
                        ...state.media,
                        bufferEnd
                    }
                };
            }
        case actionTypes.media.progress.DID_CHANGE:
            {
                const {
                    progress
                } = action;
                return {
                    ...state,
                    media: {
                        ...state.media,
                        progress
                    }
                };
            }
        case actionTypes.SHOULD_PLAY:
            return {
                ...state,
                hasAnyMediaPlayed: true,
                activated: true,
                shouldPlay: true,
                shouldPause: false
            };
        case actionTypes.SHOULD_PAUSE:
            return {
                ...state,
                shouldPlay: false,
                shouldPause: true
            };
        case actionTypes.SHOULD_SEEK:
            return {
                ...state,
                isSeeking: true,
                seekTo: action.seekTo
            };
        case actionTypes.SHOULD_FETCH_PLAYLIST:
            return {
                ...state,
                shouldFetchPlaylist: true
            };
        case actionTypes.DID_FETCH_PLAYLIST:
            return {
                ...state,
                shouldFetchPlaylist: false,
                playlist: action.playlist
            };
        case actionTypes.DID_SWITCH_TO_AD:
            return {
                ...state,
                isAdActive: true,
                adProgress: -1
            };
        case actionTypes.DID_SWITCH_TO_CONTENT:
            return {
                ...state,
                isAdActive: false
            };
        case actionTypes.UPDATE_AD_DATA:
            return {
                ...state,
                adData: {
                    ...state.adData,
                    ...action.data
                },
                hasCountdown: action.hasCountdown
            };
        case actionTypes.UPDATE_AD_PROGRESS:
            return {
                ...state,
                adProgress: action.value
            };
        case actionTypes.ELEMENT_READY:
            return {
                ...state,
                isElementReady: true
            };
        case actionTypes.ACTIVE:
            return {
                ...state,
                isActive: true
            };
        case actionTypes.IDLE:
            return {
                ...state,
                isActive: false
            };
        case actionTypes.USER_DID_INTERACT:
            return {
                ...state,
                didUserInteract: true
            };
        default:
            return state;
    }
};

export default {
    player: reducer
};
export {
    initialState
};



// WEBPACK FOOTER //
// ./src/player/reducer.js