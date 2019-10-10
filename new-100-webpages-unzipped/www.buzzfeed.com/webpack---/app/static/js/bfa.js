/**
 * @fileoverview
 * Webpack entry for creating BFA bundle, which is used by both core-ux and enhanced-ux versions.
 */
import './tracking/bfa/bfa_setup';
import facebook from './services/facebook';

/**
 * Log a page view once facebook has loaded
 */
facebook.init().then((fb) => {
    fb.AppEvents.logPageView();
});