import PropTypes from 'prop-types'
import Tappable from 'react-tappable'
import {
    Actions,
    trackEvent
} from 'shared/util/gif-detail-ga-events'
import {
    getExplorePath
} from 'shared/util/search'
import css from './tags.css'
import styled from 'styled-components'

const Container = styled.div `
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    white-space: nowrap;
    text-align: left;
`

const onTagTap = (tag, isSticker) => {
    trackEvent(Actions.tag, tag)
    location.href = getExplorePath(tag, isSticker)
}

const getTags = (tags, isSticker) =>
    tags.map((tag, index) => ( <
        Tappable onTap = {
            () => onTagTap(tag, isSticker)
        }
        className = {
            css.tag
        }
        key = {
            index
        } > #{
            tag
        } <
        /Tappable>
    ))

const Tags = ({
    tags,
    isSticker,
    className = ''
}) => ( <
    Container className = {
        className
    } > {
        getTags(tags, isSticker)
    } < /Container>
)

Tags.propTypes = {
    tags: PropTypes.array.isRequired,
    isSticker: PropTypes.bool.isRequired,
}

export default Tags