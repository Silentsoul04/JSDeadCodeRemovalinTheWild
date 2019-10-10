import cookies from './cookies';

export default {
    defaultPageviewOnError(data) {
        const error = (data.responseText && JSON.parse(data.responseText).error) ||
            data.error || 'Check url and configuration.';
        return `Pageview was not tracked: ${error}`;
    },

    getData(url, options, config) {
        const data = {
            ...options,
            url,
            pageview: true,
            visitorId: cookies.read('sailthru_visitor'),
            apiUrl: `${config.trackDomain}/v1/track/event/pageview`,
        };

        const sailthruTags = document.querySelectorAll &&
            document.querySelectorAll('meta[name="sailthru.tags"]').length > 0 &&
            document.querySelectorAll('meta[name="sailthru.tags"]')[0].getAttribute('content');
        const sailthruKeywords = document.querySelectorAll &&
            document.querySelectorAll('meta[name="keywords"]').length > 0 &&
            document.querySelectorAll('meta[name="keywords"]')[0].getAttribute('content');
        const sailthruMetaTags = sailthruTags || sailthruKeywords || '';

        data.visitorId = cookies.read('sailthru_visitor');
        data.messageId = cookies.read('sailthru_bid');

        data.excludeContent = config.excludeContent;
        if (data.excludeContent === 'true') {
            data.excludeContent = true;
        } else if (typeof data.excludeContent !== 'boolean') {
            data.excludeContent = false;
        }

        if (data.useStoredTags === undefined) {
            data.useStoredTags = config.useStoredTags;
        }
        if (data.useStoredTags === 'false') {
            data.useStoredTags = false;
        } else if (typeof data.useStoredTags !== 'boolean') {
            data.useStoredTags = true;
        }

        data.tags = typeof data.tags !== 'undefined' ? data.tags.toString() : sailthruMetaTags; // handles string and array inputs

        return data;
    },
};



// WEBPACK FOOTER //
// ./v1/src/js/modules/pageview.js