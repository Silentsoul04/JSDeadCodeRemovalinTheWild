import Media from 'react-media'
import styled from 'styled-components'
import { desktop } from 'shared/util/media-query'

const MascotImg = styled.img`
    max-width: 400px;
`
const Mascot = ({ id }) => (
    <Media query={desktop.query}>
        {matches => <MascotImg src={`https://media.giphy.com/media/${id}/${matches ? 'giphy' : '200w'}.gif`} />}
    </Media>
)

export default Mascot
