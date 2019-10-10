import {
    Video,
    Subheader
} from '@giphy/react-giphy-brand'
import {
    getContext
} from 'recompose'
import PropTypes from 'prop-types'
import {
    withVideoDetailContext
} from 'shared/components/context/video-detail'
import styled from 'styled-components'
import {
    PublicUser
} from 'shared/components/users'
import {
    connect
} from 'react-redux'
import {
    compose
} from 'recompose'
import * as selectors from '../../shared/reducers'
import {
    getAttributionProps
} from 'shared/util/attribution-util'
import OverlayManager from './overlay-manager'
import Menu from './menu'
import Description from './description'
import VideoGrid from 'shared/components/video-grid'

const Container = styled.div `
    display: flex;
    flex-direction: column;
    text-align: left;
`

const Footer = styled.div `
    margin: 18px 12px 0 12px;
    display: flex;
    flex-direction: column;
`

const Info = styled.div `
    display: flex;
    margin-bottom: 18px;
`

const GridContainer = styled.div `
    margin-top: 20px;
    text-align: left;
`

const MoreVideos = styled(Subheader)
`
    margin: 0 0 6px 6px;
`

const gutter = 6

const VideoDetailComponents = ({
        videoData,
        appWidth,
        autoPlay = true,
        noGrid = false,
        isOffScreen = false
    }) => {
        const {
            user
        } = videoData
        return isOffScreen ? null : ( <
            Container >
            <
            Video videoData = {
                videoData
            }
            autoPlay = {
                autoPlay
            }
            width = {
                appWidth
            }
            forceMute noCutout noShare / >
            <
            Footer >
            <
            Info > {
                user && < PublicUser { ...getAttributionProps({
                        user
                    })
                }
                />} <
                Menu / >
                <
                /Info> <
                Description / >
                <
                /Footer> <
                OverlayManager / > {!noGrid && ( <
                        GridContainer >
                        <
                        MoreVideos > MORE VIDEOS < /MoreVideos> <
                        VideoGrid playButtonSize = {
                            35
                        }
                        itemWidth = {
                            appWidth / 2 - gutter / 2
                        }
                        filterIds = {
                            [videoData.uid]
                        }
                        tags = {
                            ['giphyfilmfest']
                        }
                        /> <
                        /GridContainer>
                    )
                } <
                /Container>
            )
        }

        export default compose(
            getContext({
                isOffScreen: PropTypes.bool
            }),
            withVideoDetailContext(),
            connect(state => ({
                appWidth: selectors.getAppSize(state).width,
            })),
        )(VideoDetailComponents)