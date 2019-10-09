import { findIndex, find, isObject, head, last, filter } from 'lodash'

const getFirstId = gifs => {
    const first = head(gifs)
    if (first) {
        return first.id
    }
    return 0
}

const getLastId = gifs => {
    const first = last(gifs)
    if (first) {
        return first.id
    }
    return 0
}

const filterPost = gif => gif.type !== 'post'
/**
 *
 */
export default class GifCollection {
    constructor(gifs) {
        this.gifs = filter(gifs, filterPost)
    }
    getRandom(excludeID, count = 12) {
        const related = []
        // get a copy
        const shallowCopy = this.gifs.concat()
        // so we can splice it
        shallowCopy.splice(this.indexOf(excludeID), 1)
        // and then randomize it
        const max = Math.min(shallowCopy.length, count)
        for (var i = 0; i < max; i++) {
            related.push(shallowCopy[Math.floor(Math.random() * shallowCopy.length)])
        }
        return related
    }
    concat = gifs => {
        this.gifs = this.gifs.concat(filter(gifs, filterPost))
    }
    hasNext = gifId => isObject(this.getNext(gifId))
    hasPrev = gifId => isObject(this.getPrev(gifId))

    /**
     * Get the index based on a gifId
     * @param gifId {String}
     */
    indexOf = gifId => findIndex(this.gifs, gif => gif.id === gifId)

    /**
     * Get the previous gif in the array
     * @param gifId {String}
     */
    getPrev = gifId => this.gifs[this.indexOf(gifId) - 1]

    /**
     * Get the next gif in the array
     * @param gifId {String}
     */
    getNext = gifId => this.gifs[this.indexOf(gifId) + 1]

    /**
     * Find the gif from the gifId
     * @param gifId {String}
     */
    find = gifId => find(this.gifs, gif => gif.id === gifId)
    fromBeginning = gifId => this.distance(getFirstId(this.gifs), gifId)
    fromEnd = gifId => this.distance(gifId, getLastId(this.gifs))

    /**
     * @param id1 {String}
     * @param id2 {String}
     * The distance between two gifs
     */
    distance = (id1, id2) => Math.abs(this.indexOf(id1) - this.indexOf(id2))
}
