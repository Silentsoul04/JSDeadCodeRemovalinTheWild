import produce from 'immer'
import {
    combineReducers
} from 'redux'
import {
    simpleAction,
    simpleReducer
} from 'shared/redux/redux-util'

export const defaultState = {}
const prefix = s => `GIF_DETAIL_${[...s]}`

const IS_INSTAGRAM_VISIBLE = 'IS_INSTAGRAM_VISIBLE'
const IS_META_VISIBLE = prefix `IS_META_VISIBLE`

const isMetaVisible = produce((draft, action) => {
    switch (action.type) {
        case IS_META_VISIBLE:
            draft[action.id] = action.isVisible
    }
}, {})

export const getIsMetaVisible = (state, id) => state.isMetaVisible[id]

export const getIsInstagramVisible = state => state.isInstagramVisible

export const getIsSearchVisbile = state => state.isSearchVisible

export default combineReducers({
    isMetaVisible,
    isInstagramVisible: simpleReducer(IS_INSTAGRAM_VISIBLE, false),
})

export const setIsMetaVisible = ({
    id,
    isVisible
}) => ({
    type: IS_META_VISIBLE,
    id,
    isVisible
})
export const setInstagramVisible = simpleAction(IS_INSTAGRAM_VISIBLE)