import isAfter from 'date-fns/is_after'
import isBefore from 'date-fns/is_before'

const tooYoung = (() => {
    const date = new Date()
    date.setMonth(date.getMonth() - 12 * 6)
    return date
})()
const tooOld = new Date(1908, 0, 1)
const dateRegEx = /^\d{1,2}\/\d{1,2}\/\d{4}$/
const fakeDateMessage = `We weren't born yesterday, and you weren't born 90 years ago. Enter a more realisitc lie, please`
const invalidDateMessage = `Please enter birthdate in MM/DD/YYYY format.`

const getBirthdayError = (val: string) => {
    const date = new Date(val)
    // make sure it matches the string
    const isValidDate = dateRegEx.test(val)
    // is it too long ago or too recent
    const isFakeDate = isBefore(date, tooOld) || isAfter(date, tooYoung)
    // block the submit if there is a date and it's wrong
    const hasDateError = !!val && (!isValidDate || isFakeDate)

    return !hasDateError ? '' : !isValidDate ? invalidDateMessage : fakeDateMessage
}

export default getBirthdayError
