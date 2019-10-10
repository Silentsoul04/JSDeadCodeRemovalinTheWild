import {
    DO_NOT_TRACK,
    CONVERT_DAY_TO_MINUTES
} from './constants';

export default {
    create(name, value, minutes, cookieDomain) {
        const domain = cookieDomain ? `domain=${cookieDomain};` : '';
        let date;
        let expires = '';

        if (minutes) {
            date = new Date();
            date.setTime(date.getTime() + (minutes * 60 * 1000));
            expires = `expires=${date.toGMTString()};`;
        }
        document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};${expires}${domain}path=/`;
    },

    read(name) {
        const cookies = document.cookie.split(';');
        let cookieMatch = cookies.filter(cookie => cookie.indexOf(name) > -1);
        cookieMatch = cookieMatch.length > 0 ? cookieMatch[0].split(`${name}=`)[1] : '';
        return (cookieMatch && cookieMatch.trim()) || '';
    },

    delete(name, cookieDomain) {
        const domain = cookieDomain ? `domain=${cookieDomain}; ` : '';
        document.cookie = `${name}=; ${domain}path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
    },

    updatePCCookie(data, section) {
        const doNotTrack = this.handleGDPR();
        if (doNotTrack) {
            return;
        }
        let sailthruPC = this.read('sailthru_pc');
        const maxCookieSize = 168 * 10 + 2;
        const cookieExpiry = 365 * CONVERT_DAY_TO_MINUTES;
        const version = '00';
        const defaultUUID = '00000000-0000-0000-0000-000000000000';
        const contentHash = data.contentHash;
        const list = section.list ? section.list : '000000000000000000000000';
        const groupId = '0000'; // placeholder until section.groupId is implemented in personalize-service
        const newClickData = `${contentHash}${section.sectionId}${list}${defaultUUID}${defaultUUID}${groupId}`;

        if (sailthruPC) {
            const clickDataList = sailthruPC.substr(2).match(/.{168}/g);
            const clickMatches = clickDataList.filter(clickData => clickData.indexOf(contentHash) === -1);
            sailthruPC = clickMatches.join('');
        }
        sailthruPC = `${version}${newClickData}${sailthruPC}`;
        sailthruPC = sailthruPC.substr(0, maxCookieSize);
        this.create('sailthru_pc', sailthruPC, cookieExpiry);
    },

    updateSailthruContentCookie(contentHash) {
        const doNotTrack = this.handleGDPR();
        if (doNotTrack) {
            return;
        }
        const maxContentHashes = 16;
        let sailthruContentCookie = this.read('sailthru_content');
        if (contentHash) {
            const hashLength = contentHash.length;
            const maxHashLength = maxContentHashes * hashLength;
            const index = sailthruContentCookie.indexOf(contentHash);
            if (index !== -1) {
                sailthruContentCookie =
                    sailthruContentCookie.substring(0, index) + sailthruContentCookie.substring(
                        index + hashLength);
            }

            // Appends a string to the end of a base string. Limits the string
            // to 16 times the length of the addition.
            let newContentCookieValue = sailthruContentCookie + contentHash;
            newContentCookieValue = newContentCookieValue.length > maxHashLength ?
                newContentCookieValue.substring(hashLength) :
                newContentCookieValue;

            this.delete('sailthru_content');
            this.create('sailthru_content', newContentCookieValue, 365 * CONVERT_DAY_TO_MINUTES);
        }
    },

    updatePageviewsCookie() {
        const overlayCookie = this.read('sailthru_overlays');
        let cookie = this.read('sailthru_pageviews');
        cookie = Number(cookie) + 1;
        this.create('sailthru_pageviews', cookie, 30);

        if (overlayCookie.length > 0) {
            this.create('sailthru_overlays', overlayCookie, 30);
        }
    },

    setSailthruHid(sailthruHid) {
        const cookieDomain = this.getCookieDomain(window.location.hostname);
        if (!sailthruHid) {
            this.delete('sailthru_hid', cookieDomain);
            return;
        }
        const cookieExpiry = 365 * CONVERT_DAY_TO_MINUTES;
        this.create('sailthru_hid', sailthruHid, cookieExpiry, cookieDomain);
    },

    setCookiesDoNotTrack() {
        this.create('sailthru_no_cookies', '1', 365 * CONVERT_DAY_TO_MINUTES);
    },

    unsetCookiesDoNotTrack() {
        this.delete('sailthru_no_cookies');
        if (this.read('sailthru_hid') === DO_NOT_TRACK) {
            this.setSailthruHid(null);
        }
    },

    isAnonymousUser() {
        const horizonId = this.read('sailthru_hid');
        return !horizonId;
    },

    isDoNotTrackUser() {
        const horizonId = this.read('sailthru_hid');
        const cookiesDoNotTrack = this.read('sailthru_no_cookies');
        return horizonId === DO_NOT_TRACK || horizonId === 'optout' || !!cookiesDoNotTrack;
    },

    refreshNoCookies() {
        if (this.read('sailthru_no_cookies')) {
            this.setCookiesDoNotTrack();
        }
    },

    handleGDPR() {
        if (this.isDoNotTrackUser()) {
            this.delete('sailthru_content');
            this.delete('sailthru_pc');
            this.delete('sailthru_bid');
            this.delete('sailthru_sid');
            this.delete('sailthru_cid');
            this.delete('sailthru_rid');
            this.delete('sailthru_recommendation_hidden');

            this.delete('sailthru_hid', this.getCookieDomain(window.location.hostname));
            this.setSailthruHid(DO_NOT_TRACK);
            return true;
        }
        return false;
    },

    getCookieDomain(hostName) {
        const domainExp = /(?:[\w-]+\.(?:com|co|gov|edu|org|net)\.[\w-]{1,2}|[\w-]+\.[\w-]{2,})$/;
        const result = domainExp.exec(hostName);
        if (result) {
            return result[0];
        }
        return null;
    },
};



// WEBPACK FOOTER //
// ./v1/src/js/modules/cookies.js