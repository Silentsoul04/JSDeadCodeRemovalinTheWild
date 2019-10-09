import { colors } from '@giphy/react-giphy-brand'
import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { omit } from 'lodash'
import AvatarInput from 'shared/components/form/avatar'
import {
    ApplicationSubmitWarning,
    ArtistOrBrand,
    Copy,
    LearnMore,
    NeedHelp,
    TermsOfServiceApply,
} from 'shared/components/form/copy'
import CSRFToken from 'shared/components/form/csrftoken-hoc'
import Fields, { FIELDS, Label, flattenResponse } from 'shared/components/form/fields'
import { CTAButton as BrandCTAButton, FormInput } from 'shared/components/form/form-components'
import FormHeader from 'shared/components/form/form-header'
import appendNextUrl from 'shared/components/form/get-next-url'
import FormLabel from 'shared/components/form/inputs/label'
import Radio from 'shared/components/form/inputs/radio'
import { STATUS_MESSAGES, STATUS_STYLE } from 'shared/components/message/flash-message'
import withLocationState from 'shared/components/with-location-state'
import { message } from 'shared/redux/message'
import { getUser } from 'shared/redux/reducers'
import { desktop, mobile } from 'shared/util/media-query'
import styled from 'styled-components'
import TooltipCopy from './tooltips'

const ERRORS = {
    CRITICAL_ERROR: 'CRITICAL_ERROR',
    VALIDATION_ERROR: 'VALIDATION_ERROR',
}

const ERROR_MESSAGES = {
    CRITICAL_ERROR: STATUS_MESSAGES.SOMETHING_WENT_WRONG,
    VALIDATION_ERROR: 'Whoops! There were some issues with your application.',
}

const formWidth = 330
const gutter = 10

const Form = styled.form`
    display: flex;
    justify-content: center;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-weight: bold;
    ${FormInput} {
        font-weight: normal;
    }
    ${desktop.css`
        align-items: center;
    `};
    ${mobile.css`
        max-width: ${formWidth}px;
    `};
`

const FormHeaderAlign = styled(FormHeader)`
    ${desktop.css`
        margin-left: ${formWidth + gutter}px;
    `};
    margin-bottom: 7px;
`

const CTAButton = styled(BrandCTAButton)`
    max-width: ${formWidth}px;
    width: 100%;
    margin-bottom: 20px;
`

const ArtistOrBrandContainer = styled(Copy)`
    text-align: left;
    margin-bottom: 10px;
    max-width: ${formWidth}px;
    width: 100%;
`

const ArtistOrBrandCopy = styled(ArtistOrBrand)`
    margin-top: 22px;
    margin-bottom: 10px;
`

const FormFields = styled.div`
    ${desktop.css`
        ${FormInput} {
            width: ${formWidth}px;
        }
        ${Label} {
            height: 40px;
            width: ${formWidth}px;
            margin-right: ${gutter}px;
        }
        margin-right: ${formWidth + gutter}px;
    `};
`

const AvatarAlign = styled.div`
    display: flex;
    margin: 30px 0;
    align-items: flex-start;
    ${mobile.css`
        flex-direction: column;
    `};
`

const AvatarLabel = styled(FormLabel)`
    margin-right: ${gutter}px;
    width: ${formWidth}px;
    ${mobile.css`
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
    `};
`

const CenterFixedWidth = styled.div`
    max-width: ${formWidth}px;
    width: 100%;
    text-align: center;
`

const TermsOfService = styled(TermsOfServiceApply)`
    margin-bottom: 20px;
    font-size: 14px;
`

const ApplyType = 'request_type'
@CSRFToken
@withRouter
@connect(
    state => ({
        user: getUser(state),
    }),
    { message },
)
@withLocationState(['needsToChangeAvatar'])
class ArtistForm extends PureComponent {
    constructor(props) {
        super(props)
        this.isAvatarValid = !props.needsToChangeAvatar
        this.applicationFields = [FIELDS.socialURL, FIELDS.organization, ApplyType]
    }
    state = {
        submitEnabled: false,
        responseErrors: {},
    }
    onError = errorMessage => {
        const { message } = this.props
        window.scrollTo(0, 0)
        message(errorMessage, STATUS_STYLE.ERROR)
    }
    areFieldsOkay = () => this.isFormValid && this.hasSelectedType && this.isAvatarValid
    onValidChange = isFormValid => {
        this.isFormValid = isFormValid
        this.setState({ submitEnabled: this.areFieldsOkay() })
    }
    onAvatarValid = isValid => {
        this.isAvatarValid = isValid
        this.setState({ submitEnabled: this.areFieldsOkay() })
    }
    onAvatarError = (error, errorMessage) => {
        this.onError(errorMessage)
    }
    onRadioSelect = ({ target }) => {
        this.hasSelectedType = true
        this.setState({ submitEnabled: this.areFieldsOkay(), isArtist: target.value === 'artist' })
    }
    ackResponseError = field => {
        // Callback for `Fields` to notify this Component to remove a server-side field error,
        // once a user has seen it and changed the field value
        const { responseErrors } = this.state
        if (responseErrors[field]) {
            this.setState({ responseErrors: omit(responseErrors, field) })
        }
    }
    submit = event => {
        event.stopPropagation()
        event.preventDefault()
        if (this.areFieldsOkay()) {
            const { csrftoken, user } = this.props
            const formData = new FormData(this.form)
            // Prefix these fields with `application_` to differentiate between `OnboardingRequest` and `User` fields
            this.applicationFields.forEach(field => {
                formData.set(`application_${field}`, formData.get(field))
                formData.delete(field)
            })
            var request = new XMLHttpRequest()
            request.open('PUT', appendNextUrl(`/api/v1/users/${user.id}/apply/`))
            request.setRequestHeader('X-CSRFToken', csrftoken)
            request.onload = () => {
                let data
                try {
                    data = JSON.parse(request.responseText)
                } catch (err) {
                    this.handleResponse(new Error(ERRORS.CRITICAL_ERROR))
                    return
                }
                if (request.status >= 200 && request.status < 300) {
                    this.handleResponse(null, data)
                } else {
                    this.handleResponse(new Error(ERRORS.VALIDATION_ERROR), data)
                }
            }
            request.onerror = () => {
                this.handleResponse(new Error(ERRORS.CRITICAL_ERROR))
            }
            request.send(formData)
        }
    }
    handleResponse = (error, data) => {
        const { history } = this.props
        if (!error) {
            history.push('/apply/done')
            return
        }
        if (data && data.application && data.application.user) {
            // Errors in a nested `application.user` array indicate an eligibility issue with the user's account,
            // not field validation issues. Wanted to use a 409 status code for this, but DRF forces a 400.
            this.onError(data.application.user.join(' '))
            return
        } else if (data) {
            // Field-level validation errors are passed as props back to `Fields`
            this.setState({ responseErrors: flattenResponse(data) })
        }
        this.onError(ERROR_MESSAGES[error.message])
    }
    render() {
        const { responseErrors, submitEnabled, isArtist } = this.state
        const { className, user, needsToChangeAvatar } = this.props
        if (!user.username) {
            return null
        }
        return (
            <Form className={className} method="POST" onSubmit={this.submit} ref={c => (this.form = c)}>
                <FormContainer>
                    <LearnMore />
                    <ArtistOrBrandContainer>
                        <ArtistOrBrandCopy />
                        <Radio
                            onChange={this.onRadioSelect}
                            group={ApplyType}
                            inputs={[{ value: 'partner', label: 'Brand' }, { value: 'artist', label: 'Artist' }]}
                        />
                    </ArtistOrBrandContainer>
                    <FormFields>
                        <FormHeaderAlign>Account Details</FormHeaderAlign>
                        <Fields
                            showLabel
                            onValidChange={this.onValidChange}
                            showFields={[
                                FIELDS.email,
                                FIELDS.username,
                                FIELDS.contact,
                                FIELDS.displayName,
                                FIELDS.primarySite,
                                FIELDS.socialURL,
                                FIELDS.organization,
                                FIELDS.location,
                            ]}
                            customFieldProps={isArtist ? TooltipCopy.artist : TooltipCopy.brand}
                            user={user}
                            responseErrors={responseErrors}
                            ackResponseError={this.ackResponseError}
                            aggroErrorMessages={true}
                        />
                        <AvatarAlign>
                            <AvatarLabel label="Upload Avatar" info="250 x 250. jpg, png, or gif" />
                            <AvatarInput
                                onError={this.onAvatarError}
                                defaultAvatar={user.avatar}
                                needsToChangeAvatar={needsToChangeAvatar}
                                onValid={this.onAvatarValid}
                            />
                        </AvatarAlign>
                    </FormFields>
                    <CenterFixedWidth>
                        <ApplicationSubmitWarning />
                        <TermsOfService />
                        <CTAButton
                            color={submitEnabled ? colors.primaryCTA : colors.giphyDarkGrey}
                            disabled={!submitEnabled}
                        >
                            Submit Application
                        </CTAButton>
                        <NeedHelp />
                    </CenterFixedWidth>
                </FormContainer>
            </Form>
        )
    }
}

export default ArtistForm
