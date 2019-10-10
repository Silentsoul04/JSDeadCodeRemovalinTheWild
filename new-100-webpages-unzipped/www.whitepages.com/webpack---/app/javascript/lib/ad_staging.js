import queryString from 'query-string';

const queryParams = queryString.parse(location.search);

if (queryParams['ad-stg']) {
    if (queryParams['ad-stg'] === 'false') {
        localStorage.removeItem('ad-stg');
    } else {
        localStorage.setItem('ad-stg', queryParams['ad-stg']);
    }
}

export default localStorage.getItem('ad-stg');