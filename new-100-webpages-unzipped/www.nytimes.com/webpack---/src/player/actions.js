import optionsPipeline from './options-pipeline';

const types = {
    ACTIVE: 'player/ACTIVE',
    IDLE: 'player/IDLE',
    SET_PROPS: 'player/SET_PROPS',
    READY: 'player/READY',
    OPTIONS_READY: 'player/OPTIONS_READY',
    DATA_READY: 'player/DATA_READY',
    ELEMENT_READY: 'player/ELEMENT_READY',
    PLAYBACK_READY: 'player/PLAYBACK_READY',
    PLAYLIST_DATA_READY: 'player/PLAYLIST_DATA_READY',
    FETCH_DATA_STARTED: 'player/FETCH_DATA_STARTED',
    FETCH_DATA_FAILED: 'player/FETCH_DATA_FAILED',
    SHOULD_FETCH_PLAYLIST: 'player/SHOULD_FETCH_PLAYLIST',
    DID_FETCH_PLAYLIST: 'player/DID_FETCH_PLAYLIST',
    DID_SWITCH_TO_AD: 'DID_SWITCH_TO_AD',
    DID_SWITCH_TO_CONTENT: 'DID_SWITCH_TO_CONTENT',
    UPDATE_AD_DATA: 'player/UPDATE_AD_DATA',
    UPDATE_AD_PROGRESS: 'player/UPDATE_AD_PROGRESS',

    // User driven actions
    SHOULD_PLAY: 'player/SHOULD_PLAY',
    SHOULD_PAUSE: 'player/SHOULD_PAUSE',
    SHOULD_SEEK: 'player/SHOULD_SEEK',
    SHOULD_MUTE: 'player/SHOULD_MUTE',
    SHOULD_UNMUTE: 'player/SHOULD_UNMUTE',
    TOGGLE_HD: 'player/TOGGLE_HD',
    USER_DID_INTERACT: 'player/USER_DID_INTERACT',

    // error state
    DID_ERROR: 'player/DID_ERROR',
    CLEAR_ERROR: 'player/CLEAR_ERROR',

    // Media element driven actions
    media: {
        SHOULD_LOAD: 'player/media/SHOULD_LOAD',
        DID_LOAD: 'player/media/DID_LOAD',
        DID_PLAY: 'player/media/DID_PLAY',
        DID_PAUSE: 'player/media/DID_PAUSE',
        DID_SEEK: 'player/media/DID_SEEK',
        DID_END: 'player/media/DID_END',
        DID_MUTE: 'player/media/DID_MUTE',
        DID_UNMUTE: 'player/media/DID_UNMUTE',
        DID_SWITCH_HLS_LEVEL: 'player/media/DID_SWITCH_HLS_LEVEL',
        DID_SUBTITLE_TRACK_LOAD: 'player/media/DID_SUBTITLE_TRACK_LOAD',
        IS_BUFFERING: 'player/media/IS_BUFFERING',
        volume: {
            DID_CHANGE: 'player/media/volume/DID_CHANGE'
        },
        duration: {
            DID_CHANGE: 'player/media/duration/DID_CHANGE'
        },
        progress: {
            DID_BUFFER: 'player/media/progress/DID_BUFFER',
            DID_CHANGE: 'player/media/progress/DID_CHANGE'
        }
    }
};

const actions = {
    active() {
        return {
            type: types.ACTIVE
        };
    },
    idle() {
        return {
            type: types.IDLE
        };
    },
    setProps(props) {
        return {
            type: types.SET_PROPS,
            props
        };
    },
    ready() {
        return {
            type: types.READY
        };
    },
    optionsReady(payload) {
        return {
            type: types.OPTIONS_READY,
            payload: optionsPipeline(payload)
        };
    },
    dataReady(media) {
        return {
            type: types.DATA_READY,
            media
        };
    },
    elementReady() {
        return {
            type: types.ELEMENT_READY
        };
    },
    playbackReady() {
        return {
            type: types.PLAYBACK_READY
        };
    },
    playlistDataReady() {
        return {
            type: types.PLAYLIST_DATA_READY
        };
    },
    fetchDataStarted() {
        return {
            type: types.FETCH_DATA_STARTED
        };
    },
    fetchDataFailed(response) {
        return {
            type: types.FETCH_DATA_FAILED,
            response
        };
    },
    shouldFetchPlaylist() {
        return {
            type: types.SHOULD_FETCH_PLAYLIST
        };
    },
    didFetchPlaylist(playlist) {
        return {
            type: types.DID_FETCH_PLAYLIST,
            playlist
        };
    },
    didSwitchToAd() {
        return {
            type: types.DID_SWITCH_TO_AD
        };
    },
    didSwitchToContent() {
        return {
            type: types.DID_SWITCH_TO_CONTENT
        };
    },
    updateAdData(data) {
        return {
            type: types.UPDATE_AD_DATA,
            data
        };
    },
    updateAdProgress(value) {
        return {
            type: types.UPDATE_AD_PROGRESS,
            value
        };
    },
    shouldPlay() {
        return {
            type: types.SHOULD_PLAY
        };
    },
    shouldPause() {
        return {
            type: types.SHOULD_PAUSE
        };
    },
    shouldSeek(seekTo) {
        return {
            type: types.SHOULD_SEEK,
            seekTo
        };
    },
    shouldMute() {
        return {
            type: types.SHOULD_MUTE
        };
    },
    shouldUnmute() {
        return {
            type: types.SHOULD_UNMUTE
        };
    },
    toggleHD() {
        return {
            type: types.TOGGLE_HD
        };
    },
    userDidInteract() {
        return {
            type: types.USER_DID_INTERACT
        };
    },
    didError(error) {
        return {
            type: types.DID_ERROR,
            error
        };
    },
    clearError() {
        return {
            type: types.CLEAR_ERROR
        };
    },
    media: {
        shouldLoad() {
            return {
                type: types.media.SHOULD_LOAD
            };
        },
        didLoad() {
            return {
                type: types.media.DID_LOAD
            };
        },
        didPlay() {
            return {
                type: types.media.DID_PLAY
            };
        },
        didPause() {
            return {
                type: types.media.DID_PAUSE
            };
        },
        didSeek() {
            return {
                type: types.media.DID_SEEK
            };
        },
        didEnd() {
            return {
                type: types.media.DID_END
            };
        },
        didMute() {
            return {
                type: types.media.DID_MUTE
            };
        },
        didUnmute() {
            return {
                type: types.media.DID_UNMUTE
            };
        },
        didSwitchHlsLevel(level) {
            return {
                type: types.media.DID_SWITCH_HLS_LEVEL,
                level
            };
        },
        didSubtitleTrackLoad() {
            return {
                type: types.media.DID_SUBTITLE_TRACK_LOAD
            };
        },
        isBuffering(isMediaBuffering) {
            return {
                type: types.media.IS_BUFFERING,
                isMediaBuffering
            };
        },
        volume: {
            didChange(volume) {
                return {
                    type: types.media.volume.DID_CHANGE,
                    volume
                };
            }
        },
        duration: {
            didChange(duration) {
                return {
                    type: types.media.duration.DID_CHANGE,
                    duration
                };
            }
        },
        progress: {
            didBuffer(bufferEnd) {
                return {
                    type: types.media.progress.DID_BUFFER,
                    bufferEnd
                };
            },
            didChange(progress) {
                return {
                    type: types.media.progress.DID_CHANGE,
                    progress
                };
            }
        }
    }
};

export default types;
export {
    actions
};



// WEBPACK FOOTER //
// ./src/player/actions.js