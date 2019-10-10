/**
 * This file is responsible for store all player events
 */
export default {
    READY: 'ready',
    PLAY: 'play',
    PAUSE: 'pause',
    MUTE: 'mute',
    VOLUME_CHANGE: 'volumechange',
    PLAYING: 'playing',
    PROGRESS: 'progress',
    SEEKING: 'seeking',
    SEEKED: 'seeked',
    ENDED: 'ended',
    TIME_UPDATE: 'timeupdate',
    GO_FULLSCREEN: 'gofullscreen',
    EXIT_FULLSCREEN: 'exitfullscreen',
    AD_STARTED: 'adstarted',
    AD_PAUSED: 'adpaused',
    AD_RESUMED: 'adresumed',
    AD_COMPLETED: 'adcompleted',
    AD_SKIPPED: 'adskipped',
    AD_STOPPED: 'adstopped',
    AD_FIRST_QUARTILE: 'ad-first-quartile',
    AD_MIDPOINT: 'ad-mid-point',
    AD_THIRD_QUARTILE: 'ad-third-quartile',
    AD_ERROR: 'ad-error',
    SWITCH_TO_CONTENT: 'switch-to-content',
    MEDIA_ELEMENT_MOUNTED: 'mediaelementmounted',
    LOAD_START: 'loadstart',
    ERROR: 'error',
    HD_ON: 'hdon',
    HD_OFF: 'hdoff',
    TRACKING_EVENT: 'trackingevent',
    IDLE: 'idle',
    ACTIVE: 'active',
    IN_VIEWPORT: 'inviewport',
    OUT_VIEWPORT: 'outviewport',
    PLAYER_SIZE_CHANGE: 'playersizechange',
    SLATE: 'slate',
    DESTROY: 'destroy',
    PLUGIN: 'plugin',

    // private internal events (deprecate eventually)
    CONTROLS_SIZE_CHANGED: 'controlssizechanged',
    RENDITION_NOT_FOUND: 'renditionnotfound',
    BROWSER_NOT_SUPPORTED: 'browsernotsupported',
    BROWSER_LIVE_NOT_SUPPORTED: 'browserlivenotsupported',
    LEVEL_TYPE_CHANGE: 'leveltypechange',
    USER_ACTION: 'user-action'
};



// WEBPACK FOOTER //
// ./src/player/events.js