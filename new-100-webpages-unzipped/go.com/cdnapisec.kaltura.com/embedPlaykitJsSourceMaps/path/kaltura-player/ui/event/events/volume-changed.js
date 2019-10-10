// @flow
import {
    FakeEvent
} from '../fake-event';

/**
 * VolumeChangedEvent event
 *
 * @class VolumeChangedEvent
 * @extends {FakeEvent}
 */
class VolumeChangedEvent extends FakeEvent {
    /**
     * @constructor
     *
     * @param {number} volume - The new volume.
     */
    constructor(volume: number) {
        super(FakeEvent.Type.USER_CHANGED_VOLUME);
        this.payload = {
            volume: volume
        };
    }
}

export {
    VolumeChangedEvent
};



// WEBPACK FOOTER //
// ./event/events/volume-changed.js


// WEBPACK FOOTER //
// ui/event/events/volume-changed.js