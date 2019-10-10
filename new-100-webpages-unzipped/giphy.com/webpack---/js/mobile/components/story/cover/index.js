import {
    Attribution
} from '@giphy/react-giphy-brand'
import {
    connect
} from 'react-redux'
import styled, {
    css,
    keyframes
} from 'styled-components'
import {
    highlightGrey
} from 'shared/css/colors.css'
import * as selectors from '../../../shared/reducers'
import Title from './title'
import Description from './description'
import SeeMore from './see-more'
import Details from './details'
import Gif from './gif'

const fade = keyframes `
    0% { opacity: 0; }
    100% { opacity: 0.5; }
`

const Container = styled.div `
    box-sizing: border-box;
    padding: 60px 0 0;
    float: left;
    width: ${props => window.innerWidth - props.minPeek * (props.fullWidth ? 0 : 2)}px;
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.45);
    animation: ${props =>
        props.fadeIn
            ? css`
                  ${fade} 0.2s linear;
              `
            : `none`};
`

const Wrapper = styled.div `
    background: ${props => props.primary};
    box-sizing: border-box;
    color: ${highlightGrey};
    display: flex;
    font-size: 16px;
    flex-direction: column;
    padding: 0 30px;
    height: 100%;
    position: relative;
    text-align: left;
    width: 100%;

    ${props =>
        props.secondary &&
        css`
            background: linear-gradient(45deg, ${props => props.primary} 0%, ${props => props.secondary} 100%);
        `};
`

const Info = styled.div `
    color: rgba(255, 255, 255, 0.85);
    margin: 0 auto;
    max-width: 500px;
    position: relative;
    text-shadow: 0 2px 20px rgba(0, 0, 0, 0.25);
    width: 100%;
    flex-shrink: 1;
    overflow: auto;

    a div[class^='avatar'] {
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.25);
    }
`

const InfoContainer = styled.div `
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
`

const TempProgressBarContainer = styled.div `
    height: 60px;
    display: flex;
    align-items: center;
`
const TempProgressBar = styled.div `
    background: rgba(255, 255, 255, 0.3);
    border-radius: 2px;
    height: 4px;
    overflow: hidden;
    width: ${props => props.theme.cardWidth}px;
    margin: 0 -12px;
    ${props =>
        !props.isDragging &&
        css`
            visibility: hidden;
        `};
`
const getTranslate = val => `translateY(${val}px)`
const Cover = ({
        size,
        info,
        translateY,
        opacity,
        isActive,
        minPeek,
        isDragging,
        fullWidth,
        fadeIn,
        onTap
    }) => ( <
        Container style = {
            {
                height: size.height,
                transform: getTranslate(translateY),
                opacity: 0.5 + opacity * 0.5,
            }
        }
        minPeek = {
            minPeek
        }
        isActive = {
            isActive
        }
        fullWidth = {
            fullWidth
        }
        fadeIn = {
            fadeIn
        }
        onClick = {
            onTap
        } >
        {
            info && ( <
                Wrapper primary = {
                    info.color
                }
                secondary = {
                    info.secondary_color
                } > {
                    info.cover_gif && < Gif { ...info.cover_gif
                    }
                    isActive = {
                        isActive
                    }
                    />} <
                    TempProgressBarContainer >
                    <
                    TempProgressBar isDragging = {
                        isDragging
                    }
                    style = {
                        {
                            opacity
                        }
                    }
                    /> <
                    /TempProgressBarContainer> <
                    InfoContainer >
                    <
                    Info style = {
                        {
                            opacity
                        }
                    } >
                    <
                    Details time = {
                        info.create_datetime
                    }
                    /> <
                    Title > {
                        info.title
                    } < /Title> {
                        info.description && < Description > {
                            info.description
                        } < /Description>} {
                            info.user && < Attribution user = {
                                info.user
                            }
                            />} <
                            /Info> <
                            /InfoContainer> <
                            SeeMore > Swipe to begin < /SeeMore> <
                                /Wrapper>
                        )
                    } <
                    /Container>
                )

                export default connect(state => ({
                    size: selectors.getAppSize(state),
                }))(Cover)