import {
    withProps
} from 'recompose'
import {
    pick,
    mapKeys,
    camelCase
} from 'lodash'

// workaround for route-less channels
const fallback = () => history && history.state && history.state.state

export default (keys, convertToCamelCase = true) =>
// pass the props of the state object as props
withProps(({
    location = {}
}) => {
    const state = location.state || fallback()
    // pick the props off the state as specified by keys (e.g. featured_stickers)
    let someProps = pick(state, keys)
    if (convertToCamelCase) {
        // pick the props off the state also as camelCased (e.g. featuredStickers) so it works both ways
        someProps = { ...someProps,
            ...pick(state, keys.map(key => camelCase(key)))
        }
        // map keys to camelCase
        someProps = mapKeys(someProps, (val, key) => camelCase(key))
    }
    return {
        ...someProps,
    }
})