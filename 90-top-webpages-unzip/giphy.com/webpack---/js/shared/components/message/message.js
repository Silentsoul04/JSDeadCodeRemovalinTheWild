import PropTypes from 'prop-types'
import css from './message.css'

const Message = ({ children, title, description, isModal }) => (
    <div className={isModal ? css.modalContainer : css.fixedContainer}>
        <div className={css.inner}>
            <h2 className={css.title}>{title}</h2>
            {description && <h3 className={css.subtitle}>{description}</h3>}
            {children}
        </div>
    </div>
)

Message.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
}

export default Message
