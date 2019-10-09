import { IconTooltip } from '@giphy/react-giphy-brand'
import isAfter from 'date-fns/is_after'
import isBefore from 'date-fns/is_before'
import { Fragment, PureComponent } from 'react'
import styled from 'styled-components'
import { FormInput, HeaderContainer, OptionalText } from '../form-components'
import FormHeader from '../form-header'
import GenderButtonGroup from '../inputs/gender-button-group'

const tooYoung = (() => {
    const date = new Date()
    date.setMonth(date.getMonth() - 12 * 6)
    return date
})()
const tooOld = new Date(1908, 0, 1)
const dateRegEx = /^\d{1,2}\/\d{1,2}\/\d{4}$/
const fakeDateMessage = `We weren't born yesterday, and you weren't born 90 years ago. Enter a more realisitc lie, please`
const invalidDateMessage = `Please enter birthdate in MM/DD/YYYY format.`

const GenderButtons = styled(GenderButtonGroup)`
    margin-bottom: 20px;
`

class OptionalFormInputs extends PureComponent {
    state = {}
    componentDidUpdate(prevProps, prevState) {
        const { hasDateError } = this.state
        if (hasDateError !== prevState.hasDateError) {
            const { onDateError } = this.props
            this.setState({ hasDateError })
            onDateError(hasDateError)
        }
    }
    onDateChange = val => {
        IconTooltip.hideToolTips()

        const date = new Date(val)
        // make sure it matches the string
        this.isValidDate = dateRegEx.test(val)
        // is it too long ago or too recent
        this.isFakeDate = isBefore(date, tooOld) || isAfter(date, tooYoung)
        // block the submit if there is a date and it's wrong
        this.hasDateError = !!val && (!this.isValidDate || this.isFakeDate)

        this.setState({ hasDateError: this.hasDateError })

        if (this.isValidDate) {
            this.validateDate()
        }
    }
    validateDate = () => {
        this.setState({
            dateError: !this.hasDateError ? '' : !this.isValidDate ? invalidDateMessage : fakeDateMessage,
        })
    }
    render() {
        const { dateError } = this.state
        return (
            <Fragment>
                <HeaderContainer>
                    <FormHeader>Birthday</FormHeader>
                    <OptionalText>Optional</OptionalText>
                </HeaderContainer>
                <FormInput
                    errorMessage={dateError}
                    errorTooltip
                    inputProps={{
                        onChange: e => this.onDateChange(e.target.value),
                        onBlur: this.validateDate,
                        type: 'text',
                        name: 'birthdate',
                        placeholder: 'MM/DD/YYYY',
                        autoComplete: 'off',
                    }}
                />
                <HeaderContainer>
                    <FormHeader>Gender</FormHeader>
                    <OptionalText>Optional</OptionalText>
                </HeaderContainer>
                <GenderButtons />
            </Fragment>
        )
    }
}

export default OptionalFormInputs
