import { isIOS } from './is-mobile';

document.addEventListener('DOMContentLoaded', () => {
	const html = document.querySelector('html');
	const body = document.querySelector('body');
	const searchModal = document.querySelector('.search-modal');
	const searchInput = document.querySelector('.search-modal__input');
	const closeIcon = searchModal.querySelector('.search-modal__icon--close-circle');
	const searchIcon = document.querySelector('.header .icon--search');
	const submitIcon = document.querySelector('.search-modal__submit');

	// On initial load, set the value to '' for weird Chrome back button issues:
	// https://jira.forbes.com/browse/HDRFTR-66
	if (searchInput) {
		searchInput.value = '';
	}

	function handleClickSearchIcon(e) {
		if (!body.classList.contains('body--search-modal-open')) {
			body.classList.add('body--search-modal-open');

			if (isIOS) {
				html.classList.add('touch-screen-input-fixed-modal');
				body.classList.add('touch-screen-input-fixed-modal');
			}
		}
		e.preventDefault();
	}

	if (searchIcon) {
		searchIcon.addEventListener('click', (e) => {
			handleClickSearchIcon(e);
		});

		searchIcon.addEventListener('keyup', (e) => {
			if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
				handleClickSearchIcon(e);
			}
		});
	}

	if (closeIcon) {
		closeIcon.addEventListener('click', () => {
			body.classList.remove('body--search-modal-open');

			if (isIOS) {
				html.classList.remove('touch-screen-input-fixed-modal');
				body.classList.remove('touch-screen-input-fixed-modal');
			}
		});

		closeIcon.addEventListener('keyup', (e) => {
			if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
				body.classList.remove('body--search-modal-open');
			}
		});
	}

	function handleClickSubmitIcon(e) {
		e.preventDefault();
		window.location.href = `/search/?q=${searchInput.value}`;
	}

	if (submitIcon) {
		submitIcon.addEventListener('click', (e) => {
			handleClickSubmitIcon(e);
		});

		submitIcon.addEventListener('keyup', (e) => {
			if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
				handleClickSubmitIcon(e);
			}
		});
	}
});



// WEBPACK FOOTER //
// ./src/assets/js/shared/search-modal.js