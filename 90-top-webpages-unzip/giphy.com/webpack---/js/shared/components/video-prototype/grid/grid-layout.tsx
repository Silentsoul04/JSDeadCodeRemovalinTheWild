import React from 'react'
import styled from 'styled-components'
import VideoPreview from 'shared/components/video-prototype/preview'
import { IVideoGif } from 'shared/components/video-prototype/types'

const Container = styled.div`
    margin-right: -16px;
`

const VideoWrapper = styled.div`
    float: left;
    margin-right: 16px;
    margin-bottom: 24px;
`

type Props = {
    previewWidth?: number
    showAttribution?: boolean
    playInline?: boolean
    videos: IVideoGif[]
}

const VideoGridLayout = ({ videos, previewWidth, showAttribution, playInline }: Props) => {
    return (
        <Container>
            {videos.map(video => (
                <VideoWrapper key={video.id}>
                    <VideoPreview
                        video={video}
                        playInline={playInline}
                        showAttribution={showAttribution}
                        width={previewWidth}
                    />
                </VideoWrapper>
            ))}
        </Container>
    )
}

export default VideoGridLayout
