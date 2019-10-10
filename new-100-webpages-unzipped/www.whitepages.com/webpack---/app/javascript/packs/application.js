// stylesheets extracted by webpack
import 'application.scss';

// modularized libraries from npm
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'whatwg-fetch';
import bugsnagClient from 'bugsnag';
import 'devbridge-autocomplete';
import Rails from 'rails-ujs';
import '@stimulus/polyfills';
import {
    Application
} from 'stimulus';
import {
    definitionsFromContext
} from 'stimulus/webpack-helpers';

// modularized application scripts
import monster from 'monster';
import Poller from 'poller';
import adStaging from 'ad_staging';
import outdatedBrowser from 'lib/outdatedbrowser';
import BrowserDetection from 'browser_detection';
import {
    detect
} from 'detect-browser';

// unmodularized libraries and application scripts (execute in global context,
// check for global/load order dependencies, e.g. $)
import 'analytics/google';
import 'analytics/amplitude_events';
import 'bootstrap-plugins';
import 'jquery.smartresize';
import 'jquery.scrollTo.min';
import 'floatingFormLabels';
import 'maps';
import 'notification';
import 'person_railcar/search_box_handler';
import 'phone_railcar/shared/rtp_owner';
import 'seo';

$.extend(window, {
    WP: window.WP || {},
    $: jQuery,
    jQuery,
    monster,
    outdatedBrowser
});

$.extend(window.WP, {
    adStg: adStaging,
    BrowserDetection
});

// the rest
Rails.start();

// initialize stimulus
const application = Application.start();
const context = require.context('controllers', true, /.js|.ts$/);
application.load(definitionsFromContext(context));

if ('serviceWorker' in navigator) {
    // don't support firefox service workers for now. They don't behave quite right. They make a call to the precache
    // manifest before checking for an updated sw.js resulting in a lot of 500 error traffic in prod.
    if (detect().name === 'firefox') {
        navigator.serviceWorker.getRegistrations().then(registrations => {
            registrations.forEach(registration => {
                registration.unregister();
            });
        });
    } else {
        window.addEventListener('load', () => {
            navigator.serviceWorker
                .register('/sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }
}

if (
    $('body').hasClass('new-home-page') ||
    $('body').hasClass('background-reports')
) {
    require('src/home_page/index-default');
} else if ($('body').hasClass('home-page')) {
    require('src/home_page/index-411');
}

if ($('body').hasClass('person-serp-page')) {
    require('controllers/person/index');
}

if ($('#vimeo-video').length > 0) {
    require('controllers/shared/vimeo-video');
}

if ($('form.business').length) {
    require('business_search_box_handler');
}

if ($('body').hasClass('phone')) {
    require('phone_railcar/index');
}

if ($('.bg-header').length > 0) {
    require('controllers/shared/header');
}

$(() => {
    $("div[data-poll='true']").each((i, div) => {
        new Poller(div).start();
    });
});

$(() => {
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).on('click', '.modal-backdrop', e => {
    $('.modal.in').modal('hide');
});