import styled, { css, keyframes } from 'styled-components'
import { giphyLightGrey, giphyBlack, giphyWhite, giphyIndigo } from '@giphy/js-brand'
import TapLink from 'shared/components/tap-link'
import { mobile } from 'shared/util/media-query'

export const PlaceholderText = styled.div<{ hidden?: boolean }>`
    color: ${giphyLightGrey};
    position: absolute;
    left: 0;
    width: 100%;
    z-index: 9;
    left: 13px;
    font-weight: 400;
    letter-spacing: 1px;
    font-size: 18px;
    top: 5px;
    &:hover {
        cursor: text;
    }
    ${props =>
        props.hidden &&
        css`
            display: hidden;
        `}
`

export const SearchForm = styled.form`
    display: flex;
    flex-grow: 1;
    position: relative;
    align-items: center;
`

export const DropdownContainer = styled.div`
    width: 100%;

    ${mobile.css`
        height: 275px;
        overflow: scroll;
        // adds smooth scrolling for iOS
        -webkit-overflow-scrolling: touch;
    `}
`

export const Container = styled.div<{ position: string }>`
    position: ${({ position = 'static' }) => position};
    background-color: ${giphyBlack};
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 6px;
    top: 0;
    left: 0;
    height: 52px;
    min-height: 52px;
    padding: 0;
    margin: 0;
    z-index: 0;

    ${mobile.css`
        height: 44px;
        min-height: 44px;
        padding: 6px 0;
        z-index: 1000;
        right: 0;
    `}
`

export const InputContainer = styled.div`
    flex-grow: 1;
    border: 0;
    height: 52px;
    z-index: 1;
    display: flex;
    input {
        background-color: ${giphyWhite};
        box-sizing: border-box;
        -webkit-appearance: none;
        border-radius: 0;
        font-weight: normal;
        width: 100%;
        border: 0;
        margin: 0;
        z-index: 2;
        float: left;
        position: relative;
        height: 52px;
        letter-spacing: 1px;
        font-size: 18px;
    }
    ${mobile.css`
        height: 44px;
        display: flex;
        input {
            margin: 0;
            height: 44px;
            font-size: 15px;
            padding: 0 0 0 calc(6px * 2);
        }
    `};
`

export const ChannelPlaceholder = styled(PlaceholderText)`
    user-select: none;

    ${mobile.css`
        text-align: left;
        font-size: 17px;
        left: 46px;
        top: 10px;
        width: calc(100% - 46px);
    `}
`
const shiftRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(-10px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
`
export const MainPlaceholder = styled(PlaceholderText)<{ isChannel: boolean }>`
    user-select: none;
    ${props =>
        props.isChannel &&
        css`
            animation: ${shiftRight} 0.2s ease-in-out;
        `}
    ${props =>
        props.theme.isDesktop
            ? css`
                  left: 17px;
              `
            : css`
                  text-align: left;
                  font-size: 15px;
                  left: 12px;
                  ${props.isChannel &&
                      css`
                          font-size: 17px;
                          left: 46px;
                          top: 10px;
                          width: calc(100% - 46px);
                      `}
              `}
`

export const Input = styled.input<{ isChannelInput: boolean; isChannelSearch: boolean }>`
    padding: 0 17px;
    ${props =>
        props.isChannelInput &&
        css`
            color: ${giphyIndigo};
        `}
    ${props =>
        props.isChannelSearch &&
        css`
            padding: 0 9px;
        `}
`

export const SearchButtonContainer = styled(TapLink)`
    width: 52px;
    height: 52px;

    ${mobile.css`
        width: 44px;
        height: 44px;
    `}
`

export const BlockPage = styled.div<{ isInputFocused: boolean }>`
    ${props =>
        props.isInputFocused &&
        css`
            left: 0px;
            position: absolute;
            top: 0px;
            right: 0px;
            height: 1000px;
            background-color: ${giphyBlack};
            opacity: 1;
            z-index: -1;
        `}
`

export const HiddenButton = styled.button`
    display: none;
`

// not sure what .avatar is...
export const SearchCancel = styled(TapLink)`
    position: absolute;
    right: 10px;
    z-index: 99;
    display: flex;

    .avatar {
        width: 24px;
        height: 24px;
        position: relative;
        padding: 11px 0;
        background-size: cover;
        background-position: center;
    }
`
