import styled from 'styled-components'
import { parse } from 'url'
import { giphyGrey } from 'shared/css/colors.css'

const Container = styled.div`
    margin-bottom: 10px;
`

const Website = styled.a`
    clear: both;
    color: inherit;
    display: inline-block;
    font-weight: bold;
    margin-bottom: 10px;

    &:hover {
        color: inherit;
    }
`

const Bio = styled.p`
    color: ${giphyGrey};
    font-size: 14px;
    line-height: 1.3;
    margin: 0;
    white-space: pre-wrap;
`

const Description = ({ about_bio, description, website_url }) => (
    <Container>
        {website_url && (
            <Website href={website_url} target="_blank">
                {parse(website_url).hostname}
            </Website>
        )}
        <Bio>{about_bio || description}</Bio>
    </Container>
)

export default Description
