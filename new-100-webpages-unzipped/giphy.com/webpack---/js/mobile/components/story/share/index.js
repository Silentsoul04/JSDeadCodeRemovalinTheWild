import {
    PureComponent
} from 'react'
import {
    connect
} from 'react-redux'
import * as selectors from '../../../shared/reducers'
import ShareModal from '../../../shared/modal/story-share'
import Social from '../../../shared/buttons/social'

@connect(state => {
    const currentCard = selectors.getStoryCurrentCard(state)
    return {
        currentCard,
        currentGif: currentCard ? selectors.getGifById(state, currentCard.gifId) : {},
        info: selectors.getStoryInfo(state),
    }
})
export default class Share extends PureComponent {
    static defaultProps = {
        currentCard: {},
        currentGif: {},
        info: {},
    }
    render() {
        const {
            currentCard,
            info,
            currentGif
        } = this.props
        const isGif = currentCard && currentGif
        const description = currentGif.url ?
            `Share this GIF or copy the story link.` :
            `Share ${info.user ? `${info.user.display_name || info.user.username}'s` : 'this'} story.`
        const title = currentGif.url ? `Share GIF` : `Share Story`
        const gifButton = {
            cta: `Copy GIF Link`,
            url: currentGif.url,
            label: currentGif.id,
        }
        const storyButton = {
            cta: `Copy Story Link`,
            url: location.href,
            label: info.slug,
        }

        return ( <
            ShareModal isGif = {
                isGif
            }
            description = {
                description
            }
            title = {
                title
            }
            gif = {
                currentGif
            }
            slug = {
                info.slug
            }
            primaryButton = {
                isGif ? gifButton : storyButton
            }
            secondaryButton = {
                isGif ? storyButton : undefined
            } >
            <
            Social gif = {
                currentGif
            }
            slug = {
                info.slug
            }
            isGif = {
                isGif
            }
            types = {
                [`sms`, `facebook`, `twitter`, `pinterest`, `reddit`]
            }
            gaEvent = {
                {
                    category: `Story`,
                    label: isGif ? currentGif.id : info.slug,
                    isClassic: false,
                }
            }
            /> <
            /ShareModal>
        )
    }
}