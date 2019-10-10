const checkCookie = (cookieName, document = window.document) => {
    try {
        return Boolean(
            document.cookie
            .toLowerCase()
            .split(';')
            .filter(item => item.indexOf(cookieName.toLowerCase()) >= 0).length
        );
    } catch (error) {
        return false;
    }
};

export default checkCookie;



// WEBPACK FOOTER //
// ./src/util/check-cookie.js