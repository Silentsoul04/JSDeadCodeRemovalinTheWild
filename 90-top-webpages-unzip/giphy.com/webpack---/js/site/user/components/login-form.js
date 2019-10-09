import { colors, SectionHeader } from '@giphy/react-giphy-brand'
import { PureComponent } from 'react'
import { withRouter } from 'react-router'
import { Content, CTAButton as BrandCTAButton, FormContainer } from 'shared/components/form/form-components'
import styled from 'styled-components'
import { Join, TermsOfServiceLogin, ForgotPassword } from 'shared/components/form/copy'
import CSRFToken from 'shared/components/form/csrftoken-hoc'
import FacebookButton from 'shared/components/form/facebook-button'
import appendNextUrl from 'shared/components/form/get-next-url'
import LoginFields, { FIELDS } from 'shared/components/form/fields'

const sectionMargin = 6

const FacebookButtonWithMargin = styled(FacebookButton)`
    margin-bottom: ${sectionMargin}px;
`

const OR = styled(SectionHeader)`
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 4px;
    color: ${colors.giphyLightGrey};
`

const CTAButton = styled(BrandCTAButton)`
    width: 100%;
`

@CSRFToken
@withRouter
class Form extends PureComponent {
    state = {
        submitEnabled: false,
    }
    areFieldsOkay = () => this.isFormValid
    onValidChange = isFormValid => {
        this.isFormValid = isFormValid
        this.setState({ submitEnabled: this.areFieldsOkay() })
    }
    submit = event => {
        event.stopPropagation()
        event.preventDefault()
        if (this.areFieldsOkay()) {
            this.form.submit()
        }
    }
    render() {
        const { submitEnabled } = this.state
        const { csrftoken } = this.props
        return (
            <FormContainer>
                <form method="POST" action={appendNextUrl(`/login`)} onSubmit={this.submit} ref={c => (this.form = c)}>
                    {csrftoken && <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />}
                    <Content>
                        <FacebookButtonWithMargin
                            label="Login with Facebook"
                            onClick={() => (location.href = `/login/facebook/${location.search}`)}
                        />
                        <OR>or</OR>
                        <LoginFields onValidChange={this.onValidChange} showFields={[FIELDS.email, FIELDS.password]} />
                        <CTAButton
                            color={submitEnabled ? colors.primaryCTA : colors.giphyDarkGrey}
                            disabled={!submitEnabled}
                        >
                            Log in
                        </CTAButton>
                        <TermsOfServiceLogin />
                        <Join />
                        <ForgotPassword />
                    </Content>
                </form>
            </FormContainer>
        )
    }
}

export default Form
