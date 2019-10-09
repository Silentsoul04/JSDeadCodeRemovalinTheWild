import styled from 'styled-components'
import { Attribution } from '@giphy/react-giphy-brand'

const Container = styled.div`
    margin-bottom: ${props => (props.theme.isSmall ? 20 : 30)}px;
`

const AttributionWrapper = ({ user }) => (
    <Container>
        <Attribution user={user} />
    </Container>
)

export default AttributionWrapper
