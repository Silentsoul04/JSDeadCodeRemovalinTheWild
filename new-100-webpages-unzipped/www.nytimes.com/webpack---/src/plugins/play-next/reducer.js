import playerActions from '../../player/actions';
import {
    types
} from './actions';

const initialState = {
    currentVideoIndex: -1,
    isLoadingNextVideo: false,
    isFetchingPlaylist: false,
    playlist: null,
    playlistId: null,
    videoId: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case playerActions.DATA_READY:
            {
                const {
                    id: videoId,
                    playlist
                } = action.media;
                const playlistId = (playlist && playlist.id) || null;
                return { ...state,
                    videoId,
                    playlistId
                };
            }
        case playerActions.SHOULD_FETCH_PLAYLIST:
            return { ...state,
                isFetchingPlaylist: true
            };
        case playerActions.DID_FETCH_PLAYLIST:
            {
                const {
                    playlist
                } = action;
                return { ...state,
                    isFetchingPlaylist: false,
                    playlist
                };
            }
        case playerActions.media.DID_LOAD:
            return { ...state,
                isLoadingNextVideo: false
            };
        case types.SHOULD_LOAD_NEXT_VIDEO:
            return { ...state,
                isLoadingNextVideo: true
            };
        case types.SET_CURRENT_VIDEO_INDEX:
            {
                const {
                    currentVideoIndex
                } = action;
                return { ...state,
                    currentVideoIndex
                };
            }
        default:
            return state;
    }
};



// WEBPACK FOOTER //
// ./src/plugins/play-next/reducer.js