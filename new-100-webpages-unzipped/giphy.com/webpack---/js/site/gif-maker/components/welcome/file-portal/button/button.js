import PropTypes from 'prop-types'
import buttonHorizontalCSS from './button-horizontal.css'
import buttonVerticalCSS from './button-vertical.css'
import buttonCSS from './button.css'

const getIcon = (css, type) => {
    switch (type) {
        case 'video':
            return css.iconVideo
        case 'photo':
            return css.iconPhoto
        case 'browse':
            return css.iconBrowse
        case 'drag':
            return css.iconDrag
        default:
            return css.iconWebcam
    }
}

const getCSS = isVertical =>
    isVertical ? { ...buttonCSS,
        ...buttonVerticalCSS
    } : { ...buttonCSS,
        ...buttonHorizontalCSS
    }

const FilePortalInputButton = ({
    label,
    description,
    icon,
    isVertical
}) => {
    const css = getCSS(isVertical)
    return ( <
        div className = {
            css.container
        } >
        <
        div className = {
            getIcon(css, icon)
        }
        /> <
        div className = {
            css.copyContainer
        } >
        <
        div className = {
            css.subtitle
        } > {
            label
        } < /div> <
        span className = {
            css.description
        } > {
            description
        } < /span> <
        /div> <
        /div>
    )
}

FilePortalInputButton.propTypes = {
    label: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    isVertical: PropTypes.bool.isRequired,
}

export default FilePortalInputButton