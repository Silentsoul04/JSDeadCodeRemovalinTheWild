import styled, {
    css
} from 'styled-components'
import {
    connect
} from 'react-redux'
import * as selectors from '../../../shared/reducers'

const Container = styled.div `
    background: rgba(255, 255, 255, 0.3);
    border-radius: 2px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.25);
    height: 4px;
    overflow: hidden;
    pointer-events: none;
    position: relative;
    transition: transform 0.4s ease-in-out;
    width: 100%;

    ${({ theme }) =>
        theme.isOnCover
            ? css`
transform: translateY($ {
        theme.headerHeight
    }
    px);
`
            : css`
transform: translateX(20 px);
`};
`

const Fill = styled.div `
    background: ${props => props.primary};
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: transform 1s linear;
    width: 100%;

    ${props =>
        props.secondary &&
        css`
            background: linear-gradient(to right, ${props => props.primary} 0%, ${props => props.secondary} 100%);
        `};
`

const getTransform = progress => `translateX(${Math.round(progress * 100) - 100}%)`
const ProgressBar = ({
    info,
    progress = 0,
    opacity
}) => {
    const {
        color,
        secondary_color
    } = info
    return ( <
        Container style = {
            {
                opacity
            }
        } >
        <
        Fill primary = {
            color
        }
        secondary = {
            secondary_color
        }
        style = {
            {
                transform: getTransform(progress),
            }
        }
        /> <
        /Container>
    )
}

export default connect(state => ({
    info: selectors.getStoryInfo(state),
}))(ProgressBar)