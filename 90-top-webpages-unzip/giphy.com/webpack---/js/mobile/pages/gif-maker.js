import { lazy } from 'react'
import Page from './page'
import locationState from 'shared/components/with-location-state'
// uncomment for hmr, this fails maybe bc we're loading the container
// import GifMaker from '../containers/gif-maker'
const GifMaker = lazy(() => import(/* webpackChunkName: "mobileGifMaker" */ '../containers/gif-maker'))

const GifMakerPage = ({
    meta,
    featuredStickers,
    defaultTags,
    uploadData,
    campaignTags,
    stickerChannel,
    campaignName,
}) => {
    let stickers = featuredStickers
    if (stickerChannel) {
        stickers = [{ title: campaignName, tag: campaignName, channelId: stickerChannel }, ...featuredStickers]
    }
    return (
        <Page>
            <GifMaker
                groupId="gifmaker"
                backgroundAssetUrls={[
                    '/static/img/svg/giphy-arrow.svg',
                    '/static/img/svg/giphy-blue-block.svg',
                    '/static/img/svg/giphy-purple-block.svg',
                    '/static/img/svg/giphy-green-block.svg',
                    '/static/img/svg/giphy-yellow-block.svg',
                ]}
                fileTypes={['.mov', '.mp4', '.png', '.jpeg', '.jpg', '.gif']}
                maxFilesize={100}
                maxDuration={20}
                isCameraSupported={true}
                campaignChannelId={stickerChannel}
                featuredStickers={stickers}
                {...{ meta, uploadData, campaignTags, defaultTags }}
            />
        </Page>
    )
}

export default locationState([
    'meta',
    'featured_stickers',
    'uploadData',
    'default_tags',
    'campaign_tags',
    'campaign_name',
    'sticker_channel',
])(GifMakerPage)
