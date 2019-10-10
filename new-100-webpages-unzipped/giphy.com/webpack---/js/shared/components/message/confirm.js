import PropTypes from 'prop-types'
import Tappable from 'react-tappable'
import Message from './message'
import {
    giphyRed
} from 'shared/css/colors.css'
import css from './message.css'

const ConfirmCancel = ({
    confirmLabel = 'Yes, cancel',
    confirmColor = giphyRed,
    cancelColor,
    cancelLabel = 'No',
    title,
    description,
    onCancel,
    onConfirm,
    isModal = false,
}) => ( <
    Message title = {
        title || 'Are you sure you want to cancel?'
    }
    description = {
        description || 'You will lose all your beautiful work!'
    }
    onCancel = {
        onCancel
    }
    onConfirm = {
        onConfirm
    }
    isModal = {
        isModal
    } >
    <
    div className = {
        css.buttons
    } > {
        onCancel && ( <
            Tappable className = {
                css.cancel
            }
            style = {
                {
                    backgroundColor: cancelColor
                }
            }
            onTap = {
                onCancel
            } > {
                cancelLabel
            } <
            /Tappable>
        )
    } {
        onConfirm && ( <
            Tappable className = {
                css.confirm
            }
            style = {
                {
                    backgroundColor: confirmColor
                }
            }
            onTap = {
                onConfirm
            } > {
                confirmLabel
            } <
            /Tappable>
        )
    } <
    /div> <
    /Message>
)

ConfirmCancel.propTypes = {
    confirmLabel: PropTypes.string,
    confirmColor: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    isModal: PropTypes.bool,
}

export default ConfirmCancel