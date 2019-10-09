import { format, distanceInWordsToNow } from 'date-fns'

export const liveGifDate = datetime => {
    return new Date() - new Date(datetime) < 518400000
        ? distanceInWordsToNow(datetime)
        : format(datetime, 'MMMM D, YYYY')
}

export const checkIfToday = date => {
    const today = new Date()
    return (
        today.getDate() === date.getDate() &&
        today.getMonth() === date.getMonth() &&
        today.getFullYear() === date.getFullYear()
    )
}

export const checkIfYesterday = date => {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    return (
        yesterday.getDate() === date.getDate() &&
        yesterday.getMonth() === date.getMonth() &&
        yesterday.getFullYear() === date.getFullYear()
    )
}

export const checkIfTomorrow = date => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return (
        tomorrow.getDate() === date.getDate() &&
        tomorrow.getMonth() === date.getMonth() &&
        tomorrow.getFullYear() === date.getFullYear()
    )
}
