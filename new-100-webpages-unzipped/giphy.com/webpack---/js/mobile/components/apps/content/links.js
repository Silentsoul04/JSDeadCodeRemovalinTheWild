import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import css from './links.css'

const AppLinks = ({
        ios,
        android,
        vive,
        oculus
    }) => ( <
        div className = {
            css.appLinks
        } > {
            ios ? < a className = {
                css.iosLink
            }
            href = {
                ios
            }
            /> : ''} {
                android ? < a className = {
                    css.androidLink
                }
                href = {
                    android
                }
                /> : ''} {
                    vive ? < a className = {
                        css.viveLink
                    }
                    href = {
                        vive
                    }
                    /> : ''} {
                        oculus ? < a className = {
                            css.oculusLink
                        }
                        href = {
                            oculus
                        }
                        /> : ''} <
                        /div>
                    )

                    AppLinks.propTypes = {
                        ios: PropTypes.string,
                        android: PropTypes.string,
                        vive: PropTypes.string,
                        oculus: PropTypes.string,
                    }

                    export default AppLinks