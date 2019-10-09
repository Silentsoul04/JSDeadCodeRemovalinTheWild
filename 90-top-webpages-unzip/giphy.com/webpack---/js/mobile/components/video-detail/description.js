import { colors } from '@giphy/react-giphy-brand'
import { css } from 'styled-components'
import { withVideoDetailContext } from 'shared/components/context/video-detail'
import TextWithSeeMore from 'shared/components/text-with-see-more'

const copyCSS = css`
    font-size: 14px;
    text-align: left;
    color: ${colors.giphyLightGrey};
`

const Description = ({ videoData: { description } }) => <TextWithSeeMore copyCSS={copyCSS} copy={description} />

export default withVideoDetailContext()(Description)
