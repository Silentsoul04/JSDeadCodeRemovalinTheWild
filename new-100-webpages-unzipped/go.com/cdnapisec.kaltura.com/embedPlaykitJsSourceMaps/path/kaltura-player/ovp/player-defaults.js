// @flow
import {
    Utils
} from '@playkit-js/playkit-js';

/**
 * Sets the default analytics plugin for the ovp player.
 * @param {KPOptionsObject} options - The player config.
 * @private
 * @returns {void}
 */
export function setDefaultAnalyticsPlugin(options: KPOptionsObject): void {
    let kavaPlugin = Utils.Object.getPropertyPath(options, 'plugins.kava');
    if (!kavaPlugin) {
        kavaPlugin = Utils.Object.mergeDeep(options, {
            plugins: {
                kava: {}
            }
        });
    }
    let kanalyticsPlugin = Utils.Object.getPropertyPath(options, 'plugins.kanalytics');
    if (!kanalyticsPlugin) {
        kanalyticsPlugin = Utils.Object.mergeDeep(options, {
            plugins: {
                kanalytics: {}
            }
        });
    }
    if (options.plugins && !kavaPlugin.disable && !kanalyticsPlugin.disable) {
        Object.assign(options.plugins.kanalytics, {
            hasKanalony: true
        });
    }
}



// WEBPACK FOOTER //
// ./ovp/player-defaults.js