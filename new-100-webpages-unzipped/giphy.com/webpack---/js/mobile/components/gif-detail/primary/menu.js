import {
    PureComponent
} from 'react'
import styled from 'styled-components'
import {
    withGifDetailContext,
    Modals
} from '../gif-detail-context'
import {
    trackEvent,
    Actions
} from 'shared/util/gif-detail-ga-events'
import Favorite from 'shared/components/favorite/favorite'

const Buttons = styled.div `
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
`

const Info = styled.div `
    font-size: 20px;
    height: 36px;
    flex-shrink: 0;
    position: relative;
    transform: rotate(90deg);
    margin-left: 5px;
    margin-right: 20px;
    margin-top: -5px;
`

const FavWrapper = styled.div `
    width: 40px;
    height: 40px;
    margin: -2px 5px 0 0;
`

const Send = styled.div `
    font-size: 20px;
    margin-left: 5px;
    padding: 0 3px;
`
@withGifDetailContext
class Primary extends PureComponent {
    onFavoriteClick = ({
        id
    }) => {
        trackEvent(Actions.favorite, id)
    }
    onShareClick = () => {
        const {
            setModal,
            gif: {
                id
            },
        } = this.props
        setModal(Modals.SHARE)
        trackEvent(Actions.shareClick, id)
    }
    onEllipsisClick = () => {
        const {
            setModal,
            gif: {
                id
            },
        } = this.props
        setModal(Modals.INFO)
        trackEvent(Actions.ellipsisClick, id)
    }
    render() {
        const {
            gif: {
                id,
                is_favorite: isFavorite = false,
                url
            },
        } = this.props
        return ( <
            Buttons >
            <
            FavWrapper >
            <
            Favorite id = {
                id
            }
            isFavorite = {
                isFavorite
            }
            url = {
                url
            }
            showLabel = {
                false
            }
            scale = {
                1.3
            }
            onClick = {
                this.onFavoriteClick
            }
            /> <
            /FavWrapper> <
            Send className = "ss-send"
            onClick = {
                this.onShareClick
            }
            /> <
            Info className = "ss-ellipsis"
            onClick = {
                this.onEllipsisClick
            }
            /> <
            /Buttons>
        )
    }
}

export default Primary