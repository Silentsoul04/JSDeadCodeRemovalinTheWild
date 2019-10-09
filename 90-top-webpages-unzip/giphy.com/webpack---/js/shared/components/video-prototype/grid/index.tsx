import React, { useRef } from 'react'
import styled from 'styled-components'
import { debounce, uniq } from 'lodash'
import { Loader } from 'shared/components/preloader-animation'
import { IVideoGif } from 'shared/components/video-prototype/types'
import Observer from 'shared/components/observer'
import GridLayout from './grid-layout'
import FeedLayout from './feed-layout'

const Container = styled.div`
    position: relative;
    margin-bottom: 50px;

    &:after {
        clear: both;
        content: '';
        display: block;
        width: 100%;
    }
`

type Layout = 'feed' | 'grid'

type Props = {
    fetchVideos: () => void
    isFetching?: boolean
    layout?: Layout
    previewWidth?: number
    showAttribution?: boolean
    playInline?: boolean
    videos: IVideoGif[]
}

const ChannelVideos = ({
    videos = [],
    fetchVideos,
    previewWidth,
    layout = 'grid',
    showAttribution = false,
    playInline = false,
    isFetching = false,
}: Props) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const layoutProps = { videos: uniq(videos), showAttribution, previewWidth, playInline }

    const getMoreVideos = debounce(isVisible => {
        if (isVisible && !isFetching) {
            fetchVideos()
        }
    }, 100)

    return (
        <Container ref={containerRef}>
            {!videos.length && !isFetching ? (
                <div>No results</div>
            ) : layout === 'feed' ? (
                <FeedLayout {...layoutProps} />
            ) : (
                <GridLayout {...layoutProps} />
            )}
            <Loader isFetching={isFetching} />
            <Observer onVisibleChange={getMoreVideos}>
                <div />
            </Observer>
        </Container>
    )
}

export default ChannelVideos
