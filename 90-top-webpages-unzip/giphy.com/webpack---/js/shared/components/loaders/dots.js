import PropTypes from 'prop-types'
import css from './dots.css'

const DotsLoader = ({ isAbsolute, className = '' }) => {
    const baseClass = isAbsolute ? css.containerAbsolute : css.container
    return (
        <div className={className ? `${baseClass} ${className}` : baseClass}>
            <div className={css.square} />
            <div className={css.square} />
            <div className={css.square} />
            <div className={css.square} />
            <div className={css.square} />
        </div>
    )
}

DotsLoader.propTypes = {
    isAbsolute: PropTypes.bool,
    className: PropTypes.string,
}

export default DotsLoader
