import React from 'react'
import styled from 'styled-components'
import { Attribution, Subheader } from '@giphy/react-giphy-brand'
import Video from 'shared/components/video-prototype/player'
import { IVideoGif } from 'shared/components/video-prototype/types'
import useWindowSize from 'shared/hooks/window-size'
import TrendingVideos from './prototype-trending'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`

const Footer = styled.div`
    margin: 10px 12px 0 12px;
    display: flex;
    flex-direction: column;
`

const Info = styled.div`
    display: flex;
    margin-bottom: 18px;
`

const MoreVideos = styled(Subheader)`
    margin: 0 0 6px 6px;
`

type Props = {
    video: IVideoGif
}

const VideoPrototype = ({ video }: Props) => {
    const { id, user } = video
    const { width = window.innerWidth } = useWindowSize()
    return (
        <Container>
            <Video video={video} width={width} />
            <Footer>
                <Info>{user && <Attribution user={user} />}</Info>
            </Footer>
            <MoreVideos>MORE VIDEOS</MoreVideos>
            <TrendingVideos filterId={id} />
        </Container>
    )
}

export default VideoPrototype
