import PropTypes from 'prop-types'
import React from 'react'
import {
    autobind
} from 'core-decorators'
import componentFromProp from 'recompose/componentFromProp'
import withPropsOnChange from 'recompose/withPropsOnChange'
import preload, {
    cancel
} from '../util/gif-preload'
import {
    relativeUrl
} from '../util/url'
import {
    getAltText
} from 'shared/util/gif-text'
import Lock from './icons/lock'
import css from '../css/gif-preview.css'
import RouterLink from './router/link'

const QUEUE_ALL_STILLS = 1000,
    QUEUE_STILL_THEN_GIF = 0.5,
    MOUSE_OVER_DELAY = 500,
    ComponentFromProp = componentFromProp('component')

const {
    bool,
    func,
    number,
    string,
    object
} = PropTypes

class GifImage extends React.Component {
    @autobind
    onHover() {
        this.props.pingBackFunctions && this.props.pingBackFunctions.onHover(this.props)
    }

    @autobind
    onClick() {
        this.props.pingBackFunctions && this.props.pingBackFunctions.onClick(this.props)
    }

    @autobind
    onLoad() {
        this.props.pingBackFunctions && this.props.pingBackFunctions.checkForSeen()
    }

    render() {
        const {
            onClick,
            onDragEnd,
            preventDrag,
            onContextMenu,
            src,
            url,
            width,
            height,
            visible,
            isSticker,
            alt,
            shouldUseLinkFallback,
        } = this.props

        return ( <
            RouterLink className = {
                isSticker ? css.stickerWrapper : css.gifWrapper
            }
            href = {
                url ? relativeUrl(url) : ''
            }
            onClick = {
                onClick
            }
            onDragEnd = {
                onDragEnd
            }
            onContextMenu = {
                onContextMenu
            }
            style = {
                {
                    width,
                    height
                }
            }
            shouldUseLinkFallback = {
                shouldUseLinkFallback
            } >
            <
            div > {
                src && ( <
                    img ref = {
                        el => (this.el = el)
                    }
                    onMouseOver = {
                        this.onHover
                    }
                    onLoad = {
                        this.onLoad
                    }
                    onClick = {
                        this.onClick
                    }
                    onMouseDown = {
                        e => preventDrag && e.preventDefault()
                    }
                    className = {
                        visible ? (isSticker ? css.stickerImage : css.gifImage) : css.gifImageHidden
                    } { ...{
                            src,
                            width,
                            height,
                            alt
                        }
                    }
                    />
                )
            } <
            /div> <
            /RouterLink>
        )
    }
}

const addIndex = withPropsOnChange(['animated', 'still', 'index', 'gridId'], ({
    animated,
    still,
    index,
    gridId
}) => ({
    // append a #index on the end in case we have
    // two grid items with the same url loaded at the same time
    // we'll be able to have two callbacks
    animated: `${animated}#${index}-${gridId}`,
    still: `${still}#${index}-${gridId}`,
}))

@addIndex
export default class GifPreview extends React.Component {
    static propTypes = {
        autoPlay: bool.isRequired,
        animated: string.isRequired,
        still: string.isRequired,
        url: string.isRequired,
        index: number.isRequired,
        isHidden: bool,
        isSticker: bool,
        isInPriorityRange: bool.isRequired,
        isInPreloadRange: bool.isRequired,
        isVisibleOnScreen: bool,
        onSeen: func,
        onHover: func,
        onPreClick: func,
        onClick: func,
        onDragEnd: func,
        onContextMenu: func,
        width: number.isRequired,
        height: number.isRequired,
        gridId: string.isRequired,
        queueStillGif: bool,
        backgroundColor: string,
        beforeAfterProps: object,
    }
    state = {
        // the current image src
        src: '',
        // change the opacity of the image element
        visible: false,
        forceAnimated: false,
    }
    mouseoverDelay = null
    isUnmounted = false
    /**
     * Fired on parent's componendDidMount, componentDidUpdate and scroll stop
     */
    preload({
        autoPlay,
        isInPriorityRange,
        isInPreloadRange,
        index,
        still,
        animated,
        queueStillGif = false
    }) {
        // set the src and the visibility state
        const setState = (src, visible) => !this.isUnmounted && this.setState({
            src,
            visible
        })

        if (this.state.forceAnimated) {
            preload(animated, () => setState(animated, true), true, -1)
            return
        }
        // these are visible
        if (isInPriorityRange) {
            // Preload still with priority
            preload(
                still,
                () => {
                    this.hasStill = true
                    setState(still, true)
                    if (autoPlay) {
                        /**
                         * Default behavior is to load all stills in priority
                         * before loading gifs
                         * QUEUE_STILL_THEN_GIF behavior will pair stills and gifs,
                         * loading the still then the gif,
                         * then the next priority still and gif
                         */
                        const animatedIndex = index + (queueStillGif ? QUEUE_STILL_THEN_GIF : QUEUE_ALL_STILLS)
                        // Queue the GIF
                        preload(
                            animated,
                            () => {
                                setState(animated, true)
                            },
                            true,
                            animatedIndex,
                        )
                    }
                },
                true,
                index,
            )
        } else if (isInPreloadRange) {
            // These are in range, but not visible.
            // All stills will go in the front of the queue.
            // Gifs will be pushed on the end of the queue after the still loads.
            preload(still, () => {
                this.hasStill = true
                setState(still, true)
                if (autoPlay) {
                    // The preload gifs are pushed on to the end of the queue
                    preload(animated)
                }
                // The prelaod stills will be put at the front of the queue
                // but behind anything with a priority index
            })
            // out of range, hide them for performance
        } else if (this.hasStill) {
            // if we don't check hasStill, we'll load it unnecessarily
            setState(still, false)
            cancel(animated)
        } else {
            cancel(still)
            cancel(animated)
            // Remove the src and this will kill the image element, free up memory (hopefully)
            this.setState({
                visible: false,
                src: '',
            })
        }
    }
    componentDidMount() {
        this.isUnmounted = false
        this.preload(this.props)
        this.checkForSeen()
    }
    componentWillUnmount() {
        this.isUnmounted = true
        cancel(this.props.still)
        cancel(this.props.animated)
        clearTimeout(this.mouseoverDelay)
    }
    componentWillReceiveProps(nextProps) {
        this.preload(nextProps)
    }
    componentDidUpdate() {
        this.checkForSeen()
    }
    checkForSeen() {
        if (this.sentOnSeen) {
            return
        }
        const {
            onSeen,
            isVisibleOnScreen
        } = this.props
        if (isVisibleOnScreen && this.hasStill && onSeen) {
            const position = this.el ? this.el.getBoundingClientRect() : null
            if (position) {
                this.sentOnSeen = true
                onSeen(position)
            }
        }
    }
    @autobind
    onClick(e) {
        const {
            onPreClick,
            onClick
        } = this.props

        if (onPreClick) {
            onPreClick(this.el ? this.el.getBoundingClientRect() : null)
        }

        if (onClick) {
            e.preventDefault()
            onClick()
        }
    }
    onMouseOver() {
        this.isMousedOver = true
        // invoke on delay
        this.mouseoverDelay = setTimeout(() => this.showAnimated(this.isMousedOver), MOUSE_OVER_DELAY)
    }
    onMouseOut() {
        this.isMousedOver = false
        // inoke immediately
        this.showAnimated(false)
    }
    showAnimated(forceAnimated) {
        const {
            onHover
        } = this.props

        if (forceAnimated && onHover) {
            onHover(this.el ? this.el.getBoundingClientRect() : null)
        }

        this.setState({
                forceAnimated,
            },
            () => this.preload(this.props),
        )
    }

    render() {
        const {
            width,
            height,
            preventDrag,
            isHidden,
            url,
            beforeAfterProps,
            afterGif,
            beforeGif,
            onContextMenu,
            onDragEnd,
            backgroundColor,
            isPrivate,
            isSticker,
            user,
            tags,
            shouldUseLinkFallback,
            still,
            animated,
            isVisibleOnScreen,
            title,
        } = this.props

        const {
            src,
            visible,
            forceAnimated
        } = this.state
        // added these ad hoc for dnd, but it's better than including
        // dnd stuff in here. I think
        const otherBeforeAfterProps = {
            still,
            animated,
            onClick: this.onClick,
            isVisibleOnScreen,
            hasStill: this.hasStill,
        }
        return ( <
            div className = {
                css.gif
            }
            onMouseOver = {
                () => this.onMouseOver()
            }
            onMouseOut = {
                () => this.onMouseOut()
            }
            style = {
                backgroundColor ? {
                    backgroundColor
                } : {}
            }
            ref = {
                c => (this.el = c)
            } >
            {
                isPrivate && ( <
                    a className = {
                        css.privateOverlay
                    }
                    href = {
                        url
                    } >
                    <
                    i className = {
                        css.privateIcon
                    }
                    /> <
                    /a>
                )
            } {
                beforeGif ? ( <
                    ComponentFromProp component = {
                        beforeGif
                    } { ...otherBeforeAfterProps
                    } { ...beforeAfterProps
                    }
                    isHovered = {
                        forceAnimated
                    }
                    />
                ) : null
            } <
            GifImage onClick = {
                this.onClick
            }
            preventDrag = {
                preventDrag
            }
            url = {
                url
            }
            height = {
                height
            }
            width = {
                width
            }
            src = {
                src
            }
            visible = {
                visible
            }
            isVisibleOnScreen = {
                isVisibleOnScreen
            }
            isSticker = {
                isSticker
            }
            onDragEnd = {
                onDragEnd
            }
            onContextMenu = {
                onContextMenu
            }
            shouldUseLinkFallback = {
                shouldUseLinkFallback
            }
            alt = {
                getAltText({
                    is_sticker: isSticker,
                    user,
                    tags,
                    title
                })
            }
            /> {
                isHidden ? ( <
                    div className = {
                        css.gifPrivate
                    } >
                    <
                    Lock / >
                    <
                    /div>
                ) : null
            } {
                afterGif ? ( <
                    ComponentFromProp component = {
                        afterGif
                    } { ...otherBeforeAfterProps
                    } { ...beforeAfterProps
                    }
                    isHovered = {
                        forceAnimated
                    }
                    />
                ) : null
            } <
            /div>
        )
    }
}