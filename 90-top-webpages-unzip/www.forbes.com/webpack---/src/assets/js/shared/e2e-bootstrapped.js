import { serverData } from './clientConfigService';

document.addEventListener('DOMContentLoaded', () => {
	if (serverData.isE2E) {
		window.isE2EBootstrapped = true;
	}
});



// WEBPACK FOOTER //
// ./src/assets/js/shared/e2e-bootstrapped.js