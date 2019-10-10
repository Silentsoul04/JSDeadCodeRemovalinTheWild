import {
    types as captionsActions
} from 'src/plugins/captions/actions';
import playerActions from 'src/player/actions';
import {
    types as controlsActions
} from './actions';

const initialState = {
    controlsEnabled: false,
    isLive: false,
    isMouseDown: false,
    wasPlaying: false,
    hasExternalSource: null,
    captionsEnabled: false,
    duration: 0,
    height: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case playerActions.DATA_READY:
            {
                const {
                    isLive,
                    duration
                } = action.media;
                return { ...state,
                    isLive,
                    duration
                };
            }
        case playerActions.media.duration.DID_CHANGE:
            {
                const duration = action.duration;
                return { ...state,
                    duration
                };
            }
        case playerActions.OPTIONS_READY:
            {
                const controlsEnabled = Boolean(action.payload.controls);
                const hasExternalSource = Boolean(
                    action.payload.src || action.payload.source
                );
                return { ...state,
                    controlsEnabled,
                    hasExternalSource
                };
            }
        case controlsActions.mouseDown:
            {
                const {
                    isMouseDown
                } = action;
                return { ...state,
                    isMouseDown
                };
            }
        case controlsActions.wasPlaying:
            {
                const {
                    wasPlaying
                } = action;
                return { ...state,
                    wasPlaying
                };
            }
        case controlsActions.heightChange:
            {
                const {
                    height
                } = action;
                return { ...state,
                    height
                };
            }
        case captionsActions.didEnableCaptions:
            {
                return { ...state,
                    captionsEnabled: true
                };
            }
        case captionsActions.didDisableCaptions:
            {
                return { ...state,
                    captionsEnabled: false
                };
            }
        default:
            {
                return state;
            }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/controls/reducer.js