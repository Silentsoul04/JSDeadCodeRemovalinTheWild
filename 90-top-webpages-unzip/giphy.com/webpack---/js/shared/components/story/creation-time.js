import { distanceInWordsToNow } from 'date-fns'

const getCreationDate = creationDatetime => {
    return new Date() - new Date(creationDatetime) < 60 * 60 * 1000 // less than an hour show Just now
        ? 'Just now'
        : distanceInWordsToNow(creationDatetime, { addSuffix: true }).replace(/about /gi, '')
}

export default getCreationDate
