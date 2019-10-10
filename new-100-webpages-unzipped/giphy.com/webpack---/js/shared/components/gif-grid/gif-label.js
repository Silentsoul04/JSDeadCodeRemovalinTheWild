import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars

export const HIDDEN_LABEL = 'HIDDEN_LABEL'

export default ({
    css,
    width,
    backgroundColor,
    gif: {
        label,
        url
    }
}) => {
    if (!label && label !== HIDDEN_LABEL) {
        return null
    }
    const style = {
        width,
        backgroundColor
    }
    if (label === HIDDEN_LABEL) {
        style.opacity = 0
    }
    return ( <
        a className = {
            css.label
        }
        style = {
            style
        }
        href = {
            url
        } >
        <
        span className = {
            css.labelText
        } > {
            label
        } < /span> <
        /a>
    )
}