import styled from 'styled-components'
import { giphyGrey } from 'shared/css/colors.css'
import socialCSS from 'shared/css/social.css'
import { gridSpacing } from 'shared/css/grid.css'

const SOCIAL_MEDIA = ['facebook', 'twitter', 'instagram', 'tumblr']

const Container = styled.div`
    margin-bottom: ${gridSpacing};
    padding-top: 5px;
    text-align: left;
`

const Label = styled.p`
    color: ${giphyGrey};
    font-weight: bold;
    margin: 0 0 10px;
`

const Button = styled.a`
    display: inline-block;
    margin: 0 5px 5px 0;
`

const Social = props => {
    const items = []
    SOCIAL_MEDIA.forEach(type => {
        const url = props[`${type}_url`]
        if (url) {
            items.push({ url, type })
        }
    })
    return !items.length ? null : (
        <Container>
            <Label>Follow on:</Label>
            {items.map(({ type, url }) => (
                <Button key={type} className={socialCSS[type]} href={url} target="_blank" />
            ))}
        </Container>
    )
}

export default Social
