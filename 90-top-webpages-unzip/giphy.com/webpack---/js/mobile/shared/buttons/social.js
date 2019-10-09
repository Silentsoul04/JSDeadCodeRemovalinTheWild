import { connect } from 'react-redux'
import styled from 'styled-components'
import sharing from '../sharing'
import { capitalize } from 'lodash'
import shareCSS from '../share.css'
import { googleAnalyticsEvent } from 'shared/util/analytics'
import SocialActions from 'shared/util/social-ga-events'
import { setInstagramVisible } from '../reducers/gif-detail'
import { getUserIsLoggedIn } from '../reducers'

const BUTTON_MARGIN = 5

const Container = styled.div`
    margin: 0px 0px 10px;
    display: flex;
    width: 100%;
`

const Button = styled.div`
    flex-shrink: 1;
    font-size: 16px;
    height: 42px;
    line-height: 44px;
    margin: 0 ${BUTTON_MARGIN}px 0 0;
    width: 100%;
`

const Social = ({ isGif, gif, types = [], gaEvent, isLoggedIn, url, setInstagramVisible }) => {
    const shareUrl = isGif ? gif.url : url || location.href
    const buttonWidth = `calc((100% - ${BUTTON_MARGIN * (types.length - 1)}px) / ${types.length})`
    const { category, label, isClassic = true } = gaEvent
    const getAction = type => {
        if (isClassic) {
            // not sure we use the latter anywhere
            return SocialActions[type] || `${capitalize(type)} Share`
        }
        return `${category} ${type}${isGif ? ` Gif` : ``} Share`
    }
    return (
        <Container>
            {types.map(type => (
                <Button
                    key={type}
                    style={{ width: buttonWidth, minWidth: buttonWidth }}
                    className={shareCSS[type]}
                    onClick={() => {
                        googleAnalyticsEvent({
                            category,
                            action: getAction(type),
                            label,
                        })
                        if (type === `instagram` && isLoggedIn) {
                            setInstagramVisible(true)
                        } else {
                            sharing[type](shareUrl)
                        }
                    }}
                />
            ))}
        </Container>
    )
}

export default connect(
    state => ({ isLoggedIn: getUserIsLoggedIn(state) }),
    { setInstagramVisible },
)(Social)
