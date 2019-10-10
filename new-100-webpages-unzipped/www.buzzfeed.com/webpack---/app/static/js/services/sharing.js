import dom from '@buzzfeed/buzzblocks/js/services/dom';

//-----------------------------------------------------------
// Private
//-----------------------------------------------------------
var _page = {};
var _site = {};
var _buzz = {};
var _headEl = document.getElementsByTagName('head')[0];

/**
 * Helper to get the value of <meta> tag content by property attribute.
 * @param {String} propName - property attribute value.
 * @memberOf service:sharing
 * @return {String} - value of the <meta> content.
 */
function _getMetaTagValue(propName) {
    var metaContent;
    var retVal = '';
    var metaTag = dom.find(_headEl, 'meta[property="' + propName + '"]');
    if (metaTag.length > 0) {
        metaContent = metaTag[0].getAttribute('content');
        if (metaContent) {
            retVal = metaContent;
        }
    }
    return retVal;
}

//-----------------------------------------------------------
// Public
//-----------------------------------------------------------

/**
 * Third party sharing service.
 * @exports service:sharing
 */
var service = {};

/**
 * Gets the url for sharing.
 * @return {String} - base URL of the document.
 */
service.getUrl = function() {
    return `${_site.base_url}/${_buzz.username}/${_buzz.uri}`;
};

/**
 * Gets post author.
 * @return {String} - post author.
 */
service.getAuthor = function() {
    return _getMetaTagValue('author').replace(/,$/g, '');
};

/**
 * Gets title.
 * @return {String} - title.
 */
service.getTitle = function() {
    return _page.title || document.title;
};

/**
 * Gets page description.
 * @return {String} - page description.
 */
service.getDescription = function() {
    return _page.description;
};

/**
 * Gets post caption.
 * @return {String} - post caption
 */
service.getCaption = function() {
    var caption = document.domain;
    var author = service.getAuthor();
    if (author) {
        caption += ' | By ' + author;
    }
    return caption;
};

/**
 * Gets page default image.
 * @return {String} - image src.
 */
service.getPicture = function() {
    return _page.picture;
};

/**
 * Returns aggregated common share data
 * @returns {Object} object with all available common share data
 */
service.getAll = function() {
    return {
        url: service.getUrl(),
        author: service.getAuthor(),
        title: service.getTitle(),
        description: service.getDescription(),
        caption: service.getCaption(),
        picture: service.getPicture(),
    };
};

export default service;