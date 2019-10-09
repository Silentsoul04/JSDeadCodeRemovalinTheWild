import styled, { css } from 'styled-components'
import { Button, colors } from '@giphy/react-giphy-brand'

const getButtonColor = ({ primary, secondary, error, success }) => {
    if (success) {
        return colors.giphyGreen
    }
    if (error) {
        return colors.giphyRed
    }
    return primary ? colors.primaryCTA : secondary ? colors.secondaryCTA : colors.giphyDarkGrey
}

export default styled(Button)`
    display: block;
    margin: 3px 0px;
    padding: 0;
    width: 100%;
    background-color: ${props => getButtonColor(props)};
    ${props =>
        props.success &&
        css`
            color: black;
            &:hover {
                color: black;
            }
        `};
    transition: background-color 0.1s ease-out;
`
