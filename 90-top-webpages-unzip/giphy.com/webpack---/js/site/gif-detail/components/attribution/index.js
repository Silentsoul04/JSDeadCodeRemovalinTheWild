import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import { shuffle, uniqBy, isEmpty } from 'lodash'
import CreationTool from './creation-tool-user'
import FeaturedChannels from './featured/featured-channels'
import TrendingTags from './trending/trending-tags'
import StickAroundAd from 'shared/components/stick-around-ad/stick-around-ad'
import Source from './source'
import gifProps from 'shared/prop-types/gif'
import channelProps from 'shared/prop-types/channel'
import PublicUser from './public-user'
const { arrayOf, shape, string } = PropTypes

/**
 * Attribution: Controls the left rail attribution content
 * and layout for the following cases:
 *
 * 1. GIF uploaded by user with public channel page: show channel
 * attribution + show source if present
 * 2. GIF uploaded by user with public user page: show user attribution
 * + show source if present
 * 3. GIF uploaded by anonymous user or user with private user page:
 * DO NOT show user attribution + show creation tool used if present +
 * show source if present (Note that we only have tags to differentiate
 * creation tools: giphyupload, giphygifmaker, giphycapture, etc)
 * 4. Crawled GIF: show source attribution if present
 * 	a. Channel attribution links back to channel
 * 	b. User attribution links back to user page
 * 	c. For users and channels show avatar, display name (username if no
 * 	display name), description, and social buttons
 * 	d. Source links to external website and opens in new tab
 * 	e. Creation tools link to creation tools on web or to Giphy Capture
 * 5. If no source, show user's website if available
 * 6. If no source and no user website, show source image url
 *
 * @class Attribution
 */

const Attribution = ({ gif, featuredChannels, trendingTags }) => {
    const { user } = gif
    const numberOfFeaturedChannels = 3
    const numberOfTrendingTags = 5
    return (
        <div>
            {user && (
                <div>
                    <PublicUser user={gif.user} id={gif.id} />
                </div>
            )}

            <Source gif={gif} />
            {!user && !isEmpty(featuredChannels) && (
                <FeaturedChannels channels={shuffle(featuredChannels).slice(0, numberOfFeaturedChannels)} />
            )}
            {!user && !isEmpty(trendingTags) && (
                <TrendingTags tags={shuffle(uniqBy(trendingTags, tag => tag.name)).slice(0, numberOfTrendingTags)} />
            )}
            {!user && <CreationTool gif={gif} />}
            <StickAroundAd />
        </div>
    )
}

Attribution.propTypes = {
    gif: gifProps.isRequired,
    featuredChannels: arrayOf(channelProps),
    trendingTags: arrayOf(
        shape({
            name: string,
            name_encoded: string,
        }),
    ),
}

export default Attribution
