const DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3

const Logger = {
    ENABLED:
        global.DEBUG ||
        (global.location &&
            (location.href.indexOf('http://local.giphy.com') === 0 || location.search.indexOf('debug=true') !== -1)),
    LEVEL: 0,
    debug: function(...msg) {
        if (Logger.ENABLED && Logger.LEVEL <= DEBUG) {
            console.debug(...msg) // eslint-disable-line no-console
        }
    },

    info: function(...msg) {
        if (Logger.ENABLED && Logger.LEVEL <= INFO) {
            console.info(...msg) // eslint-disable-line no-console
        }
    },

    warn: function(...msg) {
        if (Logger.ENABLED && Logger.LEVEL <= WARN) {
            console.warn(...msg) // eslint-disable-line no-console
        }
    },
    error: function(...msg) {
        if (Logger.ENABLED && Logger.LEVEL <= ERROR) {
            console.error(...msg) // eslint-disable-line no-console
        }
    },
}
export default Logger
