import { giphyDarkestGrey } from '@giphy/js-brand'
import { VideoPreview as BrandVideoPreview } from '@giphy/react-giphy-brand'
import React, { SyntheticEvent, useState, FunctionComponent } from 'react'
import styled, { css } from 'styled-components'
import VideoPlayer from './player'
import { IVideoGif } from './types'
import { mapGifPropsToVideo } from './utils'

const ASPECT_RATIO = 16 / 9
const PREVIEW_WIDTH = 376

const Video = styled(BrandVideoPreview)`
    margin: 0;

    ${props =>
        !props.showAttribution &&
        css`
            div[class*='label'] {
                display: none;
            }
        `}
`

const Container = styled.div<{ isPlaying: boolean }>`
    position: relative;

    ${props =>
        props.isPlaying &&
        css`
            ${Video} > div:first-child {
                display: none;
            }
        `}
`

type Props = {
    height?: number
    onClick?: (e: SyntheticEvent) => void
    playInline?: boolean
    showAttribution?: boolean
    video: IVideoGif
    width?: number
}

const VideoPreview: FunctionComponent<Props> = ({
    children,
    video,
    showAttribution = false,
    playInline = false,
    onClick,
    height,
    width = PREVIEW_WIDTH,
}) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const previewHeight = height || width / ASPECT_RATIO
    const playVideoPreview = (e: SyntheticEvent) => {
        e.preventDefault()
        setIsPlaying(true)
    }

    if (!video || !video.images.source) {
        return (
            <div
                style={{
                    backgroundColor: giphyDarkestGrey,
                    height: previewHeight,
                    width: width,
                }}
            />
        )
    }
    return (
        <Container isPlaying={isPlaying}>
            {isPlaying && <VideoPlayer video={video} height={previewHeight} width={width} />}
            <Video
                video={mapGifPropsToVideo(video)}
                playButtonSize={45}
                showAttribution={showAttribution}
                height={previewHeight}
                width={width}
                onClick={(playInline ? playVideoPreview : onClick) as () => void}
            >
                {children}
            </Video>
        </Container>
    )
}

export default VideoPreview
