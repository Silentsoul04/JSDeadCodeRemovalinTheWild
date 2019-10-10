const getQueryString = url => {
    const link = document.createElement('a');
    link.href = url;
    return link.search;
};

export default getQueryString;



// WEBPACK FOOTER //
// ./src/util/get-query-string.js