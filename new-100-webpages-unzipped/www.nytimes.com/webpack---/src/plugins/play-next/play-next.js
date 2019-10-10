import clone from 'clone';
import {
    actions as playerActions
} from 'src/player/actions';
import reducer from './reducer';
import actions from './actions';

function mapStateToProps(state, prevProps) {
    return {
        ...prevProps,
        ...state.plugins.playNext
    };
}

export default {
    name: 'playNext',
    proto: {
        _initialize() {
            mapStateToProps(this._player.store.getState(), {});
            this.subscribe();
        },

        loadNextVideo() {
            const {
                playlist,
                currentVideoIndex
            } = this.props;
            const nextVideoId = playlist.videos[currentVideoIndex + 1];

            if (nextVideoId) {
                this._player.store.dispatch(actions.shouldLoadNextVideo());

                this._player.load(nextVideoId, true);
                this._player.store.dispatch(
                    actions.setCurrentVideoIndex(currentVideoIndex + 1)
                );
            } else {
                this._player.store.dispatch(actions.setCurrentVideoIndex(-1));
            }
        },

        subscribe() {
            const {
                store
            } = this._player;
            store.subscribe(() => {
                const currentState = store.getState();
                const {
                    isMediaEnded
                } = currentState.player;
                const {
                    playlistId,
                    isLoadingNextVideo,
                    isFetchingPlaylist,
                    playlist
                } = currentState.plugins.playNext;
                const shouldLoadNextVideo =
                    isMediaEnded && !isLoadingNextVideo && playlist;
                const shouldFetchPlaylist =
                    isMediaEnded && !isFetchingPlaylist && !playlist && playlistId;

                this.props = mapStateToProps(currentState, clone(this.props));

                if (shouldFetchPlaylist) {
                    store.dispatch(playerActions.shouldFetchPlaylist());
                }

                if (shouldLoadNextVideo) {
                    this.loadNextVideo();
                }
            });
        },
        reducer() {
            return {
                playNext: reducer
            };
        }
    },
    enable: false
};



// WEBPACK FOOTER //
// ./src/plugins/play-next/play-next.js