/* eslint-disable max-classes-per-file */

import {
    Component
} from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-named-as-default
import $ from '../../../../components/util/jquery.js';
import log from '../../../../components/util/log.js';
import cgiarg from '../../../../components/util/cgiarg.js';
import onclick from '../../../../components/util/onclick.js';
import onchange from '../../../../components/util/onchange.js';
import Popup from '../../../../components/util/popup.js';


class CreativeCommons {
    /**
     * Render the LicenseLink React component to a DOM node with the
     * appropriate ID.
     */
    static setUpLicenseLink() {
        const root = document.getElementById('js-creativecommons-choose_link');

        if (!root)
            return;

        ReactDOM.render( < LicenseLink href = {
                root.dataset.href
            }
            licenseName = {
                root.dataset.licenseName
            }
            licenseSelected = {
                root.dataset.licenseSelected === 'true'
            }
            />, root);
        }


        /**
         * @param {string} newLicenseName
         */
        static update_link(newLicenseName) {
            const linkReactRoot = document.getElementById('js-creativecommons-choose_link');

            linkReactRoot.dataset.licenseName = newLicenseName;
            linkReactRoot.dataset.licenseSelected = 'true';

            CreativeCommons.setUpLicenseLink();
        }

        static removeRetainLicenseInput() {
            $('#retaincclicense').remove();
            $('#newcclicense').val(''); // ensure don't submit a stale value
        }

        static chosen() {
            log('the chosen one');
            window.opener.$('#newcclicense').val(cgiarg('license_url'));
            window.opener.$('#newccimage').val(cgiarg('license_image'));
            window.opener.$('#newccname').val(cgiarg('license_name')).trigger('change');

            // remove the current assignment link
            window.opener.$('#retaincclicense').remove();

            window.close();
        }
    }


    /**
     * React component, Creative Commons license selector link.
     * Shows a "remove" link when a license is selected.
     */
    class LicenseLink extends Component {
        constructor(props) {
            super(props);
            LicenseLink.DEFAULT_LINK_TEXT = 'Choose license';

            this.state = {
                licenseSelected: props.licenseSelected,
                linkText: props.licenseName || LicenseLink.DEFAULT_LINK_TEXT,
                oldLicenseName: props.licenseName,
            };

            this.removeLicense = this.removeLicense.bind(this);
        }

        componentWillReceiveProps(newProps) {
            this.setState({
                licenseSelected: newProps.licenseSelected,
                linkText: newProps.licenseName || LicenseLink.DEFAULT_LINK_TEXT,
            });
        }

        getLicenseChangeMessage() {
            const {
                oldLicenseName
            } = this.state;
            if (oldLicenseName && this.wasLicensedChanged())
                return `Change license (currently ${oldLicenseName})`;

            return '';
        }

        wasLicensedChanged() {
            const {
                oldLicenseName,
                linkText
            } = this.state;
            return oldLicenseName !== linkText;
        }

        removeLicense() {
            this.setState({
                licenseSelected: false,
                linkText: LicenseLink.DEFAULT_LINK_TEXT,
            });

            CreativeCommons.removeRetainLicenseInput();
        }

        render() {
            const {
                href
            } = this.props;
            const {
                text,
                licenseSelected
            } = this.state;

            const poplink = Popup.renderPopupLink({
                href,
                text,
                height: 600,
                width: 600,
                title: this.getLicenseChangeMessage(),
            });
            // log(poplink);
            /* eslint-disable react/no-danger */
            return ( <
                span >
                <
                span dangerouslySetInnerHTML = {
                    {
                        __html: poplink
                    }
                }
                />

                {
                    ' '
                }

                {
                    licenseSelected && ( <
                        span >
                        <
                        button type = "button"
                        className = "creativecommons-remove-license-button"
                        onClick = {
                            this.removeLicense
                        } >
                        (remove) <
                        /button> <
                        /span>
                    )
                } <
                /span>
            );
        }
    }
    LicenseLink.defaultProps = {
        href: undefined,
        licenseName: undefined,
        licenseSelected: false,
    };
    LicenseLink.propTypes = {
        href: PropTypes.string,
        licenseName: PropTypes.string,
        licenseSelected: PropTypes.bool,
    };


    $(() => {
        onclick('.js-creativecommons-choose_link', CreativeCommons.choose_link);

        CreativeCommons.setUpLicenseLink();

        $('.js-creativecommons-chooser').each(() => CreativeCommons.chosen());

        onchange('#newccname', () => { // @see chosen() above
            const license_name = $('#newccname').val();
            log('#newccname changed', license_name);
            CreativeCommons.update_link(license_name);
        });
    });