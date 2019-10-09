const browserHelper = require('@exp/exp-utils/helper/browser');
const configHelper = require('../helpers/config');

const object = require('@exp/exp-utils/helper/object');
const logger = require('@exp/exp-utils/helper/logger');

// These regex values determine what onclick functions will be delayed
const _onClickRegexValues = [
  /\blocation\.href\b/i,
  /\bwindow\.location\b/i,
  /\batlPCGoToUrl\b/i,
  /\bpcj_lnkx\b/i,
  /\bpcj_win\b/i
];

const _ignoredHrefs = /^(#|(javascript|mailto|file|ftp):)/i;
const _absoluteHref = /^(https?:)?\/\//;

function _findOnClickHandler(element) {
  return browserHelper.iterateAncestors((elem) => {
    if (elem.onclick) {
      if (process.env.NODE_ENV !== 'production') {
        logger.debug('findOnClickHandler found on click element', elem);
      }
      return elem;
    }
  }, element);
}

function _updateOnClickEvent(element) {
  if (!element) {
    return;
  }
  const origOnClickElement = _findOnClickHandler(element);
  if (!origOnClickElement || !origOnClickElement.onclick) {
    return;
  }

  const origOnClickFunc = origOnClickElement.onclick;
  const funcStr = origOnClickFunc.toString();
  let regexMatch = false;
  if (funcStr) {
    // Check if function contains one of the regex values
    for (let i = 0; i < _onClickRegexValues.length; i++) {
      regexMatch = _onClickRegexValues[i].test(funcStr);
      if (regexMatch) {
        if (process.env.NODE_ENV !== 'production') {
          logger.debug('_updateOnClickEvent found regex match on onClick', funcStr);
        }
        break;
      }
    }
  }

  if (regexMatch) {
    // create an updated onclick function that only runs the onclick with an explicit run parameter (so we can run it with a delay)
    origOnClickElement.onclick = (evt, obj) => {
      if (obj && obj.run) {
        origOnClickFunc();
      }
    };
    element.interceptOnClick = true; // set a value on the element so that we know to intercept on the onclick event
    origOnClickElement.interceptOnClick = true; // also make sure we intercept if the main element is clicked
  }
}

function _getElementFromEvent(evt) {
  if (!evt) {
    return;
  }
  let element = evt.target || evt.srcElement || evt.currentTarget;  // might need to evaluate this chain
  if (element && element.nodeType && element.nodeType === 3) {
    // defeat Safari bug
    element = element.parentNode;
  }
  return element;
}

function _eventHasEID(element, evt) {
  const eventProps = browserHelper.getClickEventData(element, evt);
  if (process.env.NODE_ENV !== 'production') {
    if (!eventProps.e_id) {
      logger.debug('_eventHasEID event has no EID');
    }
  }
  return !!eventProps.e_id;
}

function _eventHasPromo(element) {
  const eventProps = browserHelper.getPromoEventData(element);
  return eventProps.schema === 'add_promotion';
}

function _updateOnClickHandlers(evt) {
  evt || (evt = browserHelper.getWindow().event);
  if (!evt) {
    if (process.env.NODE_ENV !== 'production') {
      logger.debug('updateOnClickHandlers event was null');
    }
    return;
  }

  const element = _getElementFromEvent(evt);
  if (!element) {
    if (process.env.NODE_ENV !== 'production') {
      logger.debug('updateOnClickHandlers target was null');
    }
    return true;
  }

  if (!_eventHasEID(element, evt) && !_eventHasPromo(element)) {
    return true;
  }

  _updateOnClickEvent(element);
}

function _checkTccDisabledForElement(element) {
  return browserHelper.iterateAncestors((elem) => {
    return browserHelper.getAttributeFromElement(elem, 'data-tcc-ignore') === 'true';
  }, element);
}

function _cancelEvent(evt) {
  if (!evt) {
    return;
  }
  if (evt.stopPropagation) {
    evt.stopPropagation();
  }
  if (evt.stopImmediatePropagation) {
    evt.stopImmediatePropagation();
  }
  if (evt.preventDefault) {
    evt.preventDefault();
  }
}

function _interceptOnClickFunction(element, evt) {
  const origOnClickElement = _findOnClickHandler(element);
  if (!origOnClickElement || !origOnClickElement.onclick) {
    return;
  }

  const func = origOnClickElement.onclick;
  if (func && origOnClickElement.interceptOnClick) {
    if (process.env.NODE_ENV !== 'production') {
      logger.debug('_interceptOnClickFunction found click to intercept and delay');
    }
    _cancelEvent(evt);

    setTimeout(() => {
      if (process.env.NODE_ENV !== 'production') {
        logger.debug('_interceptOnClickFunction executing onclick wrapper');
      }
      func(evt, { run: true }); // pass our run parameter so the onclick action executes
    }, configHelper.get('tcc.eventDelayMs'));

    return true;
  }

  return false;
}

function _isSpaHref(href) {
  if (_absoluteHref.test(href)) {
    return false;
  }

  const spaSetting = configHelper.get('tcc.spa');
  if (!spaSetting) {
    return false;
  }

  const spaBaseURL = spaSetting === true ? '/' : spaSetting;
  const spaRegExp = new RegExp('^' + spaBaseURL.replace('/', '\\/'));
  return spaRegExp.test(href);
}

function _isIgnoredHref(href) {
  return href && (_ignoredHrefs.test(href) || _isSpaHref(href));
}

function _findHrefLinkHandler(element) {
  return browserHelper.iterateAncestors((elem) => {
    const href = browserHelper.getAttributeFromElement(elem, 'href');
    if (browserHelper.isValidHrefElement(elem) && href && href.length > 0) {
      const target = browserHelper.getAttributeFromElement(elem, 'target');
      if (target && target !== '_self') {  // anything other than _self will be skipped.
        return;
      }

      if (!_isIgnoredHref(href)) {
        return href;
      }
    }
  }, element);
}

function _checkExternalRedirect(element, evt) {
  const href = _findHrefLinkHandler(element);
  if (href) {
    _cancelEvent(evt);

    if (process.env.NODE_ENV !== 'production') {
      logger.debug('_checkExternalRedirect external click detected', href);
    }
    if (evt.metaKey || evt.ctrlKey) {
      browserHelper.getWindow().open(href);
    } else {
      setTimeout(() => {
        browserHelper.getDocument().location.href = href;
      }, configHelper.get('tcc.eventDelayMs'));
    }
    return true;
  }
  return false;
}

function _checkCancelledEvent(evt) {
  if (!evt) {
    return false;
  }
  if (evt.returnValue !== undefined && evt.returnValue === false) {
    return true;
  }
  return evt.defaultPrevented === true;
}

function _logTccEvent(element, evt) {

  const isPromoEvent = _eventHasPromo(element);
  if (!_eventHasEID(element, evt) && !isPromoEvent) {
    return true;
  }

  if (_checkTccDisabledForElement(element)) {
    if (process.env.NODE_ENV !== 'production') {
      logger.debug('_eventCommand element being ignored due to ignore flag');
    }
    return true;
  }

  if (process.env.NODE_ENV !== 'production') {
    logger.debug('_eventCommand element Clicked', element);
  }

  let eventCopy = false;
  // ie8 hack to clone the array
  if (browserHelper.getWindow().attachEvent) {
    eventCopy = object.merge(evt);
  }

  // asynch push is done to avoid odd recursive behavior
  setTimeout(() => {
    if (isPromoEvent) {
      const promoData = browserHelper.getPromoEventData(element, evt);
      promoData.dom_element = element;

      browserHelper.getWindow()._expDataLayer.push({
        schema: promoData.schema,
        type: 'click',
        version: 'v1',
        data: promoData
      });
    } else if (_eventHasEID(element, evt)) {
      browserHelper.getWindow()._expDataLayer.push({
        schema: 'add_event',
        version: 'v1',
        data: {
          type: 'click',
          dom_element: element,
          dom_event: eventCopy || evt
        }
      });
    }
  }, 0);
}

function _eventCommand(evt) { // eslint-disable-line complexity
  if (process.env.NODE_ENV !== 'production') {
    logger.debug('_eventCommand event started');
  }
  try {
    evt || (evt = browserHelper.getWindow().event);
    if (!evt) {
      if (process.env.NODE_ENV !== 'production') {
        logger.debug('_eventCommand event was null;');
      }
      return true;
    }

    const element = _getElementFromEvent(evt);
    if (!element) {
      if (process.env.NODE_ENV !== 'production') {
        logger.debug('_eventCommand target was null');
      }
      return true;
    }

    const notLogged = _logTccEvent(element, evt);
    if (notLogged) {
      return true;
    }

    const eventCancelled = _checkCancelledEvent(evt);
    if (eventCancelled) {
      if (process.env.NODE_ENV !== 'production') {
        logger.debug('_eventCommand event was cancelled');
      }
      return false;
    }

    if (_checkExternalRedirect(element, evt)) {
      return false;
    }
    return !_interceptOnClickFunction(element, evt);
  } catch (err) {
    logger.error(err);
  }
  if (process.env.NODE_ENV !== 'production') {
    logger.debug('_eventCommand event finished');
  }
  return true;
}

function _attachHandlers() { // eslint-disable-line complexity
  if (configHelper.get('tcc.listenerDisabled') || browserHelper.getWindow().tccListenerDisabled) {
    return;
  }

  const htmlElement = browserHelper.getDocument().getElementsByTagName('html');
  if (!htmlElement) {
    if (process.env.NODE_ENV !== 'production') {
      logger.debug('_attachHandlers html element not found!');
    }
    return;
  }

  const ie8 = browserHelper.getWindow().attachEvent;
  const isiPad = browserHelper.getNavigator() && browserHelper.getNavigator().userAgent &&
    (browserHelper.getNavigator().userAgent.match(/iPad/i) !== null);

  for (let i = 0, max = htmlElement.length; i < max; i++) {
    const element = htmlElement[i];

    if (element && element.attributes && element.attributes['data-tcc-ignore']) {
      continue;
    }
    if (browserHelper.getWindow().addEventListener) {
      if (isiPad) {
        // IPAD specific events
        element.addEventListener('touchstart', _eventCommand, false);
        element.addEventListener('touchend', _updateOnClickHandlers, false);
      } else {
        // All other .. ie9+ FF Chrome
        element.addEventListener('click', _eventCommand, false);
        element.addEventListener('mousedown', _updateOnClickHandlers, false);
      }

    } else if (ie8) {
      element.attachEvent('onclick', _eventCommand);
      element.attachEvent('mousedown', _updateOnClickHandlers);
    }
  }
}

let eventsAttached = false;

function init(reset) {
  if (reset || !eventsAttached) {
    _attachHandlers();
    eventsAttached = true;
  }
}

let internalExports = {};
if (process.env.NODE_ENV !== 'production') {
  internalExports = {
    _attachHandlers: _attachHandlers,
    _cancelEvent: _cancelEvent,
    _checkExternalRedirect: _checkExternalRedirect,
    _checkTccDisabledForElement: _checkTccDisabledForElement,
    _eventCommand: _eventCommand,
    _findHrefLinkHandler: _findHrefLinkHandler,
    _getElementFromEvent: _getElementFromEvent,
    _interceptOnClickFunction: _interceptOnClickFunction,
    _isIgnoredHref: _isIgnoredHref,
    _updateOnClickEvent: _updateOnClickEvent,
    _updateOnClickHandlers: _updateOnClickHandlers
  };
}
module.exports = object.merge(
  {
    init: init
  },
  internalExports
);
