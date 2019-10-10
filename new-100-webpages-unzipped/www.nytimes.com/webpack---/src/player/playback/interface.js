class PlaybackInterface {
    constructor(store, container, player, video) {
        this.store = store;
        this.container = container;
        this.player = player;

        if (video) {
            this.video = video;
        }

        this.type = this.store.getState().player.media.playbackType;

        this.state = {};
    }

    // eslint-disable-next-line class-methods-use-this
    init() {}

    // eslint-disable-next-line class-methods-use-this
    load() {}

    // eslint-disable-next-line class-methods-use-this
    play() {}

    // eslint-disable-next-line class-methods-use-this
    pause() {}

    // eslint-disable-next-line class-methods-use-this
    seek() {}

    // eslint-disable-next-line class-methods-use-this
    mute() {}

    // eslint-disable-next-line class-methods-use-this
    setVolume() {}

    // eslint-disable-next-line class-methods-use-this
    reloadVideo() {}

    // eslint-disable-next-line class-methods-use-this
    toggleHD() {}

    // eslint-disable-next-line class-methods-use-this
    destroy() {}
}

export default PlaybackInterface;



// WEBPACK FOOTER //
// ./src/player/playback/interface.js