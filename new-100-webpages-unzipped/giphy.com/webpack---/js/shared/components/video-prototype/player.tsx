import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Video as BrandVideoPlayer } from '@giphy/react-giphy-brand'
import { giphyDarkestGrey } from '@giphy/js-brand'
import { mapGifPropsToVideo } from './utils'
import { IVideoGif, IVideoData } from './types'

const VIDEO_RATIO = 16 / 9
const VIDEO_WIDTH = 776

const Video = styled(BrandVideoPlayer)`
    position: relative;

    img {
        object-fit: cover;
    }
`

type Props = {
    video: IVideoGif
    autoPlay?: boolean
    height?: number
    width?: number
}

const VideoPlayer = ({ video, autoPlay = true, height, width = VIDEO_WIDTH }: Props) => {
    const [videoData, setVideoData] = useState<IVideoData | null>(null)

    useEffect(() => {
        const data = mapGifPropsToVideo(video)
        const videoEl = document.createElement('video')
        videoEl.onloadedmetadata = () => {
            data.duration = videoEl.duration
            data.media.assets[0].duration = videoEl.duration
            setVideoData(data)
        }
        videoEl.src = data.media.assets[0].url
    }, [])

    return videoData ? (
        <Video
            height={height || width / VIDEO_RATIO}
            width={width}
            videoData={videoData}
            autoPlay={autoPlay}
            noCutout
            forceMute
            style={{
                height,
                width,
            }}
        />
    ) : (
        <div
            style={{
                backgroundColor: giphyDarkestGrey,
                height,
                width,
            }}
        />
    )
}

export default VideoPlayer
