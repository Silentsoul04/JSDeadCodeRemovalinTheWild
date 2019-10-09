document.addEventListener('DOMContentLoaded', () => {
	const editionDropdown = document.querySelector('.edition-dropdown');
	const editionDropdownButton = document.querySelector('.edition-dropdown__button');

	if (editionDropdownButton) {
		editionDropdownButton.addEventListener('click', () => {
			editionDropdown.classList.toggle('edition-dropdown--open');
		});
	}
});



// WEBPACK FOOTER //
// ./src/assets/js/homepage/edition-dropdown.js