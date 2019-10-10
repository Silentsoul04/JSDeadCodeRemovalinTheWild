import {
    colors
} from '@giphy/react-giphy-brand'
import styled from 'styled-components'

export default styled.div `
    box-sizing: border-box;
    color: ${colors.giphyWhite};
    font-size: 14px;
    font-weight: bold;
    left: 0;
    line-height: 34px;
    padding: 0 15px;
    pointer-events: none;
    position: absolute;
    text-align: left;
    top: 0;
    white-space: nowrap;
    width: 100%;
    z-index: 1;

    &:before {
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
        content: '';
        height: 70px;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
    }
`