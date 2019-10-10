import isMobile from 'is-mobile'
import styled from 'styled-components'
import {
    googleAnalyticsEvent
} from 'shared/util/analytics'

const Container = styled.a `
    height: 100%;
`

const Image = styled.img `
    height: 100%;
    object-fit: cover;
    width: 100%;
`

const IS_MOBILE = isMobile()

const Banner = ({
    link,
    image_url,
    image_mobile_url,
    alt_text
}) => ( <
    Container href = {
        link
    }
    onClick = {
        () => {
            googleAnalyticsEvent({
                category: 'Home',
                action: 'Banner Click',
                label: link
            })
        }
    } >
    <
    Image src = {
        IS_MOBILE && image_mobile_url ? image_mobile_url : image_url
    }
    alt = {
        alt_text
    }
    /> <
    /Container>
)

export default Banner