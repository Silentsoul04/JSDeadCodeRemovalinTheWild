import styled, {
    css
} from 'styled-components'
import {
    colors
} from '@giphy/react-giphy-brand'
import REACTIONS from './reactions-list'

const Reactions = styled.div `
    background: ${colors.giphyDarkestGrey};
    display: flex;
    height: 40px;
    margin-bottom: 10px;
    width: 100%;
`
const Reaction = styled.div `
    font-size: 24px;
    height: 40px;
    line-height: 44px;
    position: relative;
    text-align: center;
    width: 100%;
    ${props =>
        props.active &&
        css`
            background: ${colors.giphyBlue};
            &:after {
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
                border-top: 6px solid ${colors.giphyBlue};
                content: '';
                height: 0;
                left: 50%;
                margin-left: -6px;
                pointer-events: none;
                position: absolute;
                top: 100%;
                width: 0;
            }
        `};
`

const RelatedReactions = ({
    reaction = {},
    onClick = () => {}
}) => ( <
    Reactions > {
        REACTIONS.map(item => ( <
            Reaction key = {
                item.search
            }
            active = {
                reaction.search === item.search
            }
            onClick = {
                () => onClick(item)
            } > {
                item.label
            } <
            /Reaction>
        ))
    } <
    /Reactions>
)

export default RelatedReactions