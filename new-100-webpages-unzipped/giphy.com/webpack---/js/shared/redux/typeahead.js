export const SET_TYPEAHEAD_QUERY = 'SET_TYPEAHEAD_QUERY'
export const SET_TYPEAHEAD_TERMS = 'SET_TYPEAHEAD_TERMS'
export const SET_TYPEAHEAD_CHANNELS = 'SET_TYPEAHEAD_CHANNELS'
export const RESET_TYPEAHEAD = 'RESET_TYPEAHEAD'

const DEFAULTS = {
    query: '',
    terms: [],
    channels: [],
}

export default (state = DEFAULTS, action = {}) => {
    switch (action.type) {
        case SET_TYPEAHEAD_QUERY:
            return { ...state,
                query: action.query || ''
            }
        case SET_TYPEAHEAD_TERMS:
            return { ...state,
                terms: action.terms || []
            }
        case SET_TYPEAHEAD_CHANNELS:
            return { ...state,
                channels: action.channels || []
            }
        case RESET_TYPEAHEAD:
            return { ...DEFAULTS
            }
        default:
            return state
    }
}

export const setTypeaheadQuery = query => ({
    type: SET_TYPEAHEAD_QUERY,
    query
})
export const setTypeaheadTerms = terms => ({
    type: SET_TYPEAHEAD_TERMS,
    terms
})
export const setTypeaheadChannels = channels => ({
    type: SET_TYPEAHEAD_CHANNELS,
    channels
})
export const resetTypeahead = () => ({
    type: RESET_TYPEAHEAD
})

export const getTypeahead = state => state
export const getTypeaheadQuery = state => state.query
export const getTypeaheadTerms = state => state.terms
export const getTypeaheadChannels = state => state.channels
export const hasTypeahead = state => !!state.terms.length || !!state.channels.length