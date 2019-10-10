import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Arrow from './arrow'
import { video, drawCanvas, loadVideo } from './draw'

const Container = styled.div`
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: opacity 0.2s ease-out;
    width: 100%;
`

const Canvas = styled.canvas`
    height: 100vh;
    left: 50%;
    margin-left: -100vh;
    position: absolute;
    top: 0;
    width: 200vh;
`

const Background = styled.div`
    background: url('/static/img/giphy-marketers/intro/intro-background.jpg') center center;
    background-size: cover;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
`

const Foreground = styled.div`
    background: url('/static/img/giphy-marketers/intro/foreground-crowd.png') center bottom;
    background-size: cover;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
`

type Props = {
    progress: number
    onVideoLoaded: () => void
    onVideoError: () => void
}

const IntroCanvas = ({ progress = 0, onVideoLoaded, onVideoError }: Props) => {
    const [isReady, setIsReady] = useState<boolean>(false)
    const canvasRef = useRef(null)
    var animationId: number = 0

    const draw = () => {
        window.cancelAnimationFrame(animationId)
        if (progress > 0) return
        drawCanvas(canvasRef.current)
        animationId = window.requestAnimationFrame(draw)
    }

    useEffect(() => {
        loadVideo()
            .then(() => {
                draw()
                setIsReady(true)
                onVideoLoaded()
            })
            .catch(() => {
                onVideoError()
            })

        return () => {
            window.cancelAnimationFrame(animationId)
            video.pause()
        }
    }, [])

    return (
        <Container style={{ opacity: isReady ? 1 : 0 }}>
            <Background
                style={{
                    transform: `scale(${1 + progress * 0.75}) translateY(${progress * 17}vh)`,
                }}
            />
            <Canvas
                ref={canvasRef}
                style={{
                    transform: `scale(${1 + progress * 5}) translateY(${progress * -10}%)`,
                }}
            />
            <Foreground
                style={{
                    transform: `translateY(${progress * 50}%)`,
                }}
            >
                <Arrow />
            </Foreground>
        </Container>
    )
}

export default IntroCanvas
