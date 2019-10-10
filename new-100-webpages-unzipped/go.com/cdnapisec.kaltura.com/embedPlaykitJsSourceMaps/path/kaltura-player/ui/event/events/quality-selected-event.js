// @flow
import {
    FakeEvent
} from '../fake-event';

/**
 * QualitySelectedEvent event
 *
 * @class QualitySelectedEvent
 * @extends {FakeEvent}
 */
class QualitySelectedEvent extends FakeEvent {
    /**
     * @constructor
     *
     * @param {Object} qualityTrack - The selected quality track.
     */
    constructor(qualityTrack: Object) {
        super(FakeEvent.Type.USER_SELECTED_QUALITY_TRACK);
        this.payload = {
            qualityTrack: qualityTrack
        };
    }
}

export {
    QualitySelectedEvent
};



// WEBPACK FOOTER //
// ./event/events/quality-selected-event.js


// WEBPACK FOOTER //
// ui/event/events/quality-selected-event.js