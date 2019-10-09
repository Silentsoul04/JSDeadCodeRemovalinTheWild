import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { take, takeRight, isEmpty, uniqueId, shuffle, groupBy, find } from 'lodash'
import { receivedGifs } from 'shared/redux/gifs'
import { getGifs } from 'shared/redux/reducers'
import FileAccept from 'shared/components/file-portal/file-accept'
import { channelGifs } from 'shared/api'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import welcomeCss from '../welcome.css'
import startImageCss from './start-image.css'
import Grid from './start-image-grid'
import { URL_TYPE } from 'shared/components/inputs/url-input'
import { GIF_MAKER } from '../../route'

const css = { ...welcomeCss, ...startImageCss }

const channelId = 7010478 // the default canvas channel
const groupId = `Start Image Gifs`
const campaingGroupId = `Start Image for Campaign`

const totalGifs = 8
const gifsPerRow = totalGifs / 2
const isCanvas = id => id !== 'xT4Apo7AplrgF9ABzy' && id !== '3o6EQqGHnGrJ1Dqm1G'
const pickGifs = (gifs, campaignGifs) => {
    if (isEmpty(gifs) && isEmpty(campaignGifs)) return gifs
    const { regularGifs, blankCanvas = [] } = groupBy(gifs, ({ id }) => (isCanvas(id) ? 'regularGifs' : 'blankCanvas'))
    // these two are blank canvases
    const [firstCanvas, secondCanvas] = blankCanvas
    // shuffled the gifs
    let shuffled = take(shuffle(regularGifs), totalGifs)
    // campaign gif insertion
    if (!isEmpty(campaignGifs)) {
        const numberOfCampaignGifs = campaignGifs.length
        // put the campaing gifs before the regular gifs
        shuffled = [...take(campaignGifs, numberOfCampaignGifs), ...take(shuffled, totalGifs - numberOfCampaignGifs)]
    }
    const firstRow = take(shuffled, gifsPerRow)
    // we should always have these but just in case someone deletes them
    if (firstCanvas && secondCanvas) {
        // put the blank canvases in the bottom two corners
        return [...firstRow, firstCanvas, ...takeRight(shuffled, gifsPerRow - 2), secondCanvas]
    } else {
        return [...firstRow, ...takeRight(shuffled, gifsPerRow)]
    }
}

@withRouter
@FileAccept
@connect(
    state => ({
        gifs: getGifs(state, groupId),
        campaignGifs: getGifs(state, campaingGroupId),
    }),
    { receivedGifs },
)
class StartImage extends PureComponent {
    static propTypes = {
        onFileAccepted: PropTypes.func.isRequired,
        onError: PropTypes.func.isRequired,
    }
    state = {
        gifs: [],
    }
    hasSelectedGif = false

    componentWillMount() {
        const { gifs } = this.props
        this.setState({ gifs: pickGifs(gifs) })
    }

    componentDidMount() {
        const { gifs, receivedGifs, onError, canvasChannel } = this.props
        if (isEmpty(gifs)) {
            let canvasGifs = [{ channelId, groupId }]
            if (canvasChannel) {
                canvasGifs.push({
                    channelId: canvasChannel,
                    groupId: campaingGroupId,
                })
            }
            canvasGifs.forEach(async ({ channelId, groupId }) => {
                try {
                    const { results: gifs } = await channelGifs(channelId, 50)
                    receivedGifs({ gifs, groupId })
                } catch (error) {
                    onError(error, 'Error loading starter images :(')
                }
            })
        }
    }
    componentWillReceiveProps({ gifs, campaignGifs }) {
        if (this.props.gifs !== gifs || this.props.campaignGifs !== campaignGifs) {
            this.setState({ gifs: pickGifs(gifs, campaignGifs) })
        }
    }

    onGifClick = ({
        id,
        images: {
            original: { url, width, height },
        },
    }) => {
        if (this.hasSelectedGif) {
            // may take a sec to navigate to decorate, don't let them click too much
            return
        }
        this.hasSelectedGif = true
        const { onFileAccepted, campaignGifs } = this.props
        onFileAccepted([
            {
                type: 'url',
                fileType: 'image',
                urlType: URL_TYPE.GIPHY_STARTER,
                sourceUrl: url,
                file: '//p.giphy.com/fetch?gif=' + url.replace(/.*?:\/\//g, ''),
                id: uniqueId('url'),
                width: parseInt(width),
                height: parseInt(height),
                // flag this canvas
                isCampaign: !!find(campaignGifs, gif => gif.id === id),
            },
        ])
    }
    render() {
        const {
            history: { replace },
            gifs: allGifs,
        } = this.props
        const { gifs } = this.state
        return (
            <div className={css.content}>
                <h3 className={css.title}>PICK A CANVAS TO START WITH</h3>
                <div className={css.description}>Add captions, stickers, or draw starting with one of these</div>
                {!isEmpty(gifs) && [
                    <Grid key="grid" gifs={gifs} onGifClick={this.onGifClick} />,
                    <div key="footer" className={css.startImageFooter}>
                        <div className={css.backToWelcomeButton} onClick={() => replace(GIF_MAKER)}>
                            <span className={css.startImageBackArrow} /> Back to upload
                        </div>
                        <div
                            className={css.startImageShuffleButton}
                            onClick={() => this.setState({ gifs: pickGifs(allGifs) })}
                        >
                            <span className={css.startImageShuffleIcon} />
                            Shuffle
                        </div>
                    </div>,
                ]}
            </div>
        )
    }
}

export default StartImage
