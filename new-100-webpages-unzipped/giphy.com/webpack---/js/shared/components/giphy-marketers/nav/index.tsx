import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import Media from 'react-media'
import { mobile } from 'shared/util/media-query'
import useWindowScroll from 'react-use/lib/useWindowScroll'
import useWindowSize from 'shared/hooks/window-size'
import useThrottle from 'react-use/lib/useThrottle'
import NavLinks from './nav-links'
import GetInTouchButton from '../buttons/get-in-touch-button'
import { LazyLoadImage } from '../lazy-media'

const Container = styled.div<{ isInHeader: boolean }>`
    display: flex;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 75px;
    z-index: 2;
    justify-content: center;
    background: transparent;
    transition: background 200ms ease-in-out;

    ${({ isInHeader }) =>
        !isInHeader &&
        css`
            background: black;
            transition: background 1s ease-in-out;
        `}
`
const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1140px;
    box-sizing: border-box;

    ${mobile.css`
        width: 100%;

        img {
            width: 252px;
            padding-left: 15px;
        }
    `}

    img {
        width: 340px;
    }
`

const Navigation = () => {
    const [isInHeader, setisInHeader] = useState(true)
    const { y } = useWindowScroll()
    const { innerHeight } = useWindowSize()
    const throttledY = useThrottle(y)

    useEffect(() => {
        if (throttledY > innerHeight / 2) {
            setisInHeader(false)
        } else {
            setisInHeader(true)
        }
    }, [throttledY])

    const titles = [
        { title: 'Why GIPHY?', url: '#whygiphy' },
        { title: 'Content', url: '#content' },
        { title: 'Platform', url: '#platform' },
        { title: 'Results', url: '#results' },
    ]

    return (
        <Container isInHeader={isInHeader}>
            <Content>
                <a href="/marketers">
                    <LazyLoadImage
                        src="/static/img/giphyformarketers-logo-transparent.gif"
                        alt={'giphy for marketers'}
                    />
                </a>
                <Media query={mobile.query}>
                    {matches =>
                        !matches && (
                            <>
                                <NavLinks titles={titles} />
                                <GetInTouchButton />
                            </>
                        )
                    }
                </Media>
            </Content>
        </Container>
    )
}

export default Navigation
