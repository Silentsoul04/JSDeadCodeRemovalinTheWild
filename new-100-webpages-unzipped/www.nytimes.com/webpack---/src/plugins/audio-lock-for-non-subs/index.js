import dom from 'corleone';
import preact from 'preact';
import getUrlParameterByName from 'src/util/get-url-parameter-by-name';
import getUserAgent from 'src/util/get-user-agent';
import audioControlsStyles from 'src/plugins/audio-controls/component/styles.css';
import audioControlsV2Styles from 'src/plugins/audio-controls/componentV2/styles.css';
import Locker from './component';
import checkUserLoginStatus from './check-user-login-status';

export default {
    enable: false,
    name: 'audioLockForNonSubs',
    proto: {
        async _initialize() {
            const containerEl = this._player.container;
            const audioControlsEl = dom.query(
                `.${audioControlsStyles.wrapper},.${audioControlsV2Styles.wrapper}`,
                containerEl
            );
            audioControlsEl.style.display = 'none';

            try {
                const userStatus = await checkUserLoginStatus();
                let userAgent = '';

                if (getUrlParameterByName('nytapp')) {
                    userAgent = getUserAgent();
                }

                if (userStatus.isLoggedIn && userStatus.isSubscriber) {
                    audioControlsEl.style.display = 'block';
                } else {
                    this.render({
                        userAgent,
                        env: this._player.store.getState().player.options.env,
                        userStatus
                    });
                }
            } catch (error) {
                // Case the User Info API errors, we "fail open".
                audioControlsEl.style.display = 'block';
            }
        },

        render({
            userAgent,
            env,
            userStatus
        }) {
            preact.render( <
                Locker userAgent = {
                    userAgent
                }
                env = {
                    env
                }
                userStatus = {
                    userStatus
                }
                />,
                this._container
            );
        }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/audio-lock-for-non-subs/index.js