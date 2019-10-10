import roundTo from './round-to'
export const getShortViewCountDisplay = views => {
    if (views > 999999999) {
        return `${roundTo(views / 1000000000, 1)}B`
    }
    if (views > 999999) {
        return `${roundTo(views / 1000000, 1)}M`
    }
    if (views > 999) {
        return `${roundTo(views / 1000, 1)}K`
    }

    return views
}
const getViewCountDisplay = views => {
    if (views < 2) {
        return '1 View'
    }
    return `${views.toLocaleString()} Views`
}

export default getViewCountDisplay