import { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { take } from 'lodash'
import { fetchGifsFromUrl } from 'shared/redux/fetch-gifs'
import { getGifs, getResponseId } from '../../shared/reducers'
import { processTrendingAPIGifs } from 'shared/util/gif-process'
import appendQuery from 'append-query'
import GifPropType from 'shared/prop-types/gif'
import { SectionHeader, colors } from '@giphy/react-giphy-brand'
import styled from 'styled-components'
import { withRouter } from 'react-router'
import ScrollCarousel from 'shared/components/scroll-carousel'
import { relativeUrl } from 'shared/util/url'
import { MOBILE_API_KEY, API_URL } from 'shared/api'

const MAX_GIF_COUNT = 50

const CarouselHeader = styled(SectionHeader)`
    color: ${colors.giphyLightGrey};
    padding: 0 10px;
    line-height: 14px;
    text-transform: capitalize;
    font-size: 16px;
`

const Arrow = styled.div`
    display: inline-block;
    font-size: 11px;
    margin-left: 3px;
`

const Title = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 10px;
`

@withRouter
@connect(
    state => ({
        gifs: take(getGifs(state, 'trending'), MAX_GIF_COUNT),
        responseId: getResponseId(state, `trending`),
    }),
    { fetchGifsFromUrl },
)
export default class TrendingStories extends PureComponent {
    static propTypes = {
        pingback_id: PropTypes.string,
        fetchGifsFromUrl: PropTypes.func.isRequired,
        gifs: PropTypes.arrayOf(GifPropType),
        responseId: PropTypes.string,
        headerText: PropTypes.string,
        hideSeeAll: PropTypes.bool,
        marginBottom: PropTypes.number,
        isInDropdown: PropTypes.bool,
        onGifSelected: PropTypes.func,
        limit: PropTypes.number,
    }
    componentDidMount() {
        const { fetchGifsFromUrl, pingbackId, limit = 25 } = this.props

        const url = appendQuery(`${API_URL}gifs/trending`, {
            api_key: MOBILE_API_KEY,
            limit,
            pingback_id: pingbackId,
        })
        fetchGifsFromUrl(url, {
            groupId: `trending`,
            report: false,
            processor: processTrendingAPIGifs,
            pingback_id: pingbackId,
            apiKey: MOBILE_API_KEY,
        })
    }
    onClick = path => {
        location.href = path
    }
    onGifClick = (e, { url }) => {
        const { history, onGifSelected } = this.props
        e.preventDefault()
        onGifSelected && onGifSelected()
        history.push(relativeUrl(url))
    }
    render() {
        const { gifs, responseId, hideSeeAll, headerText, marginBottom = 30, isInDropdown } = this.props

        return (
            <>
                <Title onClick={() => this.onClick(`/trending-gifs`)}>
                    <CarouselHeader>{headerText || 'Trending GIFs'}</CarouselHeader>
                    {!hideSeeAll && (
                        <CarouselHeader style={{ textTransform: `capitalize`, marginLeftBottom: `auto` }}>
                            See All <Arrow className={`ss-icon ss-navigateright`} />
                        </CarouselHeader>
                    )}
                </Title>
                <ScrollCarousel
                    gifs={gifs}
                    height={120}
                    rendition={`fixed_width`}
                    showTags={false}
                    hideLock={true}
                    onClick={this.onGifClick}
                    responseId={responseId}
                    marginBottom={marginBottom}
                    isTracking
                    isInDropdown={isInDropdown}
                />
            </>
        )
    }
}
