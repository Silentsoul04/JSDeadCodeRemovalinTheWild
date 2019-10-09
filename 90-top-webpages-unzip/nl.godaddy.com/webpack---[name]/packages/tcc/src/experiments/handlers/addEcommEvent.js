const gaClient = require('../../ga/ga');
const tealium = require('../../tealium/tealium');
const object = require('@exp/exp-utils/helper/object');
const SchemaHandler = require('@exp/exp-utils/schema/schemaHandler');

let _isDuplicatePurchase = false;

class AddEcommEventHandlerV1 extends SchemaHandler {
  preProcess() {
    if (this.schemaType === 'purchase') {
      if (_isDuplicatePurchase) {
        throw 'cmd: LogEcommEvent duplicate purchase event detected, ignoring duplicate';
      }
      _isDuplicatePurchase = true;
    }
  }

  process() {
    super.process({
      TEALIUM: this._handleTealium.bind(this),
      GA: this._handleGA.bind(this),
      EVENT_SVC: this._handleEventSvc.bind(this)
    });
  }

  _handleTealium(input) {
    tealium.sendEcommerceEvent(this.schemaType, input);
  }

  _handleGA(input) {
    gaClient.sendEcommerceEvent(this.schemaType, object.merge(this.extras, input));
  }

  _handleEventSvc(input) {
    if (this.schemaType === 'purchase') {
      // call the 'add_event' schema
      this.schemaHelper.handleSchema('add_event', undefined, 'v1', {
        type: 'purchase',
        eid: input.eid,
        properties: {
          order_total: input.value,
          order_total_renewal_usd: input.order_total_renewal_usd
        }
      },
      this.extras,
      // This call should only go to the event service
      // The current handler will handle calls to GA/Tealium
      ['EVENT_SVC']);
    }
  }
}

let internalExports = {};
if (process.env.NODE_ENV !== 'production') {
  internalExports = {
    setDuplicatePurchaseFlag: (bool) => {
      _isDuplicatePurchase = bool;
    }
  };
}

module.exports = object.merge(
  {
    addEcommEventV1: AddEcommEventHandlerV1
  },
  internalExports
);
