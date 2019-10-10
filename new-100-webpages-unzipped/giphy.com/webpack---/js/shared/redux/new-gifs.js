export const CHECK_NEW_GIFS = 'CHECK_NEW_GIFS'
export const FOUND_NEW_GIFS = 'FOUND_NEW_GIFS'
export const NO_NEW_GIFS = 'NO_NEW_GIFS'
export const RESET_NEW_GIFS = 'RESET_NEW_GIFS'

export default (
    state = {
        gifs: [],
        addedGifIds: [],
        isPolling: false,
        lastPolled: 0,
    },
    action = {},
) => {
    const {
        gifs
    } = state
    switch (action.type) {
        case CHECK_NEW_GIFS:
            return {
                ...state,
                isPolling: true,
                lastPolled: new Date().getTime(),
            }
        case FOUND_NEW_GIFS:
            return {
                ...state,
                isPolling: false,
                gifs: action.gifs,
            }
        case NO_NEW_GIFS:
            return {
                ...state,
                isPolling: false,
                gifs: [],
            }
        case RESET_NEW_GIFS:
            return {
                ...state,
                isPolling: false,
                addedGifIds: gifs.map(gif => gif.id),
                gifs: [],
            }
        default:
            return state
    }
}

export const checkNewGifs = () => ({
    type: CHECK_NEW_GIFS
})
export const foundNewGifs = gifs => ({
    type: FOUND_NEW_GIFS,
    gifs
})
export const noNewGifs = () => ({
    type: NO_NEW_GIFS
})
export const resetNewGifs = () => ({
    type: RESET_NEW_GIFS
})

export const getPolling = state => {
    return state.isPolling || false
}

export const getLastPolled = state => {
    return state.lastPolled
}

export const getNewGifs = state => {
    return state.gifs || []
}

export const getAddedGifIds = state => {
    return state.addedGifIds || []
}