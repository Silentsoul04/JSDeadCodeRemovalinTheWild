import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import { compose } from 'redux'
import { onlyUpdateForPropTypes, setPropTypes, setDisplayName } from 'recompose'
import { AvatarBadge } from 'shared/components/users'
import Carousel from 'shared/components/carousel/carousel'
import { hideIfMissing } from 'shared/util/conditional-rendering'
import { googleAnalyticsEvent } from 'shared/util/analytics'
import { universalSearchPingBackEvent } from 'shared/pingbacks/pingback-networking'

const Container = ({ paginates, ...props }) => (paginates ? PaginatedCarousel(props) : ScrollCarousel(props))

const PaginatedCarousel = ({ css, children, items }) => (
    <div className={css.middleHeader}>
        <div className={css.channelsResults}>
            <Carousel
                maxBlocks={4}
                title={`${items.length} channel${items.length > 1 ? `s` : ``}`}
                className={css.fullWidth}
            >
                {children}
            </Carousel>
        </div>
    </div>
)

const ScrollCarousel = ({ css, children }) => (
    <div className={css.container}>
        <div className={css.carousel}>{children}</div>
    </div>
)

const enhance = compose(
    hideIfMissing('items'),
    onlyUpdateForPropTypes,
    setPropTypes({
        items: PropTypes.array,
        paginates: PropTypes.bool,
        css: PropTypes.object.isRequired,
    }),
    setDisplayName('AvatarBadgeCarousel'),
)

const AvatarBadgeCarousel = enhance(({ searchResponseId, items, user, css, paginates }) => (
    <Container paginates={paginates} css={css} items={items}>
        {items.map(({ slug, name, username, icon, id }, index) => (
            <AvatarBadge
                user={{
                    avatar_url: icon,
                    channelPageUrl: `/channel/${slug}`,
                    username,
                    is_verified: true,
                }}
                title={name}
                key={index}
                height={50}
                css={{
                    containerStyle: css.channelContainer,
                    profileStyle: css.channelProfile,
                    titleStyle: css.channelsTitle,
                }}
                pingbackAnalytics={{
                    component: 'UNIVERSAL_SEARCH_CHANNEL',
                    data: [
                        { key: 'channel_id', value: id },
                        { key: 'channel_slug', value: slug },
                        { key: 'channel_display_name', value: name },
                        { key: 'channel_username', value: username },
                    ],
                    user: user,
                    pingbackRequest: universalSearchPingBackEvent,
                    searchResponseId: searchResponseId,
                    actionNames: {
                        seen: 'UNIVERSAL_SEARCH_CHANNEL_SEEN',
                        click: 'UNIVERSAL_SEARCH_CHANNEL_CLICK',
                        hover: 'UNIVERSAL_SEARCH_CHANNEL_HOVER',
                    },
                }}
                onClick={() =>
                    googleAnalyticsEvent({
                        category: `Search Page`,
                        action: `Channel Click`,
                        label: `${name}`,
                    })
                }
            />
        ))}
    </Container>
))

export default AvatarBadgeCarousel
