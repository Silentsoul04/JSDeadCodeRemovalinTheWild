import fetchFactory from 'fetch-ponyfill';

const fetch = fetchFactory().fetch;

const validateResponseStatus = response => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    }
    return Promise.reject(new Error(response));
};

const getJson = response => response.json();

//
// API
//

const fetchData = url =>
    fetch(url)
    .then(validateResponseStatus)
    .then(getJson);

export default fetchData;



// WEBPACK FOOTER //
// ./src/util-nyt/fetch-data.js