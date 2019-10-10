import {
    PureComponent
} from 'react'
import styled, {
    ThemeProvider
} from 'styled-components'
import PropTypes from 'prop-types'
import GifPropType from 'shared/prop-types/gif'
import {
    withRouter
} from 'react-router'
import {
    Gif
} from '@giphy/react-giphy-brand'
import {
    sanitize
} from 'dompurify'
import {
    trendingCarouselPingBackEvent as firePingback
} from 'shared/pingbacks/pingback-networking'
import {
    debounce,
    isEmpty
} from 'lodash'
import {
    googleAnalyticsEvent
} from 'shared/util/analytics'
import {
    giphyRed,
    giphyPurple
} from '@giphy/js-brand'
import Media from 'react-media'
import {
    mobile
} from 'shared/util/media-query'
import {
    getGifWidth
} from '@giphy/js-util'

const ListWrapper = styled.div `
    height: ${props => props.height}px;
    margin: 0 0 ${({ marginBottom }) => marginBottom}px 0;
    overflow: hidden;
    width: 100%;
    ${({ theme: { isInDropdown } }) =>
        !isInDropdown &&
        mobile.css`
height: 100 % ;
margin - bottom: 20 px;
`}
`

const ListsScrollContainer = styled.div `
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;
    overflow-y: hidden;
    height: 100%;
    padding-bottom: 5px;
`

const List = styled.ul `
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
    overflow-y: hidden;
    margin: 0;
    padding: 0 6px 0 0;
    white-space: nowrap;
    text-align: left;
    height: ${props => props.height + 20}px;
    ${({ theme: { isInDropdown } }) =>
        !isInDropdown &&
        mobile.css` -
    webkit - overflow - scrolling: unset;
overflow: unset;
height: 100 % ;
margin - bottom: 5 px;
`}
`

const Item = styled.li `
    display: inline-block;
    margin-left: 6px;
    list-style: none;
    position: relative;
    vertical-align: top;
    z-index: 1;
    &:first-of-type {
        margin-left: 0px;
    }
`

const SeeAll = styled(Item)
`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    background: linear-gradient(45deg, ${giphyPurple}, ${giphyRed});
    height: ${({ height }) => height}px;
    width: 150px;
    a {
        text-decoration: none;
        border-bottom: none;
    }
`

@withRouter
export default class ScrollCarousel extends PureComponent {
    static propTypes = {
        gifs: PropTypes.arrayOf(GifPropType),
        width: PropTypes.number,
        height: PropTypes.number,
        rendition: PropTypes.string,
        showTags: PropTypes.bool,
        hideLock: PropTypes.bool,
        onClick: PropTypes.func,
        onScroll: PropTypes.func,
        saveRef: PropTypes.func,
        isTracking: PropTypes.bool,
        marginBottom: PropTypes.number,
        isInDropdown: PropTypes.bool,
    }
    state = {
        seenGifIds: [],
        rows: [],
        gifs: this.props.gifs,
    }
    loadedGifs = []

    static getDerivedStateFromProps({
        gifs
    }, {
        gifs: prevGifs
    }) {
        if (gifs !== prevGifs) {
            const evenGifs = []
            const oddGifs = []
            if (gifs && gifs.length) {
                gifs.forEach((gif, index) => {
                    if (index % 2 === 0) {
                        evenGifs.push({ ...gif,
                            originalIndex: index
                        })
                    } else {
                        oddGifs.push({ ...gif,
                            originalIndex: index
                        })
                    }
                })
            }

            return {
                rows: [evenGifs, oddGifs],
                gifs
            }
        }
        return null
    }

    componentDidMount() {
        const {
            saveRef
        } = this.props
        saveRef && saveRef(this.carousel) // pass el up to parent
    }

    componentDidUpdate(prevProps) {
        const {
            gifs
        } = this.props
        if (!prevProps.gifs.length && gifs.length) {
            this.setState({
                gifsNotSeen: [...gifs]
            })
        }
    }

    carouselScroll(e) {
        const {
            onScroll
        } = this.props
        onScroll && onScroll(e) // parent action
        this.checkForSeenGifs()
    }
    onHover(gif, index) {
        const {
            responseId,
            isTracking
        } = this.props
        isTracking && this.formatPingback(gif, responseId, `HOVER`, index)
    }
    onClick(e, gif, index) {
        const {
            responseId,
            isTracking,
            isInDropdown
        } = this.props
        if (isInDropdown) {
            googleAnalyticsEvent({
                action: 'Click',
                category: 'Search',
                label: 'Trending Carousel'
            })
        }

        isTracking && this.formatPingback(gif, responseId, `CLICK`, index, e)
    }
    thirdPartyTracking({
        tags = []
    }) {
        tags.forEach(tag => {
            const el = document.createElement('html')
            tag = tag.replace('%%CACHEBUSTER%%', Date.now())
            el.innerHTML = sanitize(tag)
            const pixel = el.querySelector('img')
            if (pixel) {
                document.querySelector('head').appendChild(pixel)
            }
        })
    }
    formatPingback(gif, responseId, actionType, position, e) {
        const {
            id,
            bottle_data = {}
        } = gif
        const {
            user,
            onClick
        } = this.props
        const {
            tid
        } = bottle_data
        const action = this.createPingbackAction(actionType, id, tid, position)
        firePingback(action, responseId, user, !!tid)
        if (e) {
            onClick(e, gif)
        }
    }
    createPingbackAction(actionType, gifId, tid, position) {
        const value = position.toString()
        const layoutPingback = {
            key: 'layout_type',
            value: this.props.isInDropdown ? 'CAROUSEL_SEARCH' : 'CAROUSEL'
        }
        return {
            action_type: actionType,
            ts: new Date().getTime(),
            gif_id: gifId,
            tid: tid,
            attributes: [
                layoutPingback,
                {
                    key: `position`,
                    value: value, // zero-indexed isGucci
                },
            ],
        }
    }
    checkForSeenGifs = debounce(() => {
        // iterate through all gifs that have been loaded
        // but not seen yet, and make sure they are fully
        // visible in the viewport before considering
        // them as seen.
        const {
            gifs,
            responseId
        } = this.props
        const {
            seenGifIds
        } = this.state
        const newSeenIds = []

        if (!this.carousel) {
            return
        }

        const {
            left: boundsLeft,
            right: boundsRight
        } = this.carousel.getBoundingClientRect()
        this.loadedGifs.forEach(({
            gifId,
            img
        }) => {
            if (seenGifIds.indexOf(gifId) < 0) {
                const {
                    left,
                    top,
                    bottom,
                    right
                } = img.getBoundingClientRect()
                if (left >= boundsLeft && top >= 0 && bottom <= window.innerHeight && right <= boundsRight) {
                    newSeenIds.push(gifId)

                    const gif = gifs.find(gif => gif.id === gifId)
                    const {
                        bottle_data
                    } = gif

                    // Third party tracking
                    if (bottle_data) {
                        this.thirdPartyTracking(bottle_data)
                    }

                    // First party pingback tracking
                    this.formatPingback(gif, responseId, `SEEN`, gifs.indexOf(gif))
                }
            }
        })
        if (newSeenIds.length) {
            this.loadedGifs = this.loadedGifs.filter(item => newSeenIds.indexOf(item.gifId) < 0)
            this.setState({
                seenGifIds: [...seenGifIds, ...newSeenIds]
            })
        }
    }, 300)
    onGifVisible = ({
        id: gifId
    }, img) => {
        const {
            seenGifIds
        } = this.state
        // if this gif has not triggered its onSeen
        // callback yet, add it to the loadedGifImages
        // dict and call checkForSeenGifs
        if (seenGifIds.indexOf(gifId) < 0) {
            this.loadedGifs.push({
                gifId,
                img
            })
            this.checkForSeenGifs()
        }
    }
    render() {
        const {
            gifs,
            autoPlay,
            height = 100,
            rendition,
            showTags,
            hideLock,
            marginBottom,
            isInDropdown = false,
        } = this.props
        const {
            rows
        } = this.state
        let shorterRowIndex

        if (rows.length) {
            const row1Width = rows[0].reduce((acc, cur) => acc + getGifWidth(cur, height), 0)
            const row2Width = rows[1].reduce((acc, cur) => acc + getGifWidth(cur, height), 0)
            shorterRowIndex = row1Width > row2Width ? 1 : 0
        }
        const theme = {
            isInDropdown,
        }

        return ( <
            Media query = {
                mobile.query
            } > {
                matches => ( <
                    ThemeProvider theme = {
                        theme
                    } > {
                        rows.length > 0 && !isInDropdown && matches ? ( <
                            ListWrapper height = {
                                height
                            }
                            marginBottom = {
                                marginBottom
                            } >
                            <
                            ListsScrollContainer ref = {
                                c => (this.carousel = c)
                            }
                            onScroll = {
                                e => this.carouselScroll(e)
                            } >
                            {
                                rows.map((row, rowIndex) => ( <
                                    List key = {
                                        rowIndex
                                    }
                                    height = {
                                        height
                                    } > {
                                        row.map((gif, index) => {
                                            if (gif) {
                                                const {
                                                    id
                                                } = gif
                                                const width = getGifWidth(gif, height)
                                                return ( <
                                                    Item key = {
                                                        index
                                                    }
                                                    onMouseDown = {
                                                        e => this.onClick(e, gif, index)
                                                    } >
                                                    <
                                                    Gif key = {
                                                        id
                                                    }
                                                    gif = {
                                                        gif
                                                    }
                                                    width = {
                                                        width
                                                    }
                                                    height = {
                                                        height
                                                    }
                                                    autoPlay = {
                                                        autoPlay
                                                    }
                                                    rendition = {
                                                        rendition
                                                    }
                                                    showTags = {
                                                        showTags
                                                    }
                                                    hideLock = {
                                                        hideLock
                                                    }
                                                    onClick = {
                                                        e => this.onClick(e, gif, index)
                                                    }
                                                    onHover = {
                                                        () => this.onHover(gif, index)
                                                    }
                                                    onVisible = {
                                                        this.onGifVisible
                                                    }
                                                    /> <
                                                    /Item>
                                                )
                                            }
                                        })
                                    } {
                                        rowIndex === shorterRowIndex && !isEmpty(rows[0]) && ( <
                                            SeeAll height = {
                                                height
                                            } >
                                            <
                                            a href = "/trending-gifs" > See All < /a> <
                                            /SeeAll>
                                        )
                                    } <
                                    /List>
                                ))
                            } <
                            /ListsScrollContainer> <
                            /ListWrapper>
                        ) : ( <
                            ListWrapper height = {
                                height
                            }
                            marginBottom = {
                                marginBottom
                            } >
                            <
                            List ref = {
                                c => (this.carousel = c)
                            }
                            onScroll = {
                                e => this.carouselScroll(e)
                            }
                            height = {
                                height
                            } >
                            {
                                gifs.map((gif, index) => {
                                    if (gif) {
                                        const {
                                            id
                                        } = gif
                                        const width = getGifWidth(gif, height)
                                        return ( <
                                            Item key = {
                                                index
                                            }
                                            onMouseDown = {
                                                e => this.onClick(e, gif, index)
                                            } >
                                            <
                                            Gif key = {
                                                id
                                            }
                                            gif = {
                                                gif
                                            }
                                            width = {
                                                width
                                            }
                                            height = {
                                                height
                                            }
                                            autoPlay = {
                                                autoPlay
                                            }
                                            rendition = {
                                                rendition
                                            }
                                            showTags = {
                                                showTags
                                            }
                                            hideLock = {
                                                hideLock
                                            }
                                            onClick = {
                                                e => this.onClick(e, gif, index)
                                            }
                                            onHover = {
                                                () => this.onHover(gif, index)
                                            }
                                            onVisible = {
                                                this.onGifVisible
                                            }
                                            /> <
                                            /Item>
                                        )
                                    }
                                })
                            } <
                            /List> <
                            /ListWrapper>
                        )
                    } <
                    /ThemeProvider>
                )
            } <
            /Media>
        )
    }
}