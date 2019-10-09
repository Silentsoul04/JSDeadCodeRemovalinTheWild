import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import GifPropType from 'shared/prop-types/gif'
import ThinArrow from 'shared/components/thin-arrow'
import { colors } from '@giphy/react-giphy-brand'

const Container = styled.div`
    width: 1040px;
    height: ${props => props.height}px;
    position: relative;
    overflow: hidden;
`

const Navigation = styled.div`
    width: ${props => (props.show ? `50px` : `0px`)};
    height: ${props => props.height}px;
    position: absolute;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0px 12px;
    background: linear-gradient(-90deg, rgba(18, 18, 18, 0.75) 0%, rgba(18, 18, 18, 0) 100%);
    opacity: ${props => (props.show ? `1` : `0`)};
    transition: opacity 0.5s ease-out, width 0.5s ease-out;
    cursor: pointer;
`

const Previous = styled(Navigation)`
    left: 0;
    transform: rotate(180deg);
`

const Next = styled(Navigation)`
    right: 0;
`

export default class FadeNextPrevious extends PureComponent {
    static propTypes = {
        items: PropTypes.arrayOf(GifPropType),
        width: PropTypes.number,
        height: PropTypes.number,
        isVideo: PropTypes.bool,
    }
    state = {
        showNext: false,
        showPrevious: false,
        fullWidth: 0,
        hoverNext: false,
        hoverPrevious: false,
        pageOffsets: [],
        currentPage: 0,
    }

    componentDidUpdate(prevProps) {
        if (prevProps.items !== this.props.items) {
            // gifs have loaded or update
            this.fitItems(true)
        }
        if (prevProps.scrollLeft !== this.props.scrollLeft) {
            this.fitItems(false)
        }
    }
    fitItems(newItems) {
        const {
            height: itemHeight,
            width: carouselWidth,
            items = [],
            margin = 6,
            scrollLeft = 0,
            isVideo = false,
        } = this.props
        const { fullWidth: prevFullWidth, pageOffsets: prevPageOffsets } = this.state
        let pageOffsets = []
        let fullWidth = 0
        let currentPage = 0

        if (newItems) {
            let rowWidth = 0
            pageOffsets.push(0)
            items.forEach(item => {
                const itemWidth = isVideo
                    ? itemHeight * (16 / 9) + margin
                    : (item.images.original.width * itemHeight) / item.images.original.height + margin
                if (rowWidth + itemWidth < carouselWidth) {
                    rowWidth += itemWidth
                } else {
                    const pageX = pageOffsets[pageOffsets.length - 1] + Math.floor(rowWidth)
                    pageOffsets.push(pageX)
                    rowWidth = itemWidth
                }
                fullWidth += itemWidth
            })
            pageOffsets.push(pageOffsets[pageOffsets.length - 1] + Math.floor(rowWidth))
        } else {
            pageOffsets = prevPageOffsets
            fullWidth = prevFullWidth
        }

        pageOffsets.forEach((offset, i) => {
            if (offset <= scrollLeft) {
                currentPage = i
            }
        })

        this.setState({
            pageOffsets,
            fullWidth,
            currentPage,
            showNext: Math.floor(fullWidth - scrollLeft - carouselWidth) > 0,
            showPrevious: scrollLeft > 0,
        })
    }
    navigate(amount) {
        const { scrollLeft, setScrollLeft, width: carouselWidth } = this.props
        const { currentPage, pageOffsets, fullWidth } = this.state
        const nextPage = currentPage + amount
        if (nextPage > -1 && nextPage < pageOffsets.length) {
            const nextPosition = pageOffsets[nextPage]
            setScrollLeft(Math.min(nextPosition, fullWidth - carouselWidth), scrollLeft)
        }
    }
    hover(property, bool) {
        this.setState({ [property]: bool })
    }
    render() {
        const { children, height } = this.props
        const { showPrevious, showNext, hoverPrevious, hoverNext } = this.state

        return (
            <Container height={height}>
                <Previous
                    onClick={() => this.navigate(-1)}
                    show={showPrevious}
                    height={height}
                    onMouseEnter={() => this.hover(`hoverPrevious`, true)}
                    onMouseLeave={() => this.hover(`hoverPrevious`, false)}
                >
                    <ThinArrow color={hoverPrevious ? colors.giphyWhite : colors.giphyLightGrey} />
                </Previous>
                <Next
                    onClick={() => this.navigate(1)}
                    show={showNext}
                    height={height}
                    onMouseEnter={() => this.hover(`hoverNext`, true)}
                    onMouseLeave={() => this.hover(`hoverNext`, false)}
                >
                    <ThinArrow color={hoverNext ? colors.giphyWhite : colors.giphyLightGrey} />
                </Next>
                {children}
            </Container>
        )
    }
}
