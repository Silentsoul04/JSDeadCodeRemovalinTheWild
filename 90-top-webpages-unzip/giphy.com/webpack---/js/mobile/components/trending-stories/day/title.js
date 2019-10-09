import styled from 'styled-components'
import { bodyFont } from 'shared/css/fonts.css'
import { TitleSmall } from '@giphy/react-giphy-brand'

// this title small needs to be a little bigger so it looks
// right when displayed in the header
const Title = styled(TitleSmall)`
    display: inline-block;
    margin-right: 6px;
    font-size: inherit;
`

// we want body font here so the ellipsis are body font
const Container = styled.div`
    font-family: ${bodyFont};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 300;
    font-size: 28px;
    line-height: 29px;
`

const Subtitle = styled(Title)`
    font-family: ${bodyFont};
`
const TrendingDayTitle = ({ label, sublabel, className }) => (
    <Container className={className}>
        <Title>{label}</Title>
        {sublabel && <Subtitle>{sublabel}</Subtitle>}
    </Container>
)

export default TrendingDayTitle
