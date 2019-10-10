import React from 'react'
import styled from 'styled-components'
import { giphyWhiteSmoke, giphyWhite, giphyBlack, giphyDarkCharcoal, giphyLightGrey } from '@giphy/js-brand'
import Media from 'react-media'
import TapLink from 'shared/components/tap-link'
import TrendingIcon from './icons/trending'
import VerifiedBadge from 'shared/components/users/verified-badge'
import { googleAnalyticsEvent } from 'shared/util/analytics'
import { desktop, mobile } from 'shared/util/media-query'
import { get, isEmpty } from 'lodash'
import { Item } from '../types'

const Avatar = styled.div<{ imgSrc: string }>`
    background-image: url('${({ imgSrc }) => imgSrc}');
    width: 40px;
    height: 40px;
    margin-right: calc(6px * 2);
    background-size: cover;
    background-position: center;
`

const DropdownItem = styled.div<{ isChannel: boolean | string; isFocusedIndexLink: boolean }>`
    display: flex;
    align-items: center;
    width: 100%;
    height: ${({ isChannel }) => (isChannel ? 60 : 40)}px;

    ${desktop.css`
        border-bottom: 1px dashed ${giphyWhiteSmoke};
        height: 60px;
        background-color: ${({ isFocusedIndexLink }) => (isFocusedIndexLink ? giphyWhiteSmoke : giphyWhite)};

        &:last-child {
            border: none;
        }
    `}
`

const DropdownItemInfo = styled.div`
    padding-left: 12px;
    display: flex;
    align-items: center;
    color: ${giphyBlack};
    font-weight: normal;

    ${mobile.css`
        color: ${giphyWhite};
        font-style: italic;
        font-weight: 600;
        font-size: 16px;
    `}
`

const ResultInfo = styled.div<{ isChannel: string }>`
    display: flex;
    flex-direction: column;
    line-height: 20px;

    ${desktop.css`
        flex-direction: row;
        span {
            margin-left: 5px;
        }
    `}

    ${({ isChannel }) =>
        isChannel &&
        mobile.css`
        font-style: normal;
    `}
`

const ResultTitle = styled.div<{ isChannelSearch: boolean }>`
    font-weight: ${({ isChannelSearch }) => (isChannelSearch ? 600 : 400)};

    ${mobile.css`
        white-space: pre;
        display: flex;
        align-items: flex-end;
        font-weight: 600;

        img, svg {
            margin-right: 10px;
        }
    `}
`

const ChannelSlug = styled.div`
    color: ${giphyDarkCharcoal};
    font-weight: 500;
    margin-left: 2px;

    ${mobile.css`
        color: ${giphyLightGrey};
        display: flex;
        align-items: center;
        margin-left: 0;

        div {
            margin-left: 2px;
        }
    `}
`

const FocusedIndexLink = styled.a`
    width: 100%;
`

const MobileTapLink = styled(TapLink)`
    width: 100%;
`

const Highlight = styled.span`
    margin-left: 0;
`

const NonHighlight = styled.span`
    color: ${giphyLightGrey};
`

const gaEventDefault = { action: 'Search', category: 'Search Bar' }

type SearchDropdownItemProps = {
    isChannelSearch: boolean
    item: Item
    callback?: (slug: string, img: string) => void
    label: string
    isTrending?: boolean
    searchTerm?: string
    isFocusedIndexLink: boolean
    gaEvent?: {
        action: string
        category: string
    }
}

const SearchDropdownItem = ({
    isChannelSearch,
    item: { name, link, img, slug },
    callback,
    label,
    isTrending = false,
    searchTerm = '',
    isFocusedIndexLink,
    gaEvent = gaEventDefault,
}: SearchDropdownItemProps) => {
    const match = name.match(searchTerm) || {}
    let nonMatchTerm = ''
    let matchTerm = ''

    if (!isEmpty(match)) {
        matchTerm = match[0]
        nonMatchTerm = get(match, 'input').slice(get(match, 'index') + searchTerm.length)
    }

    const showChannelSlug = matches => isChannelSearch || (slug && matches)
    const showHighlight = !isTrending && !img && match

    const content = (
        <DropdownItemInfo>
            {img && <Avatar imgSrc={img} />}
            <ResultInfo isChannel={img}>
                <Media query={mobile.query}>
                    {(matches: any) => (
                        <>
                            <ResultTitle isChannelSearch={showChannelSlug(matches)}>
                                {matches ? (
                                    <>
                                        {isTrending ? (
                                            <TrendingIcon />
                                        ) : (
                                            !img && <img src="/static/img/search-icon.svg" width="17" />
                                        )}
                                        {showHighlight ? (
                                            <>
                                                <Highlight>{matchTerm}</Highlight>
                                                <NonHighlight>{nonMatchTerm}</NonHighlight>
                                            </>
                                        ) : (
                                            <>{name}</>
                                        )}
                                    </>
                                ) : (
                                    <span>{name}</span>
                                )}
                            </ResultTitle>
                            {(isChannelSearch || (slug && matches)) && (
                                <ChannelSlug>
                                    {`@${slug}`}
                                    {matches && <VerifiedBadge is_verified={true} tooltip={false} />}
                                </ChannelSlug>
                            )}
                        </>
                    )}
                </Media>
            </ResultInfo>
        </DropdownItemInfo>
    )

    return (
        <DropdownItem isChannel={isChannelSearch || img} isFocusedIndexLink={isFocusedIndexLink}>
            <Media query={desktop.query}>
                {(matches: any) =>
                    matches ? (
                        <>
                            <FocusedIndexLink
                                href={link}
                                onMouseDown={e => {
                                    e.preventDefault()
                                    if (isChannelSearch) {
                                        callback && callback(slug, img)
                                    } else {
                                        googleAnalyticsEvent({ label, ...gaEvent })
                                        location.href = link
                                    }
                                }}
                            >
                                {content}
                            </FocusedIndexLink>
                        </>
                    ) : (
                        <>
                            <MobileTapLink
                                link={!isChannelSearch ? link : null}
                                onTap={() => {
                                    if (isChannelSearch) {
                                        callback && callback(slug, img)
                                    } else {
                                        googleAnalyticsEvent({ label, ...gaEvent })
                                    }
                                }}
                            >
                                {content}
                            </MobileTapLink>
                        </>
                    )
                }
            </Media>
        </DropdownItem>
    )
}

export default SearchDropdownItem
