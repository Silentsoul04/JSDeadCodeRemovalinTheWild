/* global webpackPluginVhsVersion */

import getRenditionUrl from 'src/util/get-rendition-url';

function getEncodingVariant(state) {
    const src = state.player.media.src;
    const isMediaHD = state.player.isMediaHD;
    const renditionUrl = getRenditionUrl(src, isMediaHD) || '';
    const renditions = state.player.media.renditions || [];

    let encodingVariant;
    renditions.forEach(rendition => {
        if (encodingVariant) return;

        if (rendition.url === renditionUrl) {
            encodingVariant = rendition.type;
        }
    });

    return encodingVariant || 'Unknown';
}

function getPropertyKey(env) {
    const tokens = {
        production: '33bdf05338e8d576a96389308',
        staging: '32be09a30e338f561c4be90ce',
        preview: '32be09a30e338f561c4be90ce',
        development: '0e778efd41f38c8f381d6ee36',
        localhost: '0e778efd41f38c8f381d6ee36'
    };

    return tokens[env];
}

function getMediaData(state) {
    return {
        property_key: getPropertyKey(state.player.options.env),
        player_name: 'VHS',
        player_software: 'VHS-3',
        player_version: webpackPluginVhsVersion,
        player_init_time: state.player.playerStartTimestamp,
        video_id: state.player.media.id,
        video_title: `${state.player.media.id} - ${state.player.media.headline}`,
        video_series: state.player.media.series,
        video_producer: state.player.media.byline,
        video_duration: state.player.media.duration,
        video_stream_type: state.player.media.isLive ? 'live' : 'on-demand',
        video_encoding_variant: getEncodingVariant(state),
        video_variant_id: getEncodingVariant(state),
        video_variant_name: getEncodingVariant(state),
        video_poster_url: state.player.media.posterUrl,
        sub_property_id: state.player.media.section,
        video_cdn: 'Fastly',
        page_type: state.player.options.type,
        experiment_name: `ads_${state.player.media.ads}`
    };
}

export {
    getEncodingVariant,
    getPropertyKey,
    getMediaData
};



// WEBPACK FOOTER //
// ./src/plugins/mux/selectors.js