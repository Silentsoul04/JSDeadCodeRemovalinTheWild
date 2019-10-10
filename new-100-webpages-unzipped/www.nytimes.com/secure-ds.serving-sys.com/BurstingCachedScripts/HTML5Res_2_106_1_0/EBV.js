EBG = window.EBG || {};
EBG.VideoModule = function(a) {
    try {
        this._videoElement = a, this._addEventListeners(), 0 < a.currentTime && !a.paused && !a.ended && this._playHandler()
    } catch (b) {}
};
EBG.VideoModule.BrowserEventNames = {
    INSTREAM_PROGRESS: "ebInstreamProgress",
    TIME_UPDATE: "timeupdate",
    PLAY: "play",
    PLAYING: "playing",
    PAUSE: "pause",
    ENDED: "ended",
    VOLUME_CHANGE: "volumechange",
    SEEKING: "seeking",
    WEBKIT_FULL_SCREEN: "webkitfullscreenchange",
    MOZ_FULL_SCREEN: "mozfullscreenchange",
    MS_FULL_SCREEN: "MSFullscreenChange",
    AD_REPLAY: "AdReplay"
};
EBG.VideoModule.prototype = {
    _started: !1,
    _25played: !1,
    _50played: !1,
    _75played: !1,
    _ended: !1,
    _fullScreen: !1,
    _lastFSState: !1,
    _videoElement: null,
    _unmutedReported: !1,
    _lastMutedState: !1,
    _assetName: null,
    _prevAssetName: null,
    _userInitiated: null,
    _seekTimeOut: !1,
    _reset: function() {
        EB.stopVideoTimer(this._prevAssetName, this._fullScreen);
        this._started = this._75played = this._50played = this._25played = this._ended = !1;
        this._prevAssetName = this._assetName
    },
    _videoAssetChanged: function(a) {
        return a != this._prevAssetName
    },
    _getAssetPath: function() {
        try {
            var a =
                this._videoElement.src && "" != this._videoElement.src ? this._videoElement.src : this._videoElement.currentSrc,
                b = EBG.Video.EXTERNAL_ASSET,
                c = /\/WSFolders\/[0-9_]+\//i,
                d = /\/BurstingRes+\//i,
                e = /\/[0-9a-zA-Z_]+\/source\/[0-9A-Z_]+\//i,
                f = /\/resources\//i;
            c.test(a) ? (b = a.split(c), b = b[b.length - 1]) : d.test(a) ? (b = a.split(d), b = b[b.length - 1]) : e.test(a) ? (b = a.split(e), b = b[b.length - 1]) : f.test(a) && (b = a.split(f), b = b[b.length - 1]);
            "/" == b[0] && (b = b.substr(1));
            if (b && !this._prevAssetName) this._prevAssetName = b;
            if (a) this._assetName =
                b;
            this._videoAssetChanged(b) && this._reset();
            return b
        } catch (g) {}
    },
    _addEventListeners: function() {
        var a = EBG.VideoModule.BrowserEventNames,
            b;
        for (b in a) a.hasOwnProperty(b) && (EB._adConfig && EB._adConfig.ffs.CFF_FullscreenEvent || !(a[b] === EBG.VideoModule.BrowserEventNames.MOZ_FULL_SCREEN || a[b] === EBG.VideoModule.BrowserEventNames.MS_FULL_SCREEN)) && this._addEventListener(a[b])
    },
    _addEventListener: function(a) {
        a === EBG.VideoModule.BrowserEventNames.MOZ_FULL_SCREEN || a === EBG.VideoModule.BrowserEventNames.MS_FULL_SCREEN ?
            this._videoElement.ownerDocument.addEventListener(a, this, !1) : this._videoElement.addEventListener(a, this, !1)
    },
    setVideoSrc: function(a, b) {
        var c = EB.getAssetUrl(a, b);
        if (this._videoElement.src != c) this._videoElement.src = c;
        this._getAssetPath()
    },
    handleEvent: function(a) {
        try {
            switch (a.type) {
                case EBG.VideoModule.BrowserEventNames.PLAY:
                case EBG.VideoModule.BrowserEventNames.PLAYING:
                    this._playHandler();
                    break;
                case EBG.VideoModule.BrowserEventNames.INSTREAM_PROGRESS:
                    a.data && this._sendProgress(a.data);
                    break;
                case EBG.VideoModule.BrowserEventNames.TIME_UPDATE:
                    a.data &&
                        "VPAIDVideo" === a.data.origin ? this._assetName || this._getAssetPath() : this._timeupdateHandler();
                    break;
                case EBG.VideoModule.BrowserEventNames.PAUSE:
                    this._pauseHandler(a);
                    break;
                case EBG.VideoModule.BrowserEventNames.ENDED:
                    this._endedHandler();
                    break;
                case EBG.VideoModule.BrowserEventNames.VOLUME_CHANGE:
                    this._volumechangeHandler();
                    break;
                case EBG.VideoModule.BrowserEventNames.WEBKIT_FULL_SCREEN:
                    this._webkitfullscreenchangeHandler();
                    break;
                case EBG.VideoModule.BrowserEventNames.MOZ_FULL_SCREEN:
                case EBG.VideoModule.BrowserEventNames.MS_FULL_SCREEN:
                    this._fullscreenchangeHandler();
                    break;
                case EBG.VideoModule.BrowserEventNames.SEEKING:
                    this._seekingHandler();
                    break;
                case EBG.VideoModule.BrowserEventNames.AD_REPLAY:
                    this._assetName && a.data && "VPAIDVideo" === a.data.origin && EB.videoInteraction(EBG.VideoInteraction.REPLAY, this._assetName)
            }
        } catch (b) {}
    },
    _seekingHandler: function() {
        try {
            if (!this._seekTimeOut && !this._ended) {
                var a = this;
                this._seekTimeOut = setTimeout(function() {
                    a._seekTimeOut = !1;
                    EB.videoInteraction(EBG.VideoInteraction.SLIDER_DRAGGED, a._assetName)
                }, 3E3)
            }
        } catch (b) {}
    },
    _playHandler: function() {
        try {
            var a =
                this._assetName || this._getAssetPath();
            EB.startVideoTimer(this._assetName, this._fullScreen);
            if (EB.shouldUseNativePlayer && EB.shouldUseNativePlayer()) this._videoElement.pause(), EB.playVideoOnNativePlayer(a);
            else if (this._lastMutedState = this._videoElement.muted || !this._videoElement.volume, !this._unmutedReported && !this._lastMutedState) EB.videoInteraction(EBG.VideoInteraction.UNMUTED, a), this._unmutedReported = !0
        } catch (b) {}
    },
    _volumechangeHandler: function() {
        try {
            var a = "",
                b = this._videoElement.muted || !this._videoElement.volume;
            if (this._assetName)
                if (!b && this._lastMutedState) {
                    if (EB.videoInteraction(EBG.VideoInteraction.UNMUTE, this._assetName), !this._unmutedReported) EB.videoInteraction(EBG.VideoInteraction.UNMUTED, this._assetName), this._unmutedReported = !0
                } else b && !this._lastMutedState && (a = this._fullScreen ? EBG.VideoInteraction.FULLSCREEN_MUTE : EBG.VideoInteraction.MUTE, EB.videoInteraction(a, this._assetName));
            this._lastMutedState = b
        } catch (c) {}
    },
    _timeupdateHandler: function() {
        try {
            var a = Math.round(100 * (this._videoElement.currentTime /
                this._videoElement.duration));
            this._assetName || this._getAssetPath();
            0 < a && 100 > a && !this._started && this._sendProgress(EBG.VideoInteraction.VIDEO_START);
            25 <= a && 50 > a && !this._25played && this._sendProgress(EBG.VideoInteraction.FIRST_POINT);
            50 <= a && 75 > a && !this._50played && this._sendProgress(EBG.VideoInteraction.MID_POINT);
            75 <= a && 100 > a && !this._75played && this._sendProgress(EBG.VideoInteraction.THIRD_POINT);
            100 == a && this._sendProgress(EBG.VideoInteraction.VIDEO_COMPLETE)
        } catch (b) {}
    },
    _sendProgress: function(a) {
        Math.round(100 *
            (this._videoElement.currentTime / this._videoElement.duration));
        var b = this._assetName || this._getAssetPath();
        switch (a) {
            case EBG.VideoInteraction.VIDEO_START:
                EB.videoInteraction(EBG.VideoInteraction.STARTED, b, this._userInitiated);
                this._started = !0;
                if (this._ended) this._ended = !1, EB.videoInteraction(EBG.VideoInteraction.REPLAY, b);
                break;
            case EBG.VideoInteraction.FIRST_POINT:
                EB.videoInteraction(EBG.VideoInteraction.PERCENT_25_PLAYED, b);
                this._25played = !0;
                break;
            case EBG.VideoInteraction.MID_POINT:
                EB.videoInteraction(EBG.VideoInteraction.PERCENT_50_PLAYED,
                    b);
                this._50played = !0;
                break;
            case EBG.VideoInteraction.THIRD_POINT:
                EB.videoInteraction(EBG.VideoInteraction.PERCENT_75_PLAYED, b);
                this._75played = !0;
                break;
            case EBG.VideoInteraction.VIDEO_COMPLETE:
                this._handleMovieEnd()
        }
    },
    _pauseHandler: function(a) {
        try {
            if (EB.stopVideoTimer(this._assetName, this._fullScreen), !a || !a.data || !a.data.ignoreInteraction) !this._ended && this._started && EB.videoInteraction(this._fullScreen ? EBG.VideoInteraction.FULLSCREEN_PAUSE : EBG.VideoInteraction.PAUSE, this._assetName)
        } catch (b) {}
    },
    _endedHandler: function() {
        try {
            EB.stopVideoTimer(this._assetName, this._fullScreen), this._handleMovieEnd()
        } catch (a) {}
    },
    _webkitfullscreenchangeHandler: function() {
        try {
            if ("undefined" != this._videoElement.webkitSupportsFullscreen) this._fullScreen = this._videoElement.webkitDisplayingFullscreen, this._handleFullScreenInteraction()
        } catch (a) {}
    },
    _fullscreenchangeHandler: function() {
        try {
            if (this._fullScreen != this.isFullscreen()) this._fullScreen = this.isFullscreen(), this._handleFullScreenInteraction()
        } catch (a) {}
    },
    _handleFullScreenInteraction: function() {
        try {
            if (this._videoElement &&
                this._lastFSState != this._fullScreen) {
                var a = this._fullScreen ? EBG.VideoInteraction.FULLSCREEN_START : EBG.VideoInteraction.FULLSCREEN_END;
                this._lastFSState = this._fullScreen;
                var b = this._assetName || this._getAssetPath();
                EB.videoInteraction(a, b)
            }
        } catch (c) {}
    },
    _handleMovieEnd: function() {
        if (!this._ended) this._75played = this._50played = this._25played = this._started = !1, this._ended = !0, EB.videoInteraction(EBG.VideoInteraction.FULLPLAY, this._assetName)
    },
    playVideo: function(a) {
        this._videoElement.play();
        if (a) this._userInitiated =
            "user"
    },
    isFullscreen: function() {
        return !(!document.fullscreenElement && !document.webkitFullscreenElement && !document.mozFullScreenElement && !document.msFullscreenElement && !document.fullScreen && !document.webkitIsFullScreen && !document.mozFullScreen)
    },
    setFullScreenState: function(a) {
        try {
            this._fullScreen = a, this._handleFullScreenInteraction()
        } catch (b) {}
    }
};