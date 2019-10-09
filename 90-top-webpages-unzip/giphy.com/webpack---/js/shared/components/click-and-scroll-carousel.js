import { PureComponent } from 'react'
import styled from 'styled-components'
import { SectionHeader, colors } from '@giphy/react-giphy-brand'
import { take } from 'lodash'
import PropTypes from 'prop-types'
import GifPropType from 'shared/prop-types/gif'
import FadeNextPrevious from 'shared/components/fade-next-previous'
import { tween } from 'shifty'
import { withRouter } from 'react-router'
import { fetchGifsFromUrl } from 'shared/redux/fetch-gifs'
import { connect } from 'react-redux'
import { getGifs, getResponseId } from 'shared/redux/reducers'
import { processTrendingAPIGifs } from 'shared/util/gif-process'
import ScrollCarousel from 'shared/components/scroll-carousel'

const MAX_GIF_COUNT = 25

const Title = styled.a`
    display: flex;
    align-items: flex-start;
`

const CarouselHeader = styled(SectionHeader)`
    color: ${colors.giphyLightGrey};
    margin-bottom: 6px;
`

const CarouselHeaderLink = styled(CarouselHeader)`
    cursor: pointer;
    text-transform: capitalize;
    margin-left: auto;
`

const Arrow = styled.div`
    display: inline-block;
    font-size: 11px;
    margin-left: 3px;
`

@withRouter
@connect(
    (state, { groupId, scheduled }) => ({
        gifs: take(getGifs(state, groupId).map(gif => ({ ...gif, ...{ is_scheduled: scheduled } })), MAX_GIF_COUNT),
        responseId: getResponseId(state, `trending`),
    }),
    { fetchGifsFromUrl },
)
export default class ClickAndScrollCarousel extends PureComponent {
    static propTypes = {
        gifs: PropTypes.arrayOf(GifPropType),
        fetchUrl: PropTypes.string,
        groupId: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        title: PropTypes.string,
        path: PropTypes.string,
        scheduled: PropTypes.bool,
        isTracking: PropTypes.bool,
        apiKey: PropTypes.string,
        processor: PropTypes.func,
        onClick: PropTypes.func,
    }
    state = {
        scrollPosition: 0,
    }
    async componentDidMount() {
        const { fetchGifsFromUrl, fetchUrl, groupId, apiKey, processor } = this.props
        fetchGifsFromUrl(fetchUrl, {
            groupId,
            report: false,
            processor: processor || processTrendingAPIGifs,
            apiKey,
        })
    }
    setScrollLeft = (position, original) => {
        if (original !== undefined) {
            tween({
                from: { x: original },
                to: { x: position },
                duration: 700,
                easing: 'easeInOutQuart',
                step: state => this.setState({ scrollPosition: state.x }),
            })
        } else {
            this.setState({
                scrollPosition: position,
            })
        }
    }
    componentDidUpdate(prevProps, prevState) {
        const { scrollPosition } = this.state
        if (prevState.scrollPosition !== scrollPosition) {
            this.savedRef.scrollLeft = scrollPosition
        }
    }
    saveRef = el => {
        this.savedRef = el
    }
    render() {
        const {
            gifs,
            width = 1040,
            height = 100,
            path,
            title,
            styles,
            groupId,
            responseId,
            isVideo,
            isTracking,
            history: { push },
            onClick,
        } = this.props
        const { scrollPosition } = this.state
        return (
            <div style={styles}>
                <Title href={path}>
                    {title && <CarouselHeader>{title}</CarouselHeader>}
                    <CarouselHeaderLink>
                        See All <Arrow className={`ss-icon ss-navigateright`} />
                    </CarouselHeaderLink>
                </Title>
                <FadeNextPrevious
                    width={width}
                    height={height}
                    items={gifs}
                    setScrollLeft={this.setScrollLeft}
                    scrollLeft={scrollPosition}
                    isVideo={isVideo}
                >
                    <ScrollCarousel
                        gifs={gifs}
                        height={height}
                        rendition={`fixed_width`}
                        showTags={false}
                        hideLock={true}
                        onClick={
                            isVideo
                                ? undefined
                                : (e, gif) => {
                                      e.preventDefault()
                                      push(gif.path, { groupId })
                                      if (onClick) {
                                          onClick(e, gif)
                                      }
                                  }
                        }
                        onScroll={e => this.setScrollLeft(e.target.scrollLeft)}
                        saveRef={this.saveRef}
                        responseId={responseId}
                        isTracking={isTracking}
                        isVideo={isVideo}
                    />
                </FadeNextPrevious>
            </div>
        )
    }
}
