import { Application } from 't3js';
import ajax from '@buzzfeed/buzzblocks/js/services/ajax';
import dom from '@buzzfeed/buzzblocks/js/services/dom';
import util from '@buzzfeed/buzzblocks/js/services/util';
import solid from '@buzzfeed/buzzblocks/js/services/solid';

Application.addBehavior('load-feed', function(context) {
  //'use strict';

  //-----------------------------------------------------------
  // Private
  //-----------------------------------------------------------
  var _feedEl;
  var _nextPage;
  var _lastPage;
  var _isLoading = false;
  var _isScrollToResults = false;
  var _feedName;
  var _flexproEnabled;
  var _originValue = '';
  var _feedParams;
  var _eventHandlers = [];
  var _bzfd = context.getGlobal('BZFD');
  var _pageName;
  var _hiddenFeed = {};
  var _currentItems = [];
  const _canSwitchFilters = Object.keys(_bzfd.Context.page.filters).length > 0;

  /**
   * Load Feed
   * @returns {void}
   */
  function _fetchFeed() {
    if (!_nextPage || _isLoading) {
      return;
    }
    _fireLoadingState(true);
    context.broadcast('feed-toggle-spinner', {
      show: 1
    });
    if(!_hiddenFeed[_feedName] || (_hiddenFeed[_feedName] && _hiddenFeed[_feedName].firstLoad)) {

      if(_hiddenFeed[_feedName] && _hiddenFeed[_feedName].currentPage) {
        _nextPage = _hiddenFeed[_feedName].currentPage;
        delete _hiddenFeed[_feedName].currentPage;
      }

      const feed = (_feedName in _bzfd.Context.page.filters) ? _bzfd.Context.page.filters[_feedName].feed : _feedName;
      let url = `/${_bzfd.Context.page.edition}/feedpage/feed/${feed}?page=${_nextPage}&page_name=${_pageName}`;

      if (_flexproEnabled) {
        url = url + `&flexpro=${_flexproEnabled}`;
      }

      if (_feedParams) {
        url += `&${_feedParams}`;
      }

      ajax.get(url, {
        type: 'text',
      })
        .then(_loadSuccess)
        .catch(_loadFail);
    } else {
      _fireLoadingState(false);
      dom.show(_getFilteredItems());
      if (_hiddenFeed[_feedName]) {
        _hiddenFeed[_feedName].firstLoad = true;
      }
    }
  }

  /**
   * Whether or not the card is a package
   * @returns {bool}
   */
  function isPackage(card) {
    // not text node or something (with nodeName === '#text') bc it breaks dom.getData
    let result = !card.nodeName.match(/^#/)
      // all packages have buzzblock data attribute set to `package`
      && (dom.getData(card, 'buzzblock') || '').match(/package/) !== null;
    return result;
  }

  /**
   * Whether or not the card is a newsletter signup
   * @returns {bool}
   */
  function isNewsletterSignup(card) {
    return !card.nodeName.match(/^#/) && /^newsletter-wrapper/.test(card.className);
  }


  /**
   * Return if the subbuzz does not already exist
   * @returns {bool}
   */
  function isNotDuplicate(card) {
    if (isPackage(card) || isNewsletterSignup(card)) {
      return true;
    }
    if (!card.dataset || !card.dataset.id) {
      return false;
    }
    return _currentItems.indexOf(card.dataset.id) === -1;
  }

  /**
   * Add feed items in _currentItems
   * @returns {void}
   */
  function _flagItems(items) {
    items.forEach(function(card) {
      if(card.getAttribute('data-id')) {
        _currentItems.push(card.getAttribute('data-id'));
      }
    });
  }

  function _loadSuccess(data) {
    if(!data) {
      _loadFail();
      return;
    }
    if (!_currentItems.length) {
      _flagItems(dom.find(_feedEl, _canSwitchFilters ? `.js-feed-item--${_feedName}` : `.js-feed-item`));
    }

    _fireLoadingState(false);
    const dirtyMarkup = Array.from(dom.stringToHTML(data));
    let cleanMarkup = dirtyMarkup.filter(isNotDuplicate);
    _markFilteredItems(cleanMarkup);
    _flagItems(cleanMarkup);
    dom.append(_feedEl, cleanMarkup);
    context.application.startAll(_feedEl);

    _pageView(_nextPage);
    _nextPage += 1;
    if (_lastPage && _lastPage < _nextPage) {
      _nextPage = false;
      context.broadcast('last-content-loaded');
    }
    context.broadcast('feed-load-success', {
      feed: _feedName,
      items: cleanMarkup
    });
    window.bfa('plugin/binder/trigger', { type: 'updateTargets' });
    _scrollToResults();
    resetResultsHeight();
    addOriginParam(_originValue);
  }

  function addOriginParam(origin) {
    if (origin) {
      var posts = dom.find(_feedEl, '.js-feed-item');
      posts.forEach(function(post) {
        var postLinks = dom.find(post, 'a');
        postLinks.forEach(function(link) {
          if (!link.href.match('origin=') && !link.href.match('amazon.com')) {
            link.href = link.href + '?origin=' + origin;
          }
        });
      });
    }
  }

  function _onUpdateOrigin(data) {
    if (typeof data.origin !== 'undefined') {
      _originValue = data.origin;
      addOriginParam(_originValue);
    }
  }

  function _loadFail() {
    _nextPage = null;
    _fireLoadingState(false);

    context.broadcast('feed-load-fail', {});
    context.broadcast('last-content-loaded');
  }

  function _setFeed(params) {
    if (_isLoading) {
      return false;
    }
    if (!params || !params.feed) {
      return false;
    }
    if (typeof params.page === 'undefined') {
      params['page'] = 1;
    }
    if (typeof params.origin === 'undefined') {
      params['origin'] = _originValue;
    }
    if (typeof params.scrollToResults === 'undefined') {
      params['scrollToResults'] = false;
    }
    // If a filter page is loaded set the feed from the path
    _feedName = params.feed;
    _feedParams = util.objectToQueryString(params.feedParams || {}).slice(1);
    _nextPage = params.page;
    _originValue = params.origin;
    _isScrollToResults = params['scrollToResults'];
    _markFilteredItems();
    return true;
  }

  function _scrollToResults() {
    if (_isScrollToResults && !solid.isAny(['md', 'lg'])) {
      var offsetTop = dom.offset(_feedEl).top;
      var additionalOffset = 50;
      if (solid.isAny(['sm'])) {
        additionalOffset += 60;
      }
      window.scrollTo(0, offsetTop - additionalOffset);
    }
  }

  function savePreviousResultsHeight() {
    dom.setStyle(document.body, {'height': dom.size(document.body).height + 'px'});
  }

  function resetResultsHeight() {
    dom.setStyle(document.body, {'height': 'auto'});
  }

  function _clearFeed() {
    savePreviousResultsHeight();
    _hiddenFeed[_feedName] = {
      currentPage: _nextPage
    };
    dom.hide(_getFilteredItems());
    _currentItems = [];
  }

  /**
  * Fire BFA page view event
  * @returns {void}
  */
  function _pageView(page) {
    var url;
    var path;

    page = page >= 2 ? '?p=' + page : '';
    path = document.location.href.replace(_bzfd.Config.webRoot, '');
    url = path + page;
    util.bfaTrack('track/page/view', {
      data: {
        'url': url
      },
      opt: {
        'dimension1': 'feedpager'
      },
    });
  }

  function _feedReload(params) {
    _clearFeed();
    _setFeed(params);
    _fetchFeed();
  }

  function _onLoadingState(isLoading) {
    _isLoading = isLoading;
  }

  function _fireLoadingState(isLoading) {
    context.broadcast('feed-is-loading', isLoading);
  }

  /**
   * Adds event handlers
   * @returns {Array} - list of henler keys
   */
  function _addEventHandlers() {
    _eventHandlers['feed-load'] = _fetchFeed;
    _eventHandlers['feed-clear'] = _clearFeed;
    _eventHandlers['feed-set'] = _setFeed;
    _eventHandlers['feed-reload'] = _feedReload;
    _eventHandlers['feed-update-origin'] = _onUpdateOrigin;
    _eventHandlers['feed-is-loading'] = _onLoadingState;

    return util.getKeys(_eventHandlers);
  }

  /**
   * Add js-feed-item class to feed elements for easier sorting and identification
   * @returns {void}
   */
  function _markFilteredItems(items) {
    if (!items) {
      // feed items don't seem to have a uniform class
      const selectors = ['.js-feed-item', '.card', '[data-module]'];
      items = dom.find(
        document.body,
        selectors.map((s) => `#${_feedEl.id} > ${s}:not(.js-feed-item--filtered):not(.loader)`).join(',')
      );
    }
    let className = 'js-feed-item js-feed-item--filtered';
    if (_canSwitchFilters) {
      className = `${className} js-feed-item--${_feedName}`;
    }
    dom.addClass(items, className);
  }

  function _getFilteredItems() {
    if (!_canSwitchFilters) {
      return [];
    }
    return dom.find(_feedEl, `.js-feed-item--${_feedName}`);
  }

  //-----------------------------------------------------------
  // Public
  //-----------------------------------------------------------

  var behavior = {};

  /**
   * Handles event subscriptions.
   * @param {String} msg - event name.
   * @param {Object} data - event data.
   * @listens nav-more-menu
   * @return {void}
   */
  behavior.onmessage = function(msg, data) {
    var handler = _eventHandlers[msg];
    if (typeof handler === 'function') {
      handler.call(this, data);
    }
  };

  /**
   * Behavior initialization logic
   * @ignore
   * @returns {void}
   */
  behavior.init = function() {
    _lastPage = context.getConfig('lastPage');
    _feedEl = context.getElement();
    _pageName = _bzfd.Context.page.name;
    _flexproEnabled = context.getConfig('flexproEnabled');
    behavior.messages = _addEventHandlers();
    if (util.getQueryParams().origin) {
      _originValue = util.getQueryParams().origin;
      addOriginParam(_originValue);
    }
    context.broadcast('feed-main-loaded', {
      items: dom.find(_feedEl, '.js-feed-item')
    });
  };

  /**
   * Cleanup
   * @ignore
   * @returns {void}
   */
  behavior.destroy = function() {

  };

  return behavior;
});
export const name = 'load-feed';
