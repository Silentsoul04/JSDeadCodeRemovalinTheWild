import { colors } from '@giphy/react-giphy-brand'
import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { message } from 'shared/redux/message'
import styled from 'styled-components'
import Captcha from 'shared/components/captcha'
import { Login, TermsOfService } from 'shared/components/form/copy'
import CSRFToken from 'shared/components/form/csrftoken-hoc'
import FacebookButton from 'shared/components/form/facebook-button'
import { FormContainer, Content, CTAButton as BrandCTAButton } from 'shared/components/form/form-components'
import JoinFields, { FIELDS } from 'shared/components/form/fields'
import OptionalFormInputs from 'shared/components/form/join/optional-form-inputs'
import FormHeader from 'shared/components/form/form-header'
import appendNextUrl from 'shared/components/form/get-next-url'

const sectionMargin = 17

const FacebookButtonWithMargin = styled(FacebookButton)`
    margin-bottom: ${sectionMargin}px;
`

const CaptchaWithMargin = styled(Captcha)`
    margin-bottom: ${sectionMargin}px;
`

const CTAButton = styled(BrandCTAButton)`
    width: 100%;
`

@CSRFToken
@withRouter
@connect(
    undefined,
    { message },
)
class Form extends PureComponent {
    state = {
        joinEnabled: false,
    }
    areFieldsOkay = () => this.isFormValid && !this.hasDateError && this.isCaptchaSolved
    onValidChange = isFormValid => {
        this.isFormValid = isFormValid
        this.setState({ joinEnabled: this.areFieldsOkay() })
    }
    onDateError = hasDateError => {
        this.hasDateError = hasDateError
        this.setState({ joinEnabled: this.areFieldsOkay() })
    }
    onCaptchaChange = responseToken => {
        this.isCaptchaSolved = !!responseToken
        this.setState({ joinEnabled: this.areFieldsOkay() })
    }
    onCaptchaError = () => {
        this.onCaptchaChange(null)
    }
    submit = event => {
        event.stopPropagation()
        event.preventDefault()
        if (this.areFieldsOkay()) {
            this.form.submit()
        }
    }
    render() {
        const { joinEnabled } = this.state
        const { csrftoken } = this.props
        return (
            <FormContainer>
                <form method="POST" action={appendNextUrl(`/join`)} onSubmit={this.submit} ref={c => (this.form = c)}>
                    {csrftoken && <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />}
                    <Content>
                        <FacebookButtonWithMargin
                            label="Join with Facebook"
                            onClick={() => (location.href = `/login/facebook/${location.search}`)}
                        />
                        <FormHeader>Account Details</FormHeader>
                        <JoinFields
                            onValidChange={this.onValidChange}
                            showFields={[FIELDS.email, FIELDS.username, FIELDS.password]}
                        />
                        <OptionalFormInputs onDateError={this.onDateError} />
                        <CaptchaWithMargin onChange={this.onCaptchaChange} onErrored={this.onCaptchaError} />
                        <CTAButton
                            color={joinEnabled ? colors.primaryCTA : colors.giphyDarkGrey}
                            disabled={!joinEnabled}
                        >
                            Sign Up
                        </CTAButton>
                        <TermsOfService />
                        <Login />
                    </Content>
                </form>
            </FormContainer>
        )
    }
}

export default Form
