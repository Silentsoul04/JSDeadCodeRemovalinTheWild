// @flow
/* eslint-disable no-unused-vars */
import getLogger from '../utils/logger';
import Error from '../error/error';
import DrmSupport from './drm-support';
import {
    DrmScheme
} from './drm-scheme';

export default class BaseDrmProtocol implements IDrmProtocol {
    static getLogger = getLogger;
    static DrmSupport = DrmSupport;
    static DrmScheme = DrmScheme;

    static isConfigured(drmData: Array < Object > , drmConfig: PKDrmConfigObject): boolean {
        throw new Error(Error.Severity.CRITICAL, Error.Category.PLAYER, Error.Code.RUNTIME_ERROR_METHOD_NOT_IMPLEMENTED, 'static isConfigured');
    }

    static canPlayDrm(drmData: Array < Object > ): boolean {
        throw new Error(Error.Severity.CRITICAL, Error.Category.PLAYER, Error.Code.RUNTIME_ERROR_METHOD_NOT_IMPLEMENTED, 'static canPlayDrm');
    }

    static setDrmPlayback(...args): void {
        throw new Error(Error.Severity.CRITICAL, Error.Category.PLAYER, Error.Code.RUNTIME_ERROR_METHOD_NOT_IMPLEMENTED, 'static setDrmPlayback');
    }
}



// WEBPACK FOOTER //
// ./drm/base-drm-protocol.js


// WEBPACK FOOTER //
// core/drm/base-drm-protocol.js