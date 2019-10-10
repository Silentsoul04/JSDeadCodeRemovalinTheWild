/* global webpackPluginVhsVersion, webpackPluginVhsRelease */

import objectValues from 'object.values';
import PromisePolyfill from 'promise-polyfill';
import Logger from './util/logger';
import plugins from './plugins';
import mediaTypes from './player/media-types';
import Player from './player';
import events from './player/events';
import './stylesheet/main.scss';

if (!window.Promise) {
    window.Promise = PromisePolyfill;
}

const logger = new Logger('vhs');

logger.info(`For complete VHS debug info: \`localStorage.debug = 'vhs*'\``);

function VHS(options) {
    if (!(this instanceof VHS)) {
        return new VHS(options);
    }

    this.options = options;

    // temporary workaround for old versions of react-component-vhs
    // that relied on passing in a jQuery element as options.container
    if (typeof options.container === 'object' && options.container[0]) {
        options.container = options.container[0];
    }

    const vhsInstance = VHS.getPlayerByContainer(options.container);
    if (vhsInstance) {
        logger.error(
            'VHS ERROR: Container is already in use. Please destroy before creating a new VHS instance using this container: ',
            options.container
        );
        return vhsInstance;
    }

    const player = new Player({
        ...this.options,
        plugins: VHS._availablePlugins
    });
    VHS.instances[player.props.instanceId] = player;

    return player;
}

VHS.config = {
    // The default behavior when there are multiple players on a page is that only
    // one player can play at a time. As soon as one player plays all others are
    // paused. This can be overridden by setting `VHS.config.allowMultiplePlayers`
    // to `true`.
    allowMultiplePlayers: false
};

VHS.instances = {};
VHS._availablePlugins = {};
VHS._version = webpackPluginVhsVersion;
VHS._release = webpackPluginVhsRelease;

VHS.plugin = function(name, proto, enable, canEnable) {
    const _enable = enable || false;

    // Plugins on proxy to player
    proto._on = function(type, callback) {
        this._player.on(
            /^plugin:/gi.test(type) ? type : `plugin:${this._name}:${type}`,
            callback
        );
    };

    // Plugins _removeAllListeners proxy to player
    proto._removeAllListeners = function(type) {
        this._player.removeAllListeners(
            /^plugin:/gi.test(type) ? type : `plugin:${this._name}:${type}`
        );
    };

    // Plugins _removeListener proxy to player
    proto._removeListener = function(type, callback) {
        this._player.removeListener(
            /^plugin:/gi.test(type) ? type : `plugin:${this._name}:${type}`,
            callback
        );
    };

    // Plugins emit proxy to player
    proto._emit = function(type, data) {
        this._player.emit(
            /^plugin:/gi.test(type) ? type : `plugin:${this._name}:${type}`,
            data
        );
    };

    VHS._availablePlugins[name] = {
        enable: _enable,
        proto,
        canEnable
    };

    return VHS._availablePlugins;
};

VHS.getPlayerByContainer = function(container) {
    let containerId;
    if (typeof container.get === 'function') {
        containerId = container.attr('id');
    } else if (typeof container === 'string') {
        containerId = container;
    } else if (container instanceof HTMLElement) {
        containerId = container.id;
    } else {
        logger.error(
            'options.container must be an HTMLElement, id string or jQuery object.'
        );
    }

    let instance = null;
    objectValues(VHS.instances).forEach(instanceCur => {
        if (instance) {
            return;
        }

        if (instanceCur.container && instanceCur.container.id === containerId) {
            instance = instanceCur;
        }
    });

    return instance;
};

plugins.forEach(plugin => {
    VHS.plugin(plugin.name, plugin.proto, plugin.enable, plugin.canEnable);
});

VHS.player = function(options) {
    logger.warn('`VHS.player` is deprecated. Use `VHS` or `VHS.video`');

    return new VHS(options);
};

Object.defineProperty(VHS, 'events', {
    get() {
        logger.warn('`VHS.events` is deprecated. Use `player.events`');

        return events;
    }
});

VHS.api = {
    get events() {
        logger.warn('`VHS.api.events` is deprecated. Use `player.events`');

        return events;
    }
};

//
// Presets
//

VHS.video = options =>
    VHS({
        ...options,
        mediaType: mediaTypes.VIDEO
    });

VHS.cinemagraph = options =>
    VHS({
        // overrides to player defaults
        ads: false,
        loop: true,
        muted: true,
        autoplay: true,
        buffering: false,
        captions: false,
        clickVideoToTogglePlay: false,
        contextualMenu: false,
        controls: false,
        endSlate: false,
        pauseOtherPlayers: false,
        spacebarToggle: false,
        type: 'cinemagraph',
        headline: 'Cinemagraph Sample',

        // user config
        ...options,

        // set mediaType
        mediaType: mediaTypes.VIDEO
    });

VHS.audio = options => {
    const audioPlugins = {
        audioControls: true,
        pauseOtherPlayers: true,
        responsive: true,
        tagx: true,
        viewabilityTracker: true,
        viewportIntersectionObserver: true
    };

    return VHS({
        // turn off all non-audio plugins
        ...plugins.reduce((prev, curr) => {
            prev[curr.name] = audioPlugins[curr.name] || false;
            return prev;
        }, {}),

        // overrides to player defaults
        ads: false,
        api: false,
        height: undefined,
        nativeControls: false,
        ratio: undefined,
        timeUntilIdle: undefined,
        width: undefined,

        // user config
        ...options,

        // set mediaType
        mediaType: mediaTypes.AUDIO
    });
};

window.__VHS__ = window.__VHS__ || VHS;

module.exports = VHS;



// WEBPACK FOOTER //
// ./src/index.js