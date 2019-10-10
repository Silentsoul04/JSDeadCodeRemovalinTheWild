import preact from 'preact'; // eslint-disable-line no-unused-vars

function compareVersions(version1, version2) {
    const numbers1 = version1.split('.').map(Number);
    const numbers2 = version2.split('.').map(Number);

    const offset = numbers2.length - numbers1.length;

    // zero pad / equalize arrays
    for (let i = 0; i < Math.abs(offset); i++) {
        if (offset > 0) {
            numbers1.push(0);
        } else {
            numbers2.push(0);
        }
    }

    for (let i = 0; i < numbers1.length; i++) {
        if (numbers1[i] > numbers2[i]) {
            return 1;
        } else if (numbers1[i] < numbers2[i]) {
            return -1;
        }
    }
    return 0;
}

const Locker = ({
    userAgent,
    env,
    userStatus
}) => {
    const prodSubscribeUrl = `https://www.nytimes.com/subscription/multiproduct/lp8XKGC.html?campaignId=7HU89&URI=${document
    .location.origin + document.location.pathname}`;
    const stgSubscribeUrl = `https://mwcm-author.prd.nytimes.com/subscription/multiproduct/lp8XKGC.html?URI=${document
    .location.origin + document.location.pathname}`;
    const webLoginUrl = `https://myaccount.nytimes.com/auth/login?URI=${document
    .location.origin + document.location.pathname}`;

    let loginUrl = '';
    let subscribeUrl = '';
    if (userAgent.indexOf('nytios') !== -1) {
        const appVersion = userAgent.match(/^.*nytios\/(\d+(\.\d+){0,2}).*$/)[1];
        // If the iOS app being used it older than 6.6.3, we want to show weblinks instead of deep links
        if (compareVersions(appVersion, '6.6.3') === -1) {
            loginUrl = webLoginUrl;
            if (env === 'production') {
                subscribeUrl = prodSubscribeUrl;
            } else {
                subscribeUrl = stgSubscribeUrl;
            }
        } else {
            loginUrl = 'nytimes://login';
            subscribeUrl = 'nytimes://products';
        }
    } else if (userAgent.indexOf('nyt_android') !== -1) {
        loginUrl = webLoginUrl;
        subscribeUrl = 'nytimes://reader/lp/subscribe/';
    } else {
        loginUrl = webLoginUrl;
        if (env === 'production') {
            subscribeUrl = prodSubscribeUrl;
        } else {
            subscribeUrl = stgSubscribeUrl;
        }
    }

    return ( <
        p className = "locked-msg" > {!userStatus.isLoggedIn && ( <
                span >
                <
                a href = {
                    loginUrl
                } > Login < /a> or{' '} <
                a href = {
                    subscribeUrl
                } > become a subscriber < /a> to gain early access to
                this episode. <
                /span>
            )
        } {
            userStatus.isLoggedIn &&
                !userStatus.subscriber && ( <
                    span >
                    <
                    a href = {
                        subscribeUrl
                    } > Become a subscriber < /a> to gain early access
                    to this episode. <
                    /span>
                )
        } <
        /p>
    );
};

export default Locker;



// WEBPACK FOOTER //
// ./src/plugins/audio-lock-for-non-subs/component/index.js