export default assetsPath => (fetch(
        `${assetsPath}awepop.js`, {
            mode: 'no-cors',
        })
    .then(() => (false))
    .catch(error => (error.message === 'Failed to fetch')));



// WEBPACK FOOTER //
// ./v1/src/js/modules/contentBlockedUtil.js