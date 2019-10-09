import { adBlockClasses } from './clientConfigService';

/**
 * Checks to see if Cookie exists.
 * @return {Boolean}
 */
function getABCookie() {
	return document.cookie.indexOf('forbes_ab') !== -1;
}

/**
 * Checks to see if AdBlock is running by adding an element with
 * banned classes to the DOM to see if they are hidden by default.
 * @return {Boolean}
 */
function getABRunning() {
	const adBlockDiv = document.createElement('div');
	adBlockDiv.setAttribute('class', adBlockClasses);
	document.body.append(adBlockDiv);
	return window.getComputedStyle(adBlockDiv).display === 'none';
}

/**
 * Creates proper value for ad reporting. Nothing (undefined) should be
 * reported by default. If the user was flagged by the welcome ad
 * as an adblock user, report whether they kept it "on" or turned it
 * "off".
 * @return {undefined|String}
 */
function getAbParam() {
	let abParam;
	if (getABCookie()) {
		abParam = getABRunning() ? 'on' : 'off';
	}
	return abParam;
}

export { getAbParam as default };



// WEBPACK FOOTER //
// ./src/assets/js/shared/adblock.js