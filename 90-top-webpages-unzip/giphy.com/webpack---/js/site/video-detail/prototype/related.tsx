import React, { useState } from 'react'
import styled from 'styled-components'
import { IVideoGif } from 'shared/components/video-prototype/types'
import VideoGrid from 'shared/components/video-prototype/grid'
import useAsyncEffect from 'shared/hooks/use-async-effect'
import { fetchTrendingVideos } from 'shared/components/video-prototype/utils'

const Container = styled.div`
    clear: both;
    padding: 30px 0;
`

type Props = {
    gif: IVideoGif
}

const RelatedVideos = ({ gif }: Props) => {
    const [videos, setVideos] = useState<IVideoGif[]>([])
    const [isFetching, setIsFetching] = useState<boolean>(false)
    const [isFinished, setIsFinished] = useState<boolean>(false)

    const fetchVideos = () => {
        if (isFinished) return
        setIsFetching(true)
    }

    useAsyncEffect(async () => {
        if (isFinished || !isFetching) return
        const { results = [] } = await fetchTrendingVideos(videos.length)
        setVideos([...videos, ...results].filter(video => video.id !== gif.id))
        setIsFetching(false)
        setIsFinished(results.length < 25)
    }, [isFetching])

    return (
        <Container>
            <VideoGrid
                videos={videos}
                fetchVideos={fetchVideos}
                previewWidth={380}
                showAttribution={true}
                isFetching={isFetching}
            />
        </Container>
    )
}

export default RelatedVideos
