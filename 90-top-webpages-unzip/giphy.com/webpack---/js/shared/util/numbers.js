export const formatNumber = number => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
export const leadingZero = number => (number < 10 ? '0' + number : number)
export const formatSize = (size = 0, decimals = 0) => {
    if (size === 0) return '0 Bytes'

    const k = 1000 // or 1024 for binary
    const dm = decimals + 1 || 3
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(size) / Math.log(k))
    const filesize = size / Math.pow(k, i)
    return parseFloat(filesize.toFixed(i < 2 ? 0 : dm)) + ' ' + sizes[i]
}

export const secondsToTime = sec => {
    sec = sec || 0
    const hours = leadingZero(Math.floor(sec / 3600))
    const minutes = leadingZero(Math.floor((sec - hours * 3600) / 60))
    const seconds = leadingZero(sec - hours * 3600 - minutes * 60)
    if (hours !== '00') {
        return `${hours}:${minutes}:${seconds}`
    }
    return `${minutes}:${seconds}`
}

export default {
    formatNumber,
    formatSize,
    secondsToTime,
    leadingZero,
}
