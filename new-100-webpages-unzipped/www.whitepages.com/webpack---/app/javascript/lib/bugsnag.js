import bugsnag from 'bugsnag-js';

export default bugsnag(process.env.BUGSNAG_API_KEY);