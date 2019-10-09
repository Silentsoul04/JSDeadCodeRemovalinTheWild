import { PureComponent } from 'react'
import styled from 'styled-components'
import { withVideoDetailContext } from 'shared/components/context/video-detail'
import Favorite from 'shared/components/favorite/favorite'
import Modals from './modals'

const Buttons = styled.div`
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
`

const Info = styled.div`
    font-size: 20px;
    flex-shrink: 0;
    position: relative;
    transform: rotate(90deg);
    margin-left: 5px;
    margin-top: -6px;
`

const FavWrapper = styled.div`
    width: 40px;
    height: 40px;
    margin: -2px 5px 0 0;
`

const Send = styled.div`
    font-size: 20px;
    margin-left: 5px;
    padding: 0 3px;
`
// favorites are disabled for now
const DISABLE_FAVE = true
@withVideoDetailContext()
class Menu extends PureComponent {
    render() {
        const { videoData, setModal } = this.props
        // TODO favorites for videos, how do they work
        const { id, url = '', is_favorite: isFavorite = false, source_url } = videoData
        return (
            <Buttons>
                {!DISABLE_FAVE && (
                    <FavWrapper>
                        <Favorite id={id} url={url} isFavorite={isFavorite} showLabel={false} scale={1.3} />
                    </FavWrapper>
                )}
                <Send className="ss-send" onClick={() => setModal(Modals.SHARE)} />
                {source_url && <Info className="ss-ellipsis" onClick={() => setModal(Modals.INFO)} />}
            </Buttons>
        )
    }
}

export default Menu
