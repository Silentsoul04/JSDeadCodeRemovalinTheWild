// @flow
import {
    FakeEvent
} from '../fake-event';

/**
 * UIVisibilityChangedEvent event
 *
 * @class UIVisibilityChangedEvent
 * @extends {FakeEvent}
 */
class UIVisibilityChangedEvent extends FakeEvent {
    /**
     * @constructor
     *
     * @param {boolean} visible - The visible state.
     */
    constructor(visible: boolean) {
        super(FakeEvent.Type.UI_VISIBILITY_CHANGED);
        this.payload = {
            visible: visible
        };
    }
}

export {
    UIVisibilityChangedEvent
};



// WEBPACK FOOTER //
// ./event/events/ui-visibility-changed-event.js


// WEBPACK FOOTER //
// ui/event/events/ui-visibility-changed-event.js