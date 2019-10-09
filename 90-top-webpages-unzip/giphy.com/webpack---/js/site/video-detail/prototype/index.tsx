import React from 'react'
import styled from 'styled-components'
import { SectionHeader, colors } from '@giphy/react-giphy-brand'
import Sidebar from 'shared/components/user/sidebar'
import VideoPlayer from 'shared/components/video-prototype/player'
import { IVideoGif } from 'shared/components/video-prototype/types'
import Tags from 'shared/components/tags/tags'
import Related from './related'
import { getVideoTitle } from 'shared/components/video-prototype/utils'

const Container = styled.div`
    display: flex;
    padding-top: 30px;
    position: relative;
    width: 100%;
`

const Content = styled.div`
    position: relative;
`

const Title = styled(SectionHeader)`
    color: ${colors.giphyLightGrey};
    margin-bottom: 16px;
`

const VideoWrapper = styled.div`
    margin-bottom: 16px;
`

type Props = {
    gif: IVideoGif
    showRelated?: boolean
}

const VideoDetailPrototype = ({ gif, showRelated }: Props) => {
    const { user, tags = [] } = gif
    return (
        <Container>
            <Sidebar user={user} showSearch={false} showDashboardLink={false} />
            <Content>
                <VideoWrapper>
                    <Title>{getVideoTitle(gif)}</Title>
                    <VideoPlayer video={gif} />
                </VideoWrapper>
                {tags.length > 0 && <Tags tags={tags} isSticker={false} />}
                {showRelated && <Related gif={gif} />}
            </Content>
        </Container>
    )
}

export default VideoDetailPrototype
