import Modal from 'shared/components/modal/modal'
import css from './modal-message.css'
import ConfirmCancel from './confirm'

const ModalMessage = props => ( <
    Modal >
    <
    div className = {
        css.container
    }
    style = {
        props.style
    } >
    <
    ConfirmCancel { ...props
    }
    isModal = {
        true
    }
    /> <
    /div> <
    /Modal>
)

export default ModalMessage