function roundWithSuffix(number = 0) {
    number = parseInt(number, 10)
    let suffix
    let roundedNumber
    if (number >= 1e12) {
        suffix = 'T'
        roundedNumber = number / 1e12
    } else if (number >= 1e9) {
        suffix = 'B'
        roundedNumber = number / 1e9
    } else if (number >= 1e6) {
        suffix = 'M'
        roundedNumber = number / 1e6
    } else if (number >= 1e3) {
        suffix = 'K'
        roundedNumber = number / 1e3
    } else {
        suffix = ''
        roundedNumber = number
    }
    return parseFloat(roundedNumber.toFixed(1)) + suffix
}

export default roundWithSuffix
