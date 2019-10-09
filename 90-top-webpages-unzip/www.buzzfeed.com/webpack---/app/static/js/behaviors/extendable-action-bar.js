import { Application } from 't3js';
import dom from '@buzzfeed/buzzblocks/js/services/dom';
import feedSharing from '../services/feed-sharing';
import modalDialog from '../services/modal-dialog';

Application.addBehavior('extendable-action-bar', function(context) {
  'use strict';

  var _fAd;
  var _dialogTitle = 'Share This Article';

  var _behavior = {};

  function _onMoreClick() {
    var actionBar = require('../../components/homepage/share/action-bar--more.html');

    var cardId = context.getConfig('cardId');
    if (_fAd) {
      cardId = 'wid:' + cardId;
    }
    var cardData = feedSharing.getData(cardId);
    //render content for modal dialog
    var content = actionBar.render({
      //@todo remove isMore usage
      isMore: 1,
      position: 'more',
      bfa: {
        l: 'More-Share',
      },
      id: cardId,
      platforms: cardData.platforms,
      cardPosition: cardData.position,
    });
    modalDialog.show({
      data: {
        showHeader: 1,
        header: _dialogTitle,
        content: content,
        modifier: 'more',
      },
      callback: function(element) {
        //find action bar and init module
        var el = dom.find(element, '.js-action-bar--position-more')[0];
        if (el) {
          context.application.start(el);
        }
      },
    });
  }

  _behavior.onclick = function(ev, elem, elemType) {
    if (elemType === 'more-button') {
      ev.preventDefault();

      _onMoreClick();
    }
  };

  _behavior.init = function() {
    _fAd = context.getConfig('fAd');
  };

  _behavior.destroy = function() {};

  return _behavior;
});
export const name = 'extendable-action-bar';
