document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.error-banner__close');
    const input = document.querySelector('.error-banner__search-input');

    function handleButtonClick() {
        document.body.classList.remove('error-messaging');
    }

    if (button) {
        button.addEventListener('click', handleButtonClick);
    }

    function handleSearchInput() {
        window.location.href = `/search/?q=${input.value}`;
    }

    if (input) {
        input.addEventListener('keyup', (e) => {
            e.preventDefault();
            if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
                handleSearchInput();
            }
        });
    }
});



// WEBPACK FOOTER //
// ./src/assets/js/homepage/404-disclaimer.js