import PropTypes from 'prop-types'
import {
    Children,
    PureComponent
} from 'react'
import css from './carousel.css'

/**
 * Carousel: Controls carousel of items with pagination.
 *
 * @class Carousel
 * @param {Number} [maxBlocks] Maximum number of items to
 * show in the carousel. (Defaults to 5)
 */
export default class Carousel extends PureComponent {
    static propTypes = {
        maxBlocks: PropTypes.number,
        title: PropTypes.string,
        titleUrl: PropTypes.string,
        autoPlay: PropTypes.bool,
        isPrivate: PropTypes.bool,
        onNavigate: PropTypes.func,
        totalCount: PropTypes.number,
    }

    static defaultProps = {
        maxBlocks: 5,
        onNavigate: () => {},
    }

    state = {
        totalPages: 1,
        blocks: 5,
        currentPage: 0,
        isNavigating: false,
        disableNext: false,
        disablePrevious: true,
    }

    static getDerivedStateFromProps({
        children,
        maxBlocks,
        totalCount
    }, prevState) {
        const childrenCount = totalCount || Children.count(children)
        const blocks = Math.min(maxBlocks, childrenCount)
        const totalPages = Math.ceil(childrenCount / blocks)
        if (totalPages !== prevState.totalPages || blocks !== prevState.blocks) {
            return {
                blocks,
                totalPages,
                disablePrevious: prevState.currentPage === 0,
                disableNext: prevState.currentPage + 1 >= totalPages,
            }
        }
        return null
    }

    /**
     * Navigates carousel items in specified direction.
     */
    navigateTo(direction) {
        let {
            currentPage,
            totalPages
        } = this.state
        const lastPageFwd = currentPage + 1 === totalPages && direction === 'next'
        const firstPageBack = currentPage === 0 && direction === 'previous'
        this.el.dataset.direction = direction

        // Prevent looping
        if (lastPageFwd || firstPageBack) {
            return
        }

        // Otherwise allow navigation
        if (direction === 'previous') {
            currentPage--
        }
        if (direction === 'next') {
            currentPage++
        }

        currentPage = currentPage % totalPages
        this.setState({
            currentPage,
            isNavigating: direction,
            disablePrevious: currentPage === 0,
            disableNext: currentPage + 1 >= totalPages,
        })
    }

    getItems() {
        let {
            children,
            totalCount
        } = this.props
        const {
            currentPage,
            blocks
        } = this.state
        const start = currentPage * blocks
        const end = Math.min(start + blocks, totalCount || Children.count(children))
        return Children.toArray(children).slice(start, end)
    }

    componentDidUpdate(prevProps, prevState) {
        const {
            currentPage,
            totalPages,
            isNavigating: direction
        } = this.state
        if (prevState.currentPage !== currentPage) {
            const {
                onNavigate
            } = this.props
            onNavigate({
                direction,
                totalPages,
                currentIndex: currentPage
            })
        }
    }

    render() {
            const {
                title,
                titleUrl,
                isPrivate,
                isVisible,
                className = css.carousel
            } = this.props
            const {
                currentPage,
                isNavigating,
                disableNext,
                disablePrevious,
                totalPages,
                blocks
            } = this.state
            const items = this.getItems()
            const disabledLeft = disablePrevious ? css.disabled : null
            const disabledRight = disableNext ? css.disabled : null
            const activeLeft = isNavigating === 'previous' ? css.active : null
            const activeRight = isNavigating === 'next' ? css.active : null
            const animationDirection = isNavigating === 'previous' ? css.previous : css.next
            return ( <
                div className = {
                    className
                }
                ref = {
                    c => (this.el = c)
                }
                data - total = {
                    blocks
                } >
                <
                div className = {
                    css.carouselHeader
                } > {
                    titleUrl ? ( <
                        a className = {
                            css.titleLink
                        }
                        href = {
                            titleUrl
                        } > {
                            isPrivate && < i className = {
                                css.privateIcon
                            }
                            />} <h2>{title}</h
                            2 > {
                                ' '
                            } <
                            i className = {
                                css.titleIconRight
                            }
                            /> <
                            /a>
                        ): ( <
                            div > {
                                isPrivate && < i className = {
                                    css.privateIcon
                                }
                                />} <
                                h2 className = {
                                    css.title
                                } > {
                                    title
                                } < /h2> <
                                /div>
                            )
                        } <
                        div className = {
                            totalPages > 1 ? css.carouselNavContainer : css.carouselNavContainerHidden
                        } >
                        <
                        div className = {
                            `${css.carouselNav} ${activeLeft} ${disabledLeft}`
                        }
                        onClick = {
                            () => this.navigateTo('previous')
                        } >
                        <
                        i className = {
                            css.ssIconLeft
                        }
                        /> <
                        /div> <
                        div className = {
                            `${css.carouselNav} ${activeRight} ${disabledRight}`
                        }
                        onClick = {
                            () => this.navigateTo('next')
                        } >
                        <
                        i className = {
                            css.ssIconRight
                        }
                        /> <
                        /div> <
                        /div> <
                        /div>

                        <
                        div className = {
                            `${css.carouselContent} ${isVisible ? animationDirection : css.hidden}`
                        } >
                        <
                        div className = {
                            css.items
                        }
                        data - page = {
                            currentPage
                        } > {
                            items
                        } <
                        /div> <
                        /div> <
                        /div>
                    )
                }
            }