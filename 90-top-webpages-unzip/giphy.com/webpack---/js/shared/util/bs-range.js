import bs from 'binarysearch'

/**
 * @param {Function} extractValue Get the value
 * @param {Function} predicate Used for comparison
 */
const comparator = (extractValue, predicate) =>
    /**
     * @param {Object} item The item we're checking
     * @param {Object} find Used to determine bs direction
     */
    (item, find) => {
        const value = extractValue(item)
        if (predicate(value)) {
            return 0
        }
        if (value > find) return 1
        else if (value < find) return -1
        return 0
    }

/**
 * Binarysearch runs at O(log(n))
 *
 * @param {Array} items An array of items sorted on the property that we'll be comparing
 * @param {Function} extractValue Get the value of the item used for comparison
 * @param {Number} lowerBounds the item must be higher than lowerBounds
 * @param {Number} upperBounds / the item must be lower than upperBounds
 * @return {Array} The index of the lower bounds and upper bound items that match the criteria
 */
export default (items, extractValue, lowerBounds = 0, upperBounds = 0) => {
    // create the function for bs to determine its results
    const check = comparator(extractValue, value => value > lowerBounds && value < upperBounds)
    // Find the lowest value and the highest in the range (lowerBounds, upperBounds)
    return bs.range(items, lowerBounds, upperBounds, check)
}
