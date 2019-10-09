function round(fn, val, precision) {
    if (typeof val !== 'number') {
        throw new TypeError('Expected value to be a number')
    }

    if (!Number.isInteger(precision)) {
        throw new TypeError('Expected precision to be an integer')
    }

    const exponent = precision > 0 ? 'e' : 'e-'
    const exponentNeg = precision > 0 ? 'e-' : 'e'
    precision = Math.abs(precision)

    if (fn === 'round') {
        return Number(Math.sign(val) * (Math.round(Math.abs(val) + exponent + precision) + exponentNeg + precision))
    }

    return Number(Math[fn](val + exponent + precision) + exponentNeg + precision)
}

export const up = round.bind(null, 'ceil')
export const down = round.bind(null, 'floor')

export default round.bind(null, 'round')
