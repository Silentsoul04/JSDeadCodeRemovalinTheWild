import React, {
    Component
} from 'react' //eslint-disable-line
import {
    autobind
} from 'core-decorators'
import Radio from '../inputs/radio'
import css from './form.css'

export class Form extends Component {
    @autobind
    getForm() {
        return this.form
    }

    @autobind
    getFormClass() {
        const {
            isActive,
            isInvalid
        } = this.props

        if (isInvalid) {
            return css.formInvalid
        }

        if (isActive) {
            return css.formActive
        }

        return css.form
    }

    render() {
        const {
            onSubmit,
            toggleForm,
            hideCancel
        } = this.props
        const formClass = this.getFormClass()

        return ( <
            form noValidate className = {
                formClass
            }
            ref = {
                node => (this.form = node)
            }
            onSubmit = {
                e => {
                    e.preventDefault()
                    onSubmit(this.form)
                }
            } >
            <
            div className = {
                css.container
            } >
            <
            header className = {
                css.header
            } >
            <
            h2 > Why are you reporting this GIF ? < /h2> <
            a href = "/terms"
            className = {
                css.info
            }
            /> <
            /header> <
            fieldset className = {
                css.choices
            } >
            <
            Radio className = {
                css.inputGroup
            }
            group = "reason"
            value = "copyright" >
            Uploaded by mistake <
            /Radio> <
            Radio className = {
                css.inputGroup
            }
            group = "reason"
            value = "wrong" >
            Incorrectly tagged <
            /Radio> <
            Radio className = {
                css.inputGroup
            }
            group = "reason"
            value = "nsfw" >
            Sexually explicit <
            /Radio> <
            Radio className = {
                css.inputGroup
            }
            group = "reason"
            value = "violent" >
            Violent imagery <
            /Radio> <
            Radio className = {
                css.inputGroup
            }
            group = "reason"
            value = "spam" >
            Spam or scam <
            /Radio> <
            Radio className = {
                css.inputGroup
            }
            group = "reason"
            value = "community" >
            Doesn’ t belong on GIPHY <
            /Radio> <
            Radio className = {
                css.inputGroup
            }
            group = "reason"
            value = "abusive" >
            Offensive content <
            /Radio> <
            /fieldset> <
            button className = {
                css.buttonPrimary
            } > Submit < /button> {
                !hideCancel ? ( <
                    button className = {
                        css.buttonSecondary
                    }
                    onClick = {
                        e => {
                            e.preventDefault()
                            toggleForm()
                        }
                    } >
                    Cancel <
                    /button>
                ) : null
            } <
            /div> <
            /form>
        )
    }
}