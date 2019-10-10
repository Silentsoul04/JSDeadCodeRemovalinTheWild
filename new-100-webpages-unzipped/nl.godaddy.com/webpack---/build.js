import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import * as ReactIntl from 'react-intl/src';
import ReactTransitionGroup from 'react-transition-group';

if (window.LOCALE_DATA) {
    ReactIntl.addLocaleData(window.LOCALE_DATA);
}

window.ux = window.ux || {};
window.ux.React = window.React = React;
window.ux.ReactDOM = window.ReactDOM = ReactDOM;
window.ux.PropTypes = window.PropTypes = PropTypes;
window.ux.ReactTransitionGroup = window.ReactTransitionGroup = ReactTransitionGroup;

//
// Expose React hook to Format.JS, requires React as global.
//
window.ux.intl = ReactIntl;



// WEBPACK FOOTER //
// ./build.js