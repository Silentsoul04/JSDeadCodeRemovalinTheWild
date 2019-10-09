import React from 'react'
import styled from 'styled-components'
import { chunk } from 'lodash'
import VideoPreview from 'shared/components/video-prototype/preview'
import { IVideoGif } from 'shared/components/video-prototype/types'
import { getCategoryColor, getCategoryFromGif } from 'shared/components/video-prototype/utils'

const WIDTH = 1040
const ASPECT_RATIO = 16 / 9
const GRID_SPACING = 24
const PREVIEW_HEIGHT = 260

const VideoWrapper = styled.div`
    min-height: ${PREVIEW_HEIGHT}px;
`

const RowLeft = styled.div`
    &:after {
        clear: both;
        content: '';
        display: block;
    }
    > div {
        float: left;
        vertical-align: top;
    }
    > div:nth-child(1) {
        margin-right: ${GRID_SPACING}px;
        min-height: ${PREVIEW_HEIGHT * 2}px;
    }
    > div:nth-child(4),
    > div:nth-child(5) {
        margin-right: ${GRID_SPACING}px;
    }
`

const RowRight = styled(RowLeft)`
    > div:nth-child(1) {
        clear: right;
        float: right;
        margin-right: 0;
    }
`

const ColorBar = styled.div`
    height: 4px;
    width: 100%;
`

type Props = {
    previewWidth?: number
    showAttribution?: boolean
    videos: IVideoGif[]
}

const VideoFeedLayout = ({ videos, showAttribution }: Props) => {
    const rows = chunk(videos, 6)
    const previewWidth = (WIDTH - GRID_SPACING * 2) / 3
    return (
        <>
            {rows.map((videos, rowIndex) => {
                const Row = rowIndex % 2 === 0 ? RowLeft : RowRight
                const featuredWidth = previewWidth * 2 + GRID_SPACING
                const featuredHeight = previewWidth / ASPECT_RATIO + PREVIEW_HEIGHT
                return (
                    <Row key={`row-${rowIndex}`}>
                        {videos.map((video, i) => {
                            const isFeatured = i === 0
                            return (
                                <VideoWrapper key={video.id}>
                                    <VideoPreview
                                        video={video}
                                        showAttribution={showAttribution}
                                        height={isFeatured ? featuredHeight : undefined}
                                        width={isFeatured ? featuredWidth : previewWidth}
                                    >
                                        <ColorBar
                                            style={{
                                                backgroundColor: getCategoryColor(getCategoryFromGif(video)),
                                            }}
                                        />
                                    </VideoPreview>
                                </VideoWrapper>
                            )
                        })}
                    </Row>
                )
            })}
        </>
    )
}

export default VideoFeedLayout
