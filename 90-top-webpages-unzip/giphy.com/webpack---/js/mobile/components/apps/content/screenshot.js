import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import css from './screenshot.css'

const AppScreenshot = ({ url, isDesktop, index, is_landing }) => {
    let wrapperCss = isDesktop ? css.desktopWrapper : css.phoneWrapper

    if (is_landing) {
        if (index % 2 === 0) {
            wrapperCss = isDesktop ? css.desktopWrapperEven : css.phoneWrapperEven
        } else {
            wrapperCss = isDesktop ? css.desktopWrapperOdd : css.phoneWrapperOdd
        }
    }

    return (
        <div className={wrapperCss}>
            <div className={isDesktop ? css.desktopScreenshot : css.phoneScreenshot}>
                <div
                    className={isDesktop ? css.desktopScreenshotImage : css.phoneScreenshotImage}
                    style={{ backgroundImage: 'url(' + url + ')' }}
                />
            </div>
        </div>
    )
}

AppScreenshot.propTypes = {
    url: PropTypes.string.isRequired,
    isDesktop: PropTypes.bool.isRequired,
}

export default AppScreenshot
