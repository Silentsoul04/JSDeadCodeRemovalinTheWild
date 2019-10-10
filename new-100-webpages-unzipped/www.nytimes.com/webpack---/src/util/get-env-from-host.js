import getHost from './get-host';

const getEnvFromHost = (host = getHost()) => {
    let env = 'production';
    const pathname = document.location.pathname;

    if (
        host === 'localhost' ||
        host.indexOf('.local.') !== -1 ||
        host.indexOf('localhost.') !== -1
    ) {
        env = 'localhost';
    } else if (pathname.indexOf('/video-static/vhs3/preview/') !== -1) {
        env = 'preview';
    } else if (host.indexOf('.dev.') !== -1) {
        env = 'development';
    } else if (host.indexOf('.stg.') !== -1 || host.indexOf('.sbx.') !== -1) {
        env = 'staging';
    }

    return env;
};

export default getEnvFromHost;



// WEBPACK FOOTER //
// ./src/util/get-env-from-host.js