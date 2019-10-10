import jsonp from 'jsonp';

export default function checkUserLoginStatus() {
    const apiUrl = `https://www.nytimes.com/svc/web-products/userinfo-v3.jsonp`;

    return new Promise((resolve, reject) => {
        jsonp(apiUrl, {
            timeout: 15000
        }, (responseError, responseData) => {
            if (responseError) reject(responseError);

            const userStatus = Object.seal({
                isLoggedIn: false,
                isSubscriber: false
            });

            try {
                userStatus.isSubscriber = responseData.data.subscription.some(
                    subscription => subscription === 'MM'
                );
            } catch (error) {
                userStatus.isSubscriber = false;
            }

            try {
                userStatus.isLoggedIn = Boolean(responseData.data.name);
            } catch (error) {
                userStatus.isLoggedIn = false;
            }

            resolve(userStatus);
        });
    });
}



// WEBPACK FOOTER //
// ./src/plugins/audio-lock-for-non-subs/check-user-login-status.js