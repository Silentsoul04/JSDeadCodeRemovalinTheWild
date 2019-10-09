import React, { useState } from 'react'
import styled from 'styled-components'
import VideoGrid from 'shared/components/video-prototype/grid'
import useAsyncEffect from 'shared/hooks/use-async-effect'
import { fetchTrendingVideos } from 'shared/components/video-prototype/utils'
import { IVideoGif } from 'shared/components/video-prototype/types'
import useWindowSize from 'shared/hooks/window-size'

const VideoWrapper = styled.div`
    overflow: hidden;
    padding-top: 6px;
    text-align: left;
`

type Props = {
    filterId?: string | number
}

const TrendingVideosPrototype = ({ filterId }: Props) => {
    const { width } = useWindowSize()
    const [videos, setVideos] = useState<IVideoGif[]>([])
    const [isFetching, setIsFetching] = useState<boolean>(false)
    const [isFinished, setIsFinished] = useState<boolean>(false)

    const fetchVideos = () => {
        if (videos.length) return
        setIsFetching(true)
    }

    useAsyncEffect(async () => {
        if (isFinished || !isFetching) return
        const { results = [] } = await fetchTrendingVideos(videos.length)
        const vids = [...videos, ...results]
        setVideos(filterId ? vids.filter(vid => vid.id !== filterId) : vids)
        setIsFetching(false)
        setIsFinished(results.length < 25)
    }, [isFinished, isFetching])

    return (
        <VideoWrapper>
            <VideoGrid
                videos={videos}
                fetchVideos={fetchVideos}
                previewWidth={((width || window.innerWidth) - 16) / 2}
                showAttribution={true}
                isFetching={isFetching}
            />
        </VideoWrapper>
    )
}

export default TrendingVideosPrototype
