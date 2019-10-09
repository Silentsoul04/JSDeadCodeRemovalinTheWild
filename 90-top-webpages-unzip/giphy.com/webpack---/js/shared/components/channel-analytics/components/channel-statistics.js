import css from './channel-statistics.css'

const ChannelStatistics = ({ stat, title, isMobile, canShow }) => {
    return (
        <h1
            className={`${isMobile ? css.smallStatistic : css.LargeStatistic} ${
                canShow ? undefined : css.hiddenContent
            }`}
        >
            {stat}
            <div className={css.subheaderContainer}>
                <p className={isMobile ? css.smallAnalyticsSubHeader : css.largeAnalyticsSubHeader}>{title}</p>
            </div>
        </h1>
    )
}
export default ChannelStatistics
