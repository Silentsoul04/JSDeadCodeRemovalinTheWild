import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import { Component } from 'react'
import { autobind } from 'core-decorators'
import Callout from './callout'
import { Form } from './form'
import flagGif from '../../redux/flag'
import PowerGlove from 'shared/containers/power-glove'
import css from './flag.css'

export default class Flag extends Component {
    static defaultProps = {
        showButton: true,
    }
    static propTypes = {
        gifID: PropTypes.string.isRequired,
        csrftoken: PropTypes.string.isRequired,
        user: PropTypes.object.isRequired,
        hideCancel: PropTypes.bool,
        isFlagged: PropTypes.bool,
        isActive: PropTypes.bool,
        showButton: PropTypes.bool,
        togglePowerGlove: PropTypes.func,
        onFormToggle: PropTypes.func,
    }

    state = {
        isInvalid: false,
        isActive: this.props.isActive || false,
        isFlagged: this.props.isFlagged || false,
    }

    @autobind
    toggleForm() {
        const { isFlagged, isActive } = this.state
        const { togglePowerGlove, onFormToggle = () => {} } = this.props

        if (isFlagged) {
            return
        }

        togglePowerGlove && togglePowerGlove()
        this.setState({ isActive: !isActive, isInvalid: false })
        onFormToggle(!isActive)
    }

    @autobind
    setIsFlagged(isFlagged) {
        this.setState({ isFlagged })
    }

    @autobind
    onSubmit(form) {
        const { gifID, user } = this.props

        if (!form.checkValidity()) {
            this.setState({ isInvalid: true })
            return
        }

        this.toggleForm()
        const data = new FormData(form)
        data.append('username', user.username)
        return flagGif(gifID, user, data).then(isSucessful => this.setIsFlagged(isSucessful))
    }

    componentDidUpdate() {
        const { isActive } = this.state

        if (isActive && this.formComponent) {
            this.formComponent.getForm().scrollIntoView()
        }
    }

    render() {
        const { hideCancel, Modal, iconLeft, showButton } = this.props
        const { isActive, isFlagged, isInvalid } = this.state
        const calloutClass = isActive ? css.hide : ''
        const FlagForm = () => (
            <Form
                ref={component => (this.formComponent = component)}
                onSubmit={this.onSubmit}
                toggleForm={this.toggleForm}
                isActive={isActive}
                isInvalid={isInvalid}
                hideCancel={hideCancel}
            />
        )

        return (
            <div>
                {showButton && (
                    <div className={calloutClass} onClick={this.toggleForm}>
                        <Callout isFlagged={isFlagged} iconLeft={iconLeft} />
                    </div>
                )}
                {Modal ? (
                    isActive ? (
                        <Modal>
                            <FlagForm />
                        </Modal>
                    ) : null
                ) : (
                    <PowerGlove onCancel={this.toggleForm}>
                        <FlagForm />
                    </PowerGlove>
                )}
            </div>
        )
    }
}
