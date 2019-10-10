// #if process.env.NODE_ENV !== 'production'
// import logdown from 'logdown';
// #endif
import clone from 'clone';
import objectEntries from 'object.entries';
import nextTick from 'src/util/next-tick';

// #if process.env.NODE_ENV !== 'production'
// const logger = logdown('vhs:plugins');
// #endif

function handlePluginInitializationError(error, pluginName) {
    // #if process.env.NODE_ENV !== 'production'
    //   logger.error(`Error while initializing \`${pluginName}\`: `, error);
    // #endif
}

class PluginBase {
    constructor(player) {
        this._player = player;
        this._container = player.container;
        this._options = player.options;
    }
}

function registerPlugin(name, proto, player) {
    PluginBase.prototype = clone(proto);
    const plugin = new PluginBase(player);
    plugin._name = name;

    if (typeof plugin._initialize === 'function') {
        plugin._initialize();
    }

    return plugin;
}

function bindListeners(plugin, player) {
    function bindPluginEvent(eventName, methodName) {
        if (typeof plugin[methodName] === 'function') {
            player.on(player.events[eventName], data => {
                plugin[methodName](data);
            });
        }
    }

    const pluginEvents = {
        READY: '_ready',
        PLAY: '_play',
        PAUSE: '_pause',
        MUTE: '_mute',
        VOLUME_CHANGE: '_volume_change',
        SEEKING: '_seeking',
        SEEKED: '_seeked',
        ENDED: '_ended',
        PLAYING: '_playing',
        AD_STARTED: '_ad_started',
        AD_COMPLETED: '_ad_completed',
        AD_PAUSED: '_ad_paused',
        AD_RESUMED: '_ad_resumed',
        AD_SKIPPED: '_ad_skipped',
        AD_STOPPED: '_ad_stopped',
        AD_IMPRESSION: '_ad_impression',
        GO_FULLSCREEN: '_go_fullscreen',
        EXIT_FULLSCREEN: '_exit_fullscreen',
        PROGRESS: '_progress',
        TIME_UPDATE: '_time_update',
        LOAD_START: '_loadstart',
        ERROR: '_error',
        HD_ON: '_hd_on',
        HD_OFF: '_hd_off',
        MEDIA_ELEMENT_MOUNTED: '_media_element_mounted',
        TRACKING_EVENT: '_tracking_event',
        RENDITION_NOT_FOUND: '_rendition_not_found',
        IDLE: '_idle',
        ACTIVE: '_active',
        BROWSER_NOT_SUPPORTED: '_browser_not_supported',
        BROWSER_LIVE_NOT_SUPPORTED: '_browser_live_not_supported',
        PLAYER_SIZE_CHANGE: '_player_size_change',
        SLATE: '_slate',
        IN_VIEWPORT: '_in_viewport',
        OUT_VIEWPORT: '_out_viewport',
        DESTROY: '_destroy'
    };

    objectEntries(pluginEvents).forEach(([eventName, methodName]) => {
        bindPluginEvent.apply(player, [eventName, methodName]);
    });
}

export default function registerPlugins(player) {
    const options = player.options;
    const plugins = options.plugins;

    const promises = objectEntries(plugins)
        .filter(
            ([key, value]) =>
            options[key] || (value.enable === true && options[key] !== false)
        )
        .map(([key, value]) => {
            if (typeof value.canEnable === 'function') {
                return nextTick()
                    .then(() => value.canEnable(player))
                    .then(shouldEnable => {
                        if (shouldEnable) {
                            const plugin = registerPlugin(key, value.proto, player);
                            bindListeners(plugin, player);
                        }
                    })
                    .catch(error => {
                        handlePluginInitializationError(error, key);
                    });
            }

            return nextTick()
                .then(() => {
                    const plugin = registerPlugin(key, value.proto, player);
                    bindListeners(plugin, player);
                })
                .catch(error => {
                    handlePluginInitializationError(error, key);
                });
        });

    return Promise.all(promises);
}



// WEBPACK FOOTER //
// ./src/player/deprecated-plugins-api.js