import pipe from 'tubo';
import getUrlParameterByName from 'src/util/get-url-parameter-by-name';
import Logger from 'src/util/logger';
import isDesktop from 'src/util/is-desktop';
import getHost from 'src/util/get-host';
import getEnvFromHost from 'src/util/get-env-from-host';
import normalizeUnit from 'src/util/normalize-unit';
import getDeviceType from 'src/util/get-device-type';
import mediaTypes from './media-types';

const logger = new Logger('vhs:player');

function normalizeRatio(options) {
    if (!options.ratio &&
        options.width &&
        options.height &&
        typeof options.width === 'number' &&
        typeof options.height === 'number'
    ) {
        options.ratio = `${options.width}:${options.height}`;
        return options;
    }

    if (!options.ratio && options.mediaType !== mediaTypes.AUDIO) {
        logger.warn('Received a falsy ratio. Setting it to default 16:9');
        options.ratio = '16:9';
    }
    return options;
}

function normalizeCover(options) {
    if (options.poster !== undefined) {
        logger.warn(
            'Deprecation: options.poster was renamed to options.cover. Consider changing it.'
        );
    }

    if (options.coverVi !== undefined) {
        logger.warn(
            'Deprecation: options.coverVi was renamed to options.cover. Consider changing it.'
        );
    }

    options.cover = Boolean(options.cover || options.coverVi || options.poster);

    return options;
}

function normalizeWidthAndHeight(options) {
    if (options.width) {
        options.width = normalizeUnit(options.width);
    } else {
        options.width = '600px';
    }

    if (options.height) {
        options.height = normalizeUnit(options.height);
    } else if (options.mediaType !== mediaTypes.AUDIO) {
        options.height = '338px';
    }

    return options;
}

function enableNativeControlsForIeMobile(options) {
    return {
        ...options,
        nativeControls: getDeviceType() === 'ie_mobile'
    };
}

function disableAdsForLoopingMedia(options) {
    // Do NOT use ads, comscore, qos, mux or viewabilityTracker if looping,
    // we will track in TAGX though `autoplay-loop`
    if (options.loop) {
        options.ads = false;
        options.comscore = false;
        options.qos = false;
        options.mux = false;
        options.viewabilityTracker = false;
    }

    return options;
}

function disableAllAnalyticsIfNeeded(options) {
    // If analytics is set to false then disable all analytics
    if (options.analytics === false) {
        options.comscore = false;
        options.qos = false;
        options.tagx = false;
        options.mux = false;
        options.viewabilityTracker = false;
    }

    return options;
}

function disableAutoplayForEmbedPoppableOnStart(options) {
    if (
        options.embedPoppableOnStart &&
        options.autoplay &&
        isDesktop() &&
        getUrlParameterByName('embedcode') === 'true'
    ) {
        options.autoplay = false;
    }

    return options;
}

function backwardsCompatibilityForMutedAutoplay(options) {
    if (options.mutedAutoplay) {
        options.autoplay = true;
        options.muted = true;
        options.muteToggle = true;
    }
    return options;
}

function env(options) {
    const validEnvironments = [
        'localhost',
        'test',
        'development',
        'staging',
        'production',
        'preview'
    ];
    const productionHosts = [
        'www.nytimes.com',
        'cooking.nytimes.com',
        'paidpost.nytimes.com',
        'brandedplaylist.nytimes.com'
    ];
    const host = getHost();
    // if env is not set, find a logical default from host
    if (options.env === undefined) {
        options.env = getEnvFromHost();
    } else if (
        validEnvironments.indexOf(options.env) === -1 ||
        productionHosts.indexOf(host) !== -1
    ) {
        // protect against VHS being set to stg on production
        // or being set to something other than the valid environment
        options.env = 'production';
    }

    if (options.dataEnv === undefined) {
        options.dataEnv = options.env;
    } else if (validEnvironments.indexOf(options.dataEnv) === -1) {
        options.dataEnv = 'production';
    }

    return options;
}

function validate(options) {
    if (options.id === '' && options.src === null && options.source === null) {
        throw new Error(
            'options.id, options.src or options.source should be provided'
        );
    }

    if (options.container === null) {
        throw new Error('options.container should be provided');
    }

    return options;
}

//
// API
//

export default function pipeline(options) {
    return pipe({
            ads: true,
            api: true,
            autoplay: false,
            container: null,
            controls: true,
            cover: true,
            debug: false,
            duration: null,
            id: '',
            loop: false,
            loopingCover: false,
            mediaType: mediaTypes.VIDEO,
            muted: false,
            nativeControls: false,
            onReady: null,
            playlist: false,
            preload: 'none',
            qos: false,
            qosConfigUrl: null,
            shareUrl: null,
            source: null,
            src: null,
            timeUntilIdle: 2000,
            type: null,
            usage: 'vanilla_js',
            userInitiatedNext: false,
            userInitiatedPlay: false,
            ...options
        },
        normalizeRatio,
        normalizeCover,
        normalizeWidthAndHeight,
        enableNativeControlsForIeMobile,
        disableAdsForLoopingMedia,
        disableAllAnalyticsIfNeeded,
        disableAutoplayForEmbedPoppableOnStart,
        backwardsCompatibilityForMutedAutoplay,
        env,
        validate
    );
}



// WEBPACK FOOTER //
// ./src/player/options-pipeline.js