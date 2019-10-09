import styled from 'styled-components'
import { Button as BrandButton } from '@giphy/react-giphy-brand'
import { getUrl } from 'shared/util/gif-extract'
import { isiOSChrome } from '../../../../shared/environment'

const Button = styled(BrandButton.withComponent('div'))`
    position: relative;
    width: 100%;

    img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        -webkit-touch-callout: default;
    }
`

const TapAndHoldButton = ({ gif, rendition }) => (
    <Button primary>
        <span>Tap &amp; Hold {isiOSChrome() ? ' to Save' : ' to Copy'} GIF</span>
        <img src={getUrl(gif, rendition)} alt="" />
    </Button>
)

export default TapAndHoldButton
