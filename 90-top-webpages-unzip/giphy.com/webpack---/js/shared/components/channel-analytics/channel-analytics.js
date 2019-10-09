import PropTypes from 'prop-types'
import React from 'react'
import css from './channel-analytics.css'
import { fetchUserAnalytics } from 'shared/api'
import log from 'shared/util/log'
import ChannelStatistics from './components/channel-statistics'
import roundWithSuffix from 'shared/util/round-with-suffix'

export default class ChannelAnalyticsOverview extends React.PureComponent {
    state = { uploadCount: 0, viewCount: 0, isPublic: false }
    static propTypes = {
        isCompact: PropTypes.bool,
        userId: PropTypes.number,
    }

    async componentDidMount() {
        const { userId } = this.props
        try {
            const { uploadCount, viewCount, isPublic } = await fetchUserAnalytics(userId)
            this.setState({ uploadCount, viewCount, isPublic })
        } catch (e) {
            log.error(e)
        }
    }

    render() {
        const { uploadCount, viewCount, isPublic } = this.state
        const { isCompact, showDashboardLink } = this.props
        const viewCountRounded = roundWithSuffix(viewCount)
        const uploadCountRounded = roundWithSuffix(uploadCount)

        if (!uploadCount || uploadCount <= 0) return null
        return (
            <div className={isCompact ? css.smallChannelAnalyticsContainer : css.largeChannelAnalyticsContainer}>
                <ChannelStatistics
                    canShow={isPublic}
                    css={css}
                    stat={uploadCountRounded}
                    title={'GIF Uploads'}
                    isMobile={isCompact}
                    toolTipText={'This number reflects your all-time GIF Upload count and can include deleted GIFs'}
                />
                <span className={isCompact ? css.smallGrayLineSeparator : css.grayLineSeparator} />
                <ChannelStatistics
                    canShow={isPublic}
                    css={css}
                    stat={viewCountRounded}
                    title={'GIF Views'}
                    isMobile={isCompact}
                    toolTipText={'This number reflects an aggregate of views across all your Uploads'}
                />

                {isPublic ? (
                    <span />
                ) : (
                    <p className={css.lockedContentText}>
                        <span className={css.lock} />
                        Your metrics are private
                    </p>
                )}
                {showDashboardLink ? (
                    <a href={'/dashboard'} className={isCompact ? css.fullDashboardLinkMobile : css.fullDashboardLink}>
                        Visit Your Dashboard
                    </a>
                ) : null}
            </div>
        )
    }
}
