import { isEurope } from './clientConfigService';

/**
 * Load trustarc popup.
 */
function loadConsentScript() {
	const borderTab = document.createElement('a');
	borderTab.id = 'borderTab';
	const teconsent = document.createElement('div');
	teconsent.id = 'teconsent';
	const trustarcScript = document.createElement('script');
	trustarcScript.src = '//consent.truste.com/notice?domain=forbes.com&c=teconsent&behavior=expressed';
	teconsent.appendChild(trustarcScript);
	borderTab.appendChild(teconsent);
	document.body.appendChild(borderTab);
}

document.addEventListener('DOMContentLoaded', () => {
	if (isEurope && document.cookie.indexOf('notice_gdpr_prefs=') === -1) {
		loadConsentScript();

		const canonical = (window.forbes['simple-site'].tracking || {}).fastSu || '';

		const img = document.createElement('img');
		img.width = 1;
		img.height = 1;
		img.alt = '';
		img.src = `https://www.google-analytics.com/collect?v=1&tid=UA-5883199-3&cid=0&t=event&ec=gdpr&ea=consent&aip=&dl=${encodeURIComponent(canonical)}`;
		document.body.appendChild(img);
	}
});



// WEBPACK FOOTER //
// ./src/assets/js/shared/trustarc.js