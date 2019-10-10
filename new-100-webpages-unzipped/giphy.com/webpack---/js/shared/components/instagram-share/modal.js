import {
    PureComponent
} from 'react'
import {
    Input,
    Button
} from '@giphy/react-giphy-brand'
import PropTypes from 'prop-types'
import {
    trim
} from 'lodash'
import {
    instagram as sendEmail
} from 'shared/api'
import isEmail from 'validator/lib/isEmail'
import Modal from '../modal/modal'
import css from './instagram.css'
import TapLink from 'shared/components/tap-link'
import STEP from './instagram-config'

const {
    string,
    bool,
    number,
    oneOfType
} = PropTypes
const SMALL_APP_HEIGHT = 460
class InstagramModal extends PureComponent {
    static propTypes = {
        // to know if we're on small screens
        appHeight: number,
        // we'll share this gif id
        gifId: oneOfType([string, number]).isRequired,
        // if the user is logged in this will be populated
        userEmail: string,
        // push the app in the app store
        plugApp: bool,
        // target for the modal
        elementId: string,
    }
    state = {
        // if there's a current email error
        emailError: '',
        // is the send email enabled
        ctaEnabled: false,
        // start with send and work through steps
        step: STEP.SEND,
    }
    componentWillUnmount() {
        clearTimeout(this.onChangeTimeout)
        clearTimeout(this.onKeyPressTimeout)
    }

    componentDidMount() {
        const {
            userEmail
        } = this.props
        if (userEmail) {
            this.onEmailChange(userEmail)
        }
    }

    onEmailChange(val) {
        val = trim(val)
        this.isEmailOkay = isEmail(val)
        this.emailAddress = val
        this.setState({
            ctaEnabled: this.isEmailOkay,
            emailError: this.isEmailOkay || val === '' ? '' : 'Invalid Email',
        })
    }

    onKeyPress(val) {
        // on key press we want to toggle the message but
        // only on change to we want to enable the send button
        clearTimeout(this.onKeyPressTimeout)
        val = trim(val)
        this.isEmailOkay = isEmail(val)
        this.onKeyPressTimeout = setTimeout(() => {
            this.setState({
                emailError: this.isEmailOkay || val === '' ? '' : 'Invalid Email',
            })
        }, 500)
    }

    onChange = val => {
        this.setState({
            emailError: ''
        })
        clearTimeout(this.onChangeTimeout)
        // validate after 500ms
        this.onChangeTimeout = setTimeout(() => {
            this.onEmailChange(val)
        }, 500)
    }

    submit = async () => {
        const {
            hasSeenAppPlug,
            gifId,
            setHasSeenAppPlug,
            appLink,
            onClose
        } = this.props
        const {
            step
        } = this.state
        switch (step) {
            case STEP.SEND:
                if (this.sending) {
                    return
                }
                if (this.input) {
                    // on iOS, pressing send doesn't always blur the input
                    this.input.blur()
                }
                this.sending = true
                this.setState({
                    step: STEP.SENDING,
                    ctaEnabled: false,
                })
                await sendEmail(gifId, this.emailAddress)
                this.sending = false
                this.setState({
                    ctaEnabled: true,
                    step: hasSeenAppPlug || !appLink ? STEP.GOT_IT : STEP.PLUG_APP,
                })
                if (appLink) {
                    // save the has seen to localStorage
                    setHasSeenAppPlug(true)
                }
                break
            case STEP.GOT_IT:
                onClose()
                break
            case STEP.PLUG_APP:
                window.open(appLink, '_blank')
                onClose()
                break
            default:
                break
        }
    }

    render() {
        const {
            emailError,
            ctaEnabled,
            step,
            // isFocused helps us control whether we center or pin
            // the dialog to the top (on mobile only!)
            isFocused,
        } = this.state
        const {
            title,
            subtitle,
            peeker,
            cta,
            close,
            showInput
        } = step
        const {
            userEmail,
            appHeight,
            isMobile,
            onClose,
            elementId
        } = this.props
        const mobileInputProps = isMobile ?
            {
                onFocus: () => {
                    this.setState({
                        isFocused: true
                    })
                },
                onBlur: () => {
                    this.setState({
                        isFocused: false
                    })
                },
            } :
            {}
        const emailInput = ( <
            Input ref = {
                c => (this.input = c)
            }
            autoFocus = {!userEmail && appHeight > SMALL_APP_HEIGHT
            }
            errorMessage = {
                emailError
            }
            initialValue = {
                userEmail
            }
            inputProps = {
                {
                    onChange: e => this.onChange(e.target.value),
                    onKeyPress: e => this.onKeyPress(e.target.value),
                    type: 'email',
                    name: 'email',
                    placeholder: 'Enter your email address',
                    autoComplete: 'off',
                    ...mobileInputProps,
                }
            }
            />
        )
        // on small screens, you can't see the send button when keyboard is focused
        const showPeeker = !isFocused || appHeight > SMALL_APP_HEIGHT
        return ( <
            Modal noCenter = {
                isFocused
            }
            scrollToTop = {
                true
            }
            elementId = {
                elementId
            } >
            <
            div className = {
                isFocused ? css.container : ''
            }
            style = {
                isFocused ? {} : {
                    marginTop: -peeker.height
                }
            } > {
                showPeeker && ( <
                    div className = {
                        peeker.css
                    }
                    key = {
                        peeker.src
                    }
                    style = {
                        {
                            height: peeker.height
                        }
                    } >
                    <
                    img src = {
                        peeker.src
                    }
                    width = {
                        100
                    }
                    /> <
                    /div>
                )
            } <
            div className = {
                css.modal
            } >
            <
            div className = {
                css.title
            }
            key = {
                title
            }
            style = {
                {
                    marginTop: peeker.marginTop
                }
            } > {
                title
            } <
            /div> <
            div className = {
                css.subtitle
            } > {
                subtitle
            } < /div> {
                showInput && emailInput
            } <
            TapLink onTap = {
                this.submit
            } >
            <
            Button disabled = {!ctaEnabled
            }
            stretch = {
                true
            } > {
                cta
            } <
            /Button> <
            /TapLink> {
                close && ( <
                    TapLink onTap = {
                        onClose
                    } >
                    <
                    div className = {
                        css.cancel
                    } > {
                        close
                    } < /div> <
                    /TapLink>
                )
            } <
            /div> <
            /div> <
            /Modal>
        )
    }
}

export default InstagramModal