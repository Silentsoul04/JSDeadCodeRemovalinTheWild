import {
    branch,
    renderNothing
} from 'recompose'

const IsMissing = name => props => props[name] === undefined
const IsFalse = name => props => props[name] === false
export const hideIfMissing = propName => branch(IsMissing(propName), renderNothing)
export const hideIfFalse = propName => branch(IsFalse(propName), renderNothing)