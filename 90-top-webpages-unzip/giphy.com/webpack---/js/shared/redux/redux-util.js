import { isUndefined } from 'lodash'

/**
 * Simple reducer will update the state with a single action property value
 * for single action type
 *
 * @example
 * // type
 * const SET_COLOR = 'SET_COLOR'
 * // reducer
 * const color = simpleReducer(SET_COLOR, red, 'color')
 * // action - sets the color
 * const setColor = color => ({ color, type: SET_COLOR })
 * // selector - gets the color
 * const getColor = ({ color }) => color
 *
 * @param {String} type The action type
 * @param {Any} defaultState The default state
 * @param {String} prop The property name to pull off the action
 *
 * @returns {Function} reducer
 */
export const simpleReducer = (type, defaultState, prop = 'prop') => (state, action = {}) => {
    switch (action.type) {
        case type:
            return action[prop]
        default:
            return isUndefined(state) ? defaultState : state
    }
}

export const simpleAction = type => prop => ({ type, prop })

export const createReducer = (initialState, handlers) => {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        } else {
            return state
        }
    }
}
