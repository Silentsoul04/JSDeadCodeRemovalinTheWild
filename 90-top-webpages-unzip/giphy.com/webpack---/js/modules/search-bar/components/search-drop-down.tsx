import React from 'react'
import styled from 'styled-components'
import { giphyWhiteSmoke } from '@giphy/js-brand'
import { mobile } from 'shared/util/media-query'
import { colors } from '@giphy/react-giphy-brand'
import { groupBy, isEmpty } from 'lodash'
import { Item } from '../types'
import SearchDropdownItem from './search-drop-down-item'
import { messagesZIndex } from 'shared/css/z-indexes'
import TrendingGifsCarousel from 'mobile/components/trending-gifs-carousel'
import { initGoogleAnalytics } from 'shared/util/analytics'
import routes from 'shared/routes'
import { getRouteFromPathname } from 'mobile/components/router'

const SearchBarDropDownContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${colors.giphyWhite};
    color: ${colors.giphyBlack};
    text-align: left;
    line-height: 40px;
    z-index: ${messagesZIndex};
    font-size: 16px;
    h5 {
        padding: 0 12px;
        text-transform: capitalize;
        font-weight: 600;
        font-size: 14px;
        color: ${colors.giphyLightGrey};
    }
    ${mobile.css`
        background-color: ${colors.giphyBlack};
        color: ${colors.giphyWhite};
        margin-top: 4px;
    `}
`

const DividingHeader = styled.h5`
    background-color: ${giphyWhiteSmoke};
    color: ${colors.giphyLightGrey};
    line-height: 30px;
    ${mobile.css`
        background-color: ${colors.giphyBlack};
    `}
`

const CarouselContainer = styled.div`
    margin-top: 20px;
`

const TrendingSearchHeader = styled.h5<{ isHome: boolean }>`
    line-height: 14px;
    margin-top: ${({ isHome }) => (isHome ? 18 : 12)}px;
    margin-bottom: 10px;
`

type SearchDropdownProps = {
    items: Item[]
    searchType: string
    onChannelSelected: (channel: string, img: string, isSearchPage?: boolean) => void
    onGifSelected: () => void
    focusedIndex: number
    searchTerm?: string
}

const SearchDropdown = ({
    items,
    searchType,
    onChannelSelected,
    onGifSelected,
    focusedIndex,
    searchTerm,
}: SearchDropdownProps) => {
    const mappedItems = items.map((item, index) => {
        return { ...item, id: index }
    })
    const { tags, channels, trending } = groupBy(mappedItems, ({ type }) => type)
    const isChannelSearch = searchType === 'channel'
    // init google analytics
    initGoogleAnalytics()
    const gaEvent = { action: 'Click', category: 'Search' }
    const isHome = getRouteFromPathname(location.pathname) === routes.HOME
    return (
        <SearchBarDropDownContainer>
            {isChannelSearch ? (
                <>
                    {!isEmpty(channels) && (
                        <ul>
                            {channels.map(channel => (
                                <SearchDropdownItem
                                    key={channel.name}
                                    isFocusedIndexLink={channel.id === focusedIndex}
                                    isChannelSearch={isChannelSearch}
                                    item={channel}
                                    callback={onChannelSelected}
                                    label={'Channel'}
                                    gaEvent={gaEvent}
                                />
                            ))}
                        </ul>
                    )}
                </>
            ) : (
                <>
                    {!isEmpty(trending) && (
                        <>
                            {!isHome && (
                                <CarouselContainer>
                                    <TrendingGifsCarousel
                                        hideSeeAll
                                        headerText={'Trending Now'}
                                        marginBottom={10}
                                        onGifSelected={onGifSelected}
                                        isInDropdown
                                    />
                                </CarouselContainer>
                            )}
                            <TrendingSearchHeader isHome={isHome}>Trending Searches</TrendingSearchHeader>
                            <ul>
                                {trending.map(trendingItem => (
                                    <SearchDropdownItem
                                        key={trendingItem.name}
                                        isFocusedIndexLink={trendingItem.id === focusedIndex}
                                        isChannelSearch={isChannelSearch}
                                        item={trendingItem}
                                        label={'Trending Search'}
                                        isTrending
                                        gaEvent={gaEvent}
                                    />
                                ))}
                            </ul>
                        </>
                    )}
                    {!isEmpty(tags) && (
                        <ul>
                            {tags.map(tag => (
                                <SearchDropdownItem
                                    key={tag.name}
                                    isFocusedIndexLink={tag.id === focusedIndex}
                                    isChannelSearch={isChannelSearch}
                                    item={tag}
                                    label={'Search Term'}
                                    searchTerm={searchTerm}
                                />
                            ))}
                        </ul>
                    )}
                    {!isEmpty(channels) && (
                        <>
                            <DividingHeader>Channels</DividingHeader>
                            <ul>
                                {channels.map(channel => (
                                    <SearchDropdownItem
                                        key={channel.name}
                                        isFocusedIndexLink={channel.id === focusedIndex}
                                        isChannelSearch={isChannelSearch}
                                        item={channel}
                                        label={'Channel'}
                                        gaEvent={gaEvent}
                                    />
                                ))}
                            </ul>
                        </>
                    )}
                </>
            )}
        </SearchBarDropDownContainer>
    )
}

export default SearchDropdown
