import GoogleAnalytics from '../lib/analytics/google';

const config = JSON.parse(
    decodeURIComponent(document.querySelector('meta[name=wp-ga-config]').content)
);

const gaClient = new WP.analytics.GoogleAnalytics(config);

// TODO: Remove once events are out of views
window.WP.analytics.google = gaClient;

export default gaClient;