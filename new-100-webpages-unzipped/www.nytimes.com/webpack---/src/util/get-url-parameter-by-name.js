import getCurrentURL from './get-current-url';

const getUrlParameterByName = name => {
    // eslint-disable-next-line no-useless-escape
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp(`[\\?&#]${name}=([^&#]*)`);
    const results = regex.exec(getCurrentURL());
    return results === null ?
        '' :
        decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export default getUrlParameterByName;



// WEBPACK FOOTER //
// ./src/util/get-url-parameter-by-name.js