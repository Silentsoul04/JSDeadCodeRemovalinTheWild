import feedCardData from '../services/feed-cards-data';
import localization from '@buzzfeed/buzzblocks/js/services/localization';
import solid from '@buzzfeed/buzzblocks/js/services/solid';
import util from '@buzzfeed/buzzblocks/js/services/util';

//-----------------------------------------------------------
// Private
//-----------------------------------------------------------
var _page = {};
var _isMobile = solid.isXsmall();

var cardsData = {};

var viaConfig = {
    'ja-jp': {
        '22': 'TastyJapan',
        'default': 'BuzzFeedJapan'
    }
};

var platformsMap = {
    facebook: {
        name: 'facebook',
        display_name: localization.getTranslation('SHARE'), // eslint-disable-line
        shareUrlTemplate: 'https://www.facebook.com/sharer/sharer.php?u={{share_url}}',
        target: '_blank',
        shareFields: [
            'href',
            'description',
            'name',
            'picture',
            'name',
        ],
    },
    pinterest: {
        name: 'pinterest',
        display_name: localization.getTranslation('PIN'), // eslint-disable-line
        shareUrlTemplate: 'http://pinterest.com/pin/create/button/' +
            '?url={{share_url}}&media={{share_image}}&description={{share_title}}',
        target: '_blank',
        anchorAttributes: 'data-pin-do="ignore"',
        shareData: {
            useSDK: 1,
        },
        shareFields: [
            'description',
            'media',
            'url',
        ],

    },
    email: {
        name: 'email',
        display_name: localization.getTranslation('EMAIL'), // eslint-disable-line
        shareUrlTemplate: 'mailto:?subject={{share_title}}&body={{share_url}}',
        shareFields: [
            'description',
            'media',
            'text',
            'url',
        ],
    },
    twitter: {
        name: 'twitter',
        display_name: localization.getTranslation('SHARE'), // eslint-disable-line
        shareUrlTemplate: 'https://twitter.com/intent/tweet?url={{share_url}}&text={{share_title}}',
        target: '_blank',
        width: 550,
        height: 450,
        shareFields: [
            'url',
            'text',
            'via'
        ],
    },
    tumblr: {
        name: 'tumblr',
        display_name: localization.getTranslation('SHARE'), // eslint-disable-line
        shareUrlTemplate: 'http://www.tumblr.com/share/link?url={{share_url}}&text={{share_title}}',
        target: '_blank',
        width: 550,
        height: 450,
        shareFields: [
            'url',
        ],
    },
    sms: {
        name: 'sms',
        display_name: localization.getTranslation('SMS'), // eslint-disable-line
        shareUrlTemplate: 'sms:?body={{share_title}} {{share_url}}',
        target: '_blank',
        width: 550,
        height: 450,
        shareFields: [
            'url',
            'text',
        ],
    },
};

//-----------------------------------------------------------
// Public
//-----------------------------------------------------------

/**
 * Third party sharing service.
 * @exports service:sharing
 */
var service = {};


service.getImage = function(data) {
    return data.image || _page.picture;
};

service.getDescription = function(data) {
    return data.description || '';
};

/**
 * Return url to youtube post if present in data.links
 * @param {Object} data - card data
 * @return {string} - url
 */
service.getYoutubeSourceUrl = function(data) {
    var url = '';
    var i;
    if (data.links && data.links.length) {
        for (i = 0; i < data.links.length; i++) {
            if (data.links[i].url && data.links[i].link_text && data.links[i].link_text.match(/youtube/)) {
                url = data.links[i].url;
                break;
            }
        }
    }
    return url;
};

/**
 * Return url to facebook post if present in data.links
 * @param {Object} data - card data
 * @return {string} - url
 */
service.getFacebookSourceUrl = function(data) {
    var url = '';
    var i;
    if (data.links && data.links.length) {
        for (i = 0; i < data.links.length; i++) {
            if (data.links[i].url && data.links[i].link_text && data.links[i].link_text.match(/facebook/)) {
                url = data.links[i].url;
                break;
            }
        }
    }
    return url;
};

/**
 * Return url to share,
 * try return url to facebook post for isFacebook card, and url to youtube post for isYoutube card
 * @param {Object} data - card data
 * @return {string} - url to share
 */
service.findUrl = function(data) {
    var url = '';
    var pattern = /^http/i;

    if (data.isYoutube) {
        url = this.getYoutubeSourceUrl(data);
    } else if (data.isFacebook) {
        url = this.getFacebookSourceUrl(data);
    }

    if (!url) {
        if (data.source_uri) {
            url = data.source_uri;
            if (pattern.test(url) !== true) {
                url = window.BZFD.Config.webRoot + url;
            }
        } else if (data.links && data.links.length) {
            url = data.links[0].url;
        }
    }

    return url;
};

service.getTitle = function(data) {
    return data.name || _page.title;
};

/*
 * Set an @ for JP video twitter share
 */
service.getVia = function(data) {
    let country = window.BZFD.Context.page.localization.country;
    let showId;

    if (data.show_id) {
        showId = data.show_id;
    }

    if (data.type !== 'video' || !viaConfig[country]) {
        return '';
    } else {
        return showId ? viaConfig[country][showId] : viaConfig[country]['default'];
    }
};

service.getSharing = function(data) {
    var _this = this;
    var platforms = [];
    if (data.id && typeof cardsData[data.id] !== 'undefined' && cardsData[data.id].platforms) {
        return cardsData[data.id].platforms;
    }
    util.each(platformsMap, function(i, platformPar) {
        var platform = util.extend({}, platformPar);

        if (!_isMobile && platform['name'] === 'sms') {
            return;
        }

        platform.shareUrl = platform.shareUrlTemplate
            .replace('{{share_url}}', _this.findUrl(data))
            .replace('{{share_title}}', _this.getTitle(data))
            .replace('{{share_image}}', _this.getImage(data));

        platform.shareData = {};
        util.each(platform.shareFields, function(j, field) {
            switch (field) {
                case 'name':
                    platform.shareData[field] = _this.getTitle(data);
                    break;
                case 'text':
                    platform.shareData[field] = _this.getTitle(data);
                    break;
                case 'url':
                    platform.shareData[field] = _this.findUrl(data);
                    break;
                case 'href':
                    platform.shareData[field] = _this.findUrl(data);
                    break;
                case 'description':
                    platform.shareData[field] = _this.getDescription(data) || _this.getTitle(data);
                    break;
                case 'media':
                    platform.shareData[field] = _this.getImage(data);
                    break;
                case 'picture':
                    platform.shareData[field] = _this.getImage(data);
                    break;
                case 'via':
                    platform.shareData[field] = _this.getVia(data);
                    break;
            }
        });

        if (!_isMobile && platform.width && platform.height) {
            platform.shareData.width = platform.width;
            platform.shareData.height = platform.height;
        }

        if (_isMobile) {
            platform.isMobile = _isMobile;
        }

        platform.contentTitle = data.name;
        platform.cardPosition = data.position;
        platform.id = data.id;
        if (data.type === 'video') {
            platform.isVideo = 1;
        }

        platforms.push(platform);
    });
    if (data.id) {
        if (typeof cardsData[data.id] === 'undefined') {
            cardsData[data.id] = data;
        }
        cardsData[data.id]['platforms'] = platforms;
    }
    return platforms;
};

service.getAdSharing = function(data) {
    var platforms = [];
    var adData = feedCardData.get('wid:' + data.cardId);
    util.each(platformsMap, function(i, platformPar) {
        var platform = util.extend({}, platformPar);
        if (!_isMobile && platform['name'] === 'sms') {
            return;
        }
        platform.shareUrl = platform.shareUrlTemplate
            .replace('{{share_url}}', adData.url)
            .replace('{{share_title}}', adData.title)
            .replace('{{share_image}}', adData.image);

        platform.shareData = {};
        util.each(platform.shareFields, function(j, field) {
            switch (field) {
                case 'name':
                    platform.shareData[field] = adData.title;
                    break;
                case 'text':
                    platform.shareData[field] = adData.title;
                    break;
                case 'url':
                    platform.shareData[field] = adData.url;
                    break;
                case 'href':
                    platform.shareData[field] = adData.url;
                    break;
                case 'description':
                    platform.shareData[field] = adData.description.replace(/(<([^>]+)>)/ig, ''); // strip html tags
                    break;
                case 'media':
                    platform.shareData[field] = adData.image;
                    break;
                case 'picture':
                    platform.shareData[field] = adData.image;
                    break;
            }
        });

        if (!_isMobile && platform.width && platform.height) {
            platform.shareData.width = platform.width;
            platform.shareData.height = platform.height;
        }

        if (_isMobile) {
            platform.isMobile = _isMobile;
        }

        platform.contentTitle = adData.title;
        platform.cardPosition = data.position;
        platform.id = data.wid;
        if (data.type === 'video') {
            platform.isVideo = 1;

        }


        platforms.push(platform);
    });
    if (adData.id) {
        if (typeof cardsData[adData.id] === 'undefined') {
            cardsData[adData.id] = adData;
        }
        cardsData[adData.id]['platforms'] = platforms;
    }
    return platforms;
};

service.getPlatforms = function(data) {
    if (data.is_advertiser) {
        return this.getAdSharing(data);
    } else {
        return this.getSharing(data);
    }
};

service.getData = function(cardId) {
    var data = {};
    if (typeof cardsData[cardId] !== 'undefined') {
        data = cardsData[cardId];
    }
    return data;
};

export default service;