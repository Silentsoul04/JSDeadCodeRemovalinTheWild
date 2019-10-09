import { IUser } from '@giphy/js-types'
import { IconTooltip } from '@giphy/react-giphy-brand'
import isURL from 'is-url'
import { each, every, map, mapValues, noop, pick, pickBy, snakeCase } from 'lodash'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import log from 'shared/util/log'
import { desktop, mobile } from 'shared/util/media-query'
import styled from 'styled-components'
import isEmail from 'validator/lib/isEmail'
import { FormInput } from './form-components'
import getBirthdayError from './get-birthday-error'
import SharedLabel from './inputs/label'

export const FIELDS = {
    email: 'email',
    username: 'username',
    password: 'password',
    contact: 'contact_name',
    displayName: 'display_name',
    primarySite: 'primary_site',
    socialURL: 'social_url',
    organization: 'organization',
    location: 'location',
    birthdate: 'birthdate',
    facebook: 'facebook',
    instagram: 'instagram',
    tumblr: 'tumblr_site',
    twitter: 'twitter',
}

export function flattenResponse(response: object) {
    // Brings nested field names in error response to top level; converts the array of error message(s) to a string
    const flattened = {}
    const flatten = (obj: object) => {
        for (const field of Object.keys(obj)) {
            if (Array.isArray(obj[field])) {
                flattened[field] = obj[field].join(' ')
            } else {
                flatten(obj[field])
            }
        }
    }
    flatten(response)
    return flattened
}

const getInput = (type: string, name: string, placeholder: string, label?: string, optional = false) => ({
    type,
    name,
    placeholder,
    autoComplete: 'off',
    label,
    optional,
})

export const FieldContainer = styled.div`
    display: flex;
    ${mobile.css`
        flex-direction: column;
    `};
`

export const Label = styled(SharedLabel)`
    ${desktop.css`
        margin-right: 10px;
    `};
`

type Validated = {
    okay: boolean
    has: boolean
    error?: string
    showError: boolean
}

type FieldType = {
    // TODO how to use InputHTMLAttributes?
    [key: string]: any
    label?: string
    tooltip?: string
    type?: string
    name?: string
    placeholder?: string
    optional?: boolean
}

export type FieldUpdate = [string, FieldType]

type Props = {
    user: IUser
    showFields: string[]
    responseErrors: any
    customFieldProps?: FieldUpdate[]
    aggroErrorMessages: boolean
    showLabel?: boolean
    noTooltip?: boolean
    noOptional?: boolean
    onValidChange: (isValid: boolean, validated?: Validated) => void
    ackResponseError: (field: string) => void
    className?: string
}

type State = {
    validated: { [key: string]: Validated }
    isValid: boolean
}

class Fields extends PureComponent<Props, State> {
    static propTypes = {
        user: PropTypes.object,
    }
    static defaultProps = {
        showFields: [],
        label: false,
        user: {},
        responseErrors: {}, // Server-side errors passed from parent component (e.g. username unavailable)
        ackResponseError: noop, // Callback after a field change to notify parent component to remove a field's server-side error from props
        aggroErrorMessages: false, // If `false`, user must enter a value in a field before seeing an error msg; if `true`, display errors in blank required fields on blur event
    }
    constructor(props) {
        super(props)
        // Create initial `validated` object in state using optional fields
        this.updateCustomProps()
        this.state = {
            isValid: false,
            validated: mapValues(
                pickBy(this.fields, value => value.optional),
                (): Validated => {
                    return {
                        okay: true,
                        has: false,
                        error: '',
                        showError: false,
                    }
                },
            ),
        }
        // Pre-populate fields with user data
        each(props.user, (val, key) => {
            const field = this.fields[snakeCase(key)]
            if (field) field.defaultValue = val
        })
    }
    componentDidMount() {
        const { user, onValidChange } = this.props
        each(user, (value, key) => {
            const field = this.fields[snakeCase(key)]
            // check values provided by user object
            if (field) field.onChange({ target: { value } })
        })
        onValidChange(this.state.isValid)
    }
    componentDidUpdate(prevProps, prevState) {
        const { validated } = this.state
        const { showFields, responseErrors, customFieldProps } = this.props
        const prevResponseErrors = prevProps ? prevProps.responseErrors : {}
        let validatedWithResponseErrors = { ...validated } // Copy `validated`, then update using `responseErrors`
        let isValid = false
        let newError = false
        if (customFieldProps !== prevProps.customFieldProps) {
            this.updateCustomProps()
            // can't use gdsfp since we update an object on `this`
            this.forceUpdate()
        }

        // Add every new error in `responseErrors` to `validated` object, and mark field as `!okay`, before determining `isValid`
        each(responseErrors, (value, key) => {
            if (value !== prevResponseErrors[key]) {
                validatedWithResponseErrors[key] = {
                    ...validated[key],
                    okay: false,
                    error: value,
                    showError: true,
                }
                newError = true
            }
        })

        isValid = every(pick(this.fields, showFields), (_, key) => {
            const field = validatedWithResponseErrors[key]
            if (field) {
                const { optional } = this.fields[key]
                if (!field.has && optional) {
                    return true
                }
                return field.okay
            }
            return false
        })

        if (newError || isValid !== prevState.isValid) {
            const { onValidChange } = this.props
            this.setState({
                isValid,
                validated: validatedWithResponseErrors,
            })
            onValidChange(isValid)
        }
    }
    updateCustomProps() {
        const { customFieldProps, showFields } = this.props
        each(customFieldProps, ([key, customProps]) => {
            if (showFields.indexOf(key) === -1) {
                log.warn(`Custom field props specified for ${key}, but it's not in showFields: ${showFields}`)
            }
            const field = this.fields[snakeCase(key)]
            if (field) this.fields[snakeCase(key)] = { ...field, ...customProps }
        })
    }
    showErrors = field => {
        const { validated } = this.state
        const { aggroErrorMessages } = this.props
        const checkField = validated[field] || { has: false, okay: !!this.fields[field].optional }
        this.setState({
            validated: {
                ...validated,
                [field]: {
                    ...checkField,
                    // We do not show errors with `aggroErrorMessages` disabled if the field has no value.
                    showError: !checkField.okay && (checkField.has || aggroErrorMessages),
                },
            },
        })
    }
    onEmailChange = val => {
        const { ackResponseError } = this.props
        const okay = isEmail(val)
        ackResponseError(FIELDS.email)
        IconTooltip.hideToolTips()
        this.setState(({ validated }) => ({
            validated: {
                ...validated,
                [FIELDS.email]: {
                    okay: okay,
                    has: !!val,
                    error: !okay ? 'Invalid e-mail.' : '',
                    showError: false,
                },
            },
        }))
    }
    onSimpleChange = field => val => {
        const { ackResponseError } = this.props
        const { optional = false, minLength = 6, maxLength = Infinity } = this.fields[field]
        ackResponseError(field)
        IconTooltip.hideToolTips()
        this.setState(({ validated }) => ({
            validated: {
                ...validated,
                [field]: {
                    ...this.stringValidate(field, val, minLength, maxLength, optional),
                },
            },
        }))
    }
    onUrlChange = field => val => {
        const { ackResponseError } = this.props
        const okay = isURL(val) || (!val && this.fields[field].optional)
        ackResponseError(field)
        IconTooltip.hideToolTips()
        this.setState(({ validated }) => ({
            validated: {
                ...validated,
                [field]: {
                    okay: okay,
                    has: !!val,
                    error: !okay
                        ? `Please use a valid ${(
                              this.fields[field].label ||
                              this.fields[field].placeholder ||
                              field
                          ).toLowerCase()} URL.`
                        : null,
                    showError: false,
                },
            },
        }))
    }
    onBirthDateChange = val => {
        IconTooltip.hideToolTips()
        const error = getBirthdayError(val)
        this.setState(({ validated }) => ({
            validated: {
                ...validated,
                [FIELDS.birthdate]: {
                    okay: !error,
                    has: !!val,
                    error,
                    showError: false,
                },
            },
        }))
    }
    stringValidate = (field, val, minLength = 0, maxLength = Infinity, optional = false) => {
        const blank = !val
        const meetsMin = !blank && val.length >= minLength
        const meetsMax = !blank && val.length <= maxLength
        const okay = (meetsMin && meetsMax) || (blank && optional)
        const label = this.fields[field].label || this.fields[field].placeholder
        const error = okay
            ? null
            : blank
            ? `${label} cannot be left blank.`
            : !meetsMin
            ? `${label} must be at least ${minLength} characters.`
            : `${label} must be less than ${maxLength} characters.`
        return {
            okay: okay,
            has: !!val,
            error: error,
            showError: false, // Flipped to `true` after field loses focus
        }
    }
    fields: { [key: string]: FieldType } = {
        [FIELDS.email]: {
            onChange: e => this.onEmailChange(e.target.value),
            onBlur: () => this.showErrors(FIELDS.email),
            ...getInput('email', FIELDS.email, 'Email Address'),
        },
        [FIELDS.username]: {
            onChange: e => this.onSimpleChange(FIELDS.username)(e.target.value),
            onBlur: () => this.showErrors(FIELDS.username),
            minLength: 1,
            maxLength: 30,
            ...getInput('text', FIELDS.username, 'Username'),
        },
        [FIELDS.password]: {
            onChange: e => this.onSimpleChange(FIELDS.password)(e.target.value),
            onBlur: () => this.showErrors(FIELDS.password),
            minLength: 6,
            maxLength: 256,
            ...getInput('password', FIELDS.password, 'Password'),
        },
        [FIELDS.contact]: {
            onChange: e => this.onSimpleChange(FIELDS.contact)(e.target.value),
            onBlur: () => this.showErrors(FIELDS.contact),
            minLength: 3,
            maxLength: 120,
            ...getInput('text', FIELDS.contact, 'Your real name', 'Contact Name'),
            tooltip: 'Use your full name in this field (ex. Jane Smith).',
        },
        [FIELDS.displayName]: {
            onChange: e => this.onSimpleChange(FIELDS.displayName)(e.target.value),
            onBlur: () => this.showErrors(FIELDS.displayName),
            minLength: 1,
            maxLength: 120,
            ...getInput('text', FIELDS.displayName, 'Display Name'),
            tooltip: 'The name you would like displayed on your Brand or Artist channel.',
        },
        [FIELDS.primarySite]: {
            onChange: e => this.onUrlChange(FIELDS.primarySite)(e.target.value),
            onBlur: () => this.showErrors(FIELDS.primarySite),
            minLength: 12,
            maxLength: 256,
            ...getInput('url', FIELDS.primarySite, 'http://yoursite.com', 'Website'),
            tooltip: `A working URL to the business' custom web domain. For Brands, social accounts do not qualify. Artists, please link to a place online that best represents your work.`,
        },
        [FIELDS.socialURL]: {
            onChange: e => this.onUrlChange(FIELDS.socialURL)(e.target.value),
            onBlur: () => this.showErrors(FIELDS.socialURL),
            maxLength: 256,
            ...getInput('url', FIELDS.socialURL, 'Facebook, Instagram, Twitter, etc. ', 'Social Profile'),
            tooltip: `Enter the full URL of the social media account that best represents you or your brand's web presence.`,
        },
        [FIELDS.facebook]: {
            onChange: e => this.onUrlChange(FIELDS.facebook)(e.target.value),
            onBlur: () => this.showErrors(FIELDS.facebook),
            maxLength: 256,
            ...getInput('url', FIELDS.facebook, 'https://facebook.com/username', 'Facebook URL', true),
        },
        [FIELDS.tumblr]: {
            onChange: e => this.onUrlChange(FIELDS.tumblr)(e.target.value),
            onBlur: () => this.showErrors(FIELDS.tumblr),
            maxLength: 256,
            ...getInput('url', FIELDS.tumblr, 'https://username.tumblr.com', 'Tumblr URL', true),
        },
        [FIELDS.instagram]: {
            onChange: e => this.onSimpleChange(FIELDS.instagram)(e.target.value),
            onBlur: () => this.showErrors(FIELDS.instagram),
            maxLength: 256,
            ...getInput('text', FIELDS.instagram, '@instagram username', 'Instagram username', true),
        },
        [FIELDS.twitter]: {
            onChange: e => this.onSimpleChange(FIELDS.twitter)(e.target.value),
            onBlur: () => this.showErrors(FIELDS.twitter),
            maxLength: 256,
            ...getInput('text', FIELDS.twitter, '@twitter username', 'Twitter username'),
            optional: true,
        },
        [FIELDS.organization]: {
            onChange: e => this.onSimpleChange(FIELDS.organization)(e.target.value),
            onBlur: () => this.showErrors(FIELDS.organization),
            minLength: 1,
            maxLength: 120,
            ...getInput(
                'text',
                FIELDS.organization,
                'What brand are you applying on behalf of?',
                'Parent Company',
                true,
            ),
            tooltip: `If you are applying for a Brand channel, it is recommended, but not required, to complete this field if it is relevant to your business.`,
        },
        [FIELDS.location]: {
            onChange: e => this.onSimpleChange(FIELDS.location)(e.target.value),
            onBlur: () => this.showErrors(FIELDS.location),
            minLength: 2,
            maxLength: 120,
            ...getInput('text', FIELDS.location, 'Where are you located?', 'Location', true),
            tooltip: `Where are you located? Let us know so that we can best service your request!`,
        },
        [FIELDS.birthdate]: {
            onChange: e => this.onBirthDateChange(e.target.value),
            onBlur: () => this.showErrors(FIELDS.birthdate),
            ...getInput('text', FIELDS.birthdate, 'MM/DD/YYYY', 'Birthday', true),
        },
    }
    render() {
        const { validated } = this.state
        const { showFields, showLabel, noTooltip, noOptional, className } = this.props
        return (
            <div className={className}>
                {map(pick(this.fields, showFields), (inputProps, key) => {
                    const { label, placeholder, tooltip, optional, tooltipWidth } = inputProps
                    const field = validated[key] || {}
                    const { error, showError } = field
                    return (
                        <FieldContainer key={key}>
                            {showLabel && (
                                <Label
                                    {...{
                                        label: label || placeholder,
                                        tooltip: noTooltip ? '' : tooltip,
                                        optional: noOptional ? false : optional,
                                        tooltipWidth,
                                    }}
                                />
                            )}
                            <FormInput errorMessage={showError ? error : null} errorTooltip inputProps={inputProps} />
                        </FieldContainer>
                    )
                })}
            </div>
        )
    }
}

export default Fields
