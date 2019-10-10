import styled from 'styled-components'
import {
    getShortViewCountDisplay
} from 'shared/util/view-count-formatter'
import getCreationDate from 'shared/components/story/creation-time'

const Container = styled.div `
    font-size: 14px;
    margin-bottom: ${props => (props.theme.isSmall ? 10 : 15)}px;
`

const Views = styled.span `
    &:before {
        display: inline-block;
        margin-right: 5px;
        vertical-align: middle;
    }
    &:after {
        content: ' • ';
        display: inline-block;
        font-size: 10px;
        margin: 0 8px;
        opacity: 0.5;
    }
`

const Timestamp = styled.span `
    text-transform: capitalize;
`

const Details = ({
        time,
        views
    }) => ( <
        Container > {
            views && < Views className = "ss-view" > {
                getShortViewCountDisplay(views)
            } < /Views>} <
            Timestamp > {
                getCreationDate(time)
            } < /Timestamp> <
            /Container>
        )

        export default Details