import styled from 'styled-components'
import {
    giphyWhite
} from 'shared/css/colors.css'
import {
    titleFont
} from 'shared/css/fonts.css'

const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: left;
    width: 88%;
    margin: 0% 6% 20px 6%;
`

const Title = styled.h3 `
    font-family: ${titleFont};
    font-size: 28px;
    line-height: 1.1;
    margin: 0 0 4px;
    -webkit-font-smoothing: antialiased;
`

const Description = styled.p `
    color: ${giphyWhite};
`

const Info = ({
        title,
        description
    }) => ( <
        Container > {
            title && < Title > {
                title
            } < /Title>} {
                description && < Description > {
                        description
                    } < /Description>} <
                    /Container>
            )

            export default Info