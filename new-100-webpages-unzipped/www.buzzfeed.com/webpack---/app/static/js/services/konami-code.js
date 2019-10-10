'use strict';

import dom from '@buzzfeed/buzzblocks/js/services/dom';

//-----------------------------------------------------------
// Private
//-----------------------------------------------------------

const _a = 65;
const _b = 66;
const _left = 37;
const _up = 38;
const _right = 39;
const _down = 40;
const _pattern = [_up, _up, _down, _down, _left, _right, _left, _right, _b, _a, ];

var _inited = false;
var _id = 0;
var _position = 0;
var _handlers = [];

/**
 * Checks for following key presses with pattern
 * @return {void}
 */
function _check(evt) {
    if (_pattern[_position] === evt.keyCode) {
        _position++;
    } else {
        _position = 0;
    }

    if (_position === _pattern.length) {
        _trigger();
        _position = 0;
    }
}

/**
 * Triggers all handlers.
 * @return {void}
 */
function _trigger() {
    for (var key in _handlers) {
        if (_handlers.hasOwnProperty(key)) {
            _handlers[key]();
        }
    }
}

//-----------------------------------------------------------
// Public
//-----------------------------------------------------------

/**
 * Service for checking Konami code.
 * @exports service:konami-code
 */
var service = {};

/**
 *
 * @param {Function} callback
 * @returns {number}
 */
service.add = function(callback) {
    if (!_inited) {
        dom.on(document, 'keyup', _check);
    } else {
        _inited = true;
    }

    _handlers[++_id] = callback;

    return _id;
};

service.remove = function(id) {
    var hasHandlers = false;

    delete _handlers[id];

    for (var key in _handlers) {
        if (_handlers.hasOwnProperty(key)) {
            hasHandlers = true;
        }
    }

    if (!hasHandlers) {
        dom.off(document, 'keyup', _check);
    }
};

export default service;