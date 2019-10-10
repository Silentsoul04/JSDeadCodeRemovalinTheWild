import log from 'shared/util/log'

export default function getLastSearchResponseId() {
    try {
        const searchResponseIds = JSON.parse(window.sessionStorage.getItem('responseIds')) || []
        return searchResponseIds[searchResponseIds.length - 2]
    } catch (e) {
        log.error(e)
        return null
    }
}

export function addLastSearchResponseId(searchResponseId) {
    try {
        if (!window.sessionStorage.getItem('responseIds')) {
            var responseIds = []
            responseIds.push(searchResponseId)
            window.sessionStorage.setItem('responseIds', JSON.stringify(responseIds))
        } else {
            var searchResponseIds = JSON.parse(window.sessionStorage.getItem('responseIds'))
            if (searchResponseIds[searchResponseIds.length - 1] !== searchResponseId) {
                searchResponseIds.push(searchResponseId)
                window.sessionStorage.setItem('responseIds', JSON.stringify(searchResponseIds))
            }
        }
    } catch (e) {
        log.error(e)
    }
}