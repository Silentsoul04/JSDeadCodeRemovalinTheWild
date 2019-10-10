import viewportMonitor from '@buzzfeed/buzzblocks/js/services/viewport-monitor';
import dom from '@buzzfeed/buzzblocks/js/services/dom';
import util from '@buzzfeed/buzzblocks/js/services/util';

/**
 * Service for tracking the feed as it scrolls
 * Right now sends highest number card reached in feed to bfa
 * @exports service:scroll-tracking
 */
var _service = {};
var _viewportMonitor = viewportMonitor.create({
    throttleTimeout: 300
});
var highestCard = 0;
/**
 * Evaluate feed item in viewport - set to that index if it's higher than existing
 */

function _pushItems(i) {
    if (i && i > highestCard) {
        highestCard = i;
    }

    /* Send the event to bfa/ga - so page exit has the most recent data */

    util.bfaTrack('track/update/feedindex', {
        feedItemTrack: true,
        cardIndex: highestCard
    });
}

/**
 * Get all cards on page - editorial and ads
 * @param none
 * @reurns void
 */
_service.getCards = function() {

    var cards = [].concat.apply([],
        dom.find(document.body, '.feed-cards')
        .map(el => dom.find(el, '.js-feed-item'))
    );

    if (typeof cards === 'undefined' || cards.length < 1) {
        setTimeout(_service.getCards, 1000);
        return;
    }

    util.each(cards, function(i, el) {
        _viewportMonitor.add({
            target: el,
            renderLookahead: 0,
            callback: function() {
                _pushItems(i + 1);
            },
            watchOnce: true,
        });
    });
};
export default _service;