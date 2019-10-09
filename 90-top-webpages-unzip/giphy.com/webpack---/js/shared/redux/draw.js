import { combineReducers } from 'redux'
import { simpleReducer } from 'shared/redux/redux-util'

const prefix = s => `GIF_MAKER_DRAW_${[...s]}`

export const LINE_STEP = prefix`LINE_STEP`
export const LINE_STYLE = prefix`LINE_STYLE`
export const COLOR = prefix`COLOR`
export const STICKER = prefix`STICKER`
export const LINE_WIDTH = prefix`LINE_WIDTH`

export const setLineStep = lineStep => ({ lineStep, type: LINE_STEP })
export const setLineStyle = lineStyle => ({ lineStyle, type: LINE_STYLE })
export const setColor = color => ({ color, type: COLOR })
export const setSticker = sticker => ({ sticker, type: STICKER })
export const setLineWidth = lineWidth => ({ lineWidth, type: LINE_WIDTH })

export const getLineStep = ({ lineStep }) => lineStep
export const getLineStyle = ({ lineStyle }) => lineStyle
export const getColor = ({ color }) => color
export const getSticker = ({ sticker }) => sticker
export const getLineWidth = ({ lineWidth }) => lineWidth

export default combineReducers({
    lineStep: simpleReducer(LINE_STEP, 0, 'lineStep'),
    lineStyle: simpleReducer(LINE_STYLE, 'color', 'lineStyle'),
    color: simpleReducer(COLOR, '', 'color'),
    sticker: simpleReducer(STICKER, {}, 'sticker'),
    lineWidth: simpleReducer(LINE_WIDTH, 0, 'lineWidth'),
})
