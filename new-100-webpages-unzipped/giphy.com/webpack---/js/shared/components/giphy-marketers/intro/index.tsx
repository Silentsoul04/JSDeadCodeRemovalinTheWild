import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { tween } from 'shifty'
import Loader from 'shared/components/loaders/dots'
import { containerWidth } from '../constants'
import useIntroTrigger from './intro-trigger'
import Canvas from './canvas'

const Container = styled.div`
    background: #000;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
`

const Content = styled.div`
    width: ${containerWidth}px;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    position: relative;

    h1 {
        height: 108px;
        width: 509px;
    }

    p {
        height: 78px;
        width: 429px;
    }
`

type Props = {
    opacity: number
    onAnimationProgress: (progress: number) => void
    onAnimationComplete: () => void
    onError: () => void
}

type Tween = {
    progress: number
}

const MarketersIntro = ({ opacity = 1, onAnimationProgress, onAnimationComplete, onError }: Props) => {
    const [animationProgress, setAnimationProgress] = useState<number>(0)
    const [isVideoReady, setIsVideoReady] = useState<boolean>(false)
    const isIntroTriggered = useIntroTrigger()
    history.scrollRestoration = 'manual'

    const onVideoLoaded = () => {
        setIsVideoReady(true)
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = ''
        }
    }, [])

    useEffect(() => {
        if (!isIntroTriggered) return
        tween({
            from: { progress: 0 },
            to: { progress: 1 },
            duration: 1000,
            easing: 'easeInOutCirc',
            step: ({ progress }: Tween) => {
                setAnimationProgress(progress)
            },
        }).then(() => {
            document.body.style.overflow = ''
            onAnimationComplete()
        })
    }, [isIntroTriggered])

    useEffect(() => {
        onAnimationProgress(animationProgress)
    }, [animationProgress])

    return (
        <Container style={{ opacity }}>
            <Canvas progress={animationProgress} onVideoError={onError} onVideoLoaded={onVideoLoaded} />
            {isVideoReady ? (
                <Content
                    style={{
                        transform: `scale(${1 + animationProgress * 5}) translateY(${animationProgress * -10}%)`,
                    }}
                >
                    <h1>Make content conversational</h1>
                    <p>
                        GIPHY enables brands to animate conversations by delivering culturally relevant content across
                        the world&rsquo;s largest messaging and social apps.
                    </p>
                </Content>
            ) : (
                <Loader isAbsolute={true} />
            )}
        </Container>
    )
}

export default MarketersIntro
