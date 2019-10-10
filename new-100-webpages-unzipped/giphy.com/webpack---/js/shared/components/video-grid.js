import React, {
    PureComponent
} from 'react'
import {
    map,
    throttle,
    shuffle
} from 'lodash'
import {
    withRouter
} from 'react-router'
import {
    VideoPreview as BrandVideoPreview
} from '@giphy/react-giphy-brand'
import styled from 'styled-components'
import {
    withVideoDetailContext
} from 'shared/components/context/video-detail'
import {
    googleAnalyticsEvent
} from 'shared/util/analytics'
import {
    Loader
} from 'shared/components/preloader-animation'

const Container = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: left;
`

const VideoPreview = styled(BrandVideoPreview)
`
    margin-bottom: 24px;
`

@withRouter
@withVideoDetailContext()
class VideoGrid extends PureComponent {
    static defaultProps = {
        playButtonSize: 45,
        shouldShuffle: true, //
    }
    state = {
        videos: [],
        lastFilterIds: null, // for knowing when to update
        lastVideos: null, // for knowing when to update
    }
    static getDerivedStateFromProps({
        filterIds = [],
        videos = [],
        shouldShuffle
    }, prevState) {
        if (filterIds !== prevState.lastFilterIds || videos !== prevState.lastVideos) {
            const nextVideos = videos.filter(v => filterIds.indexOf(v.uid) < 0)
            return {
                videos: shouldShuffle ? shuffle(nextVideos) : nextVideos,
                lastVideos: videos,
                lastFilterIds: filterIds,
            }
        }
        return null
    }

    componentDidMount() {
        this.getVideos()
        this.bindScrolling()
    }

    componentWillUnmount() {
        this.unbindScrolling()
    }

    bindScrolling() {
        this.unbindScrolling()
        window.addEventListener('scroll', this.scroll, false)
    }

    unbindScrolling() {
        window.removeEventListener('scroll', this.scroll, false)
    }

    getVideos = async () => {
        const {
            fetchVideos,
            tags,
            limit
        } = this.props
        this.setState({
            isFetching: true
        })
        await fetchVideos(tags, limit)
        this.setState({
            isFetching: false
        })
    }

    scroll = throttle(() => {
        if (!this.el) return
        const {
            bottom
        } = this.el.getBoundingClientRect()
        if (bottom <= window.innerHeight * 1.5) {
            this.getVideos()
        }
    }, 250)

    trackEvent = (action, label) => {
        googleAnalyticsEvent({
            category: 'Video Grid',
            action,
            label,
        })
    }

    onClick = uid => {
        const {
            history: {
                push
            },
        } = this.props
        push(`/videos/${uid}`)
    }

    getVideo = video => {
        const {
            uid
        } = video
        const {
            itemWidth: width,
            overlayElement,
            playButtonSize
        } = this.props
        const overlayWithProps = React.Children.map(overlayElement, child => React.cloneElement(child, video))
        // TODO navigating to id, not uid
        return ( <
            VideoPreview { ...{
                    video,
                    width,
                    playButtonSize,
                    key: uid,
                    onHover: () => {
                        this.trackEvent('Hover', uid)
                    },
                    onClick: e => {
                        e.preventDefault()
                        this.trackEvent('Click', uid)
                        this.onClick(uid)
                        scrollTo(0, 0)
                    },
                }
            } >
            {
                overlayWithProps
            } <
            /VideoPreview>
        )
    }

    render() {
        const {
            videos,
            isFetching
        } = this.state
        return ( <
            Container ref = {
                c => (this.el = c)
            } > {
                map(videos, this.getVideo)
            } <
            Loader isFetching = {
                isFetching
            }
            /> <
            /Container>
        )
    }
}

export default VideoGrid