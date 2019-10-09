import { Attribution, colors } from '@giphy/react-giphy-brand'
import styled, { css } from 'styled-components'
import TextWithSeeMore from 'shared/components/text-with-see-more'

const Container = styled.div`
    flex: 1;
    margin-right: 120px;
`

const UserWrapper = styled.div`
    margin-bottom: 10px;
`

const copyCSS = css`
    font-size: 16px;
    color: ${colors.giphyLightGrey};
    line-height: 1.3;
`

const Description = ({ showAttribution = false, videoData: { description, user } }) => (
    <Container>
        {showAttribution && user && (
            <UserWrapper>
                <Attribution user={user} />
            </UserWrapper>
        )}
        <TextWithSeeMore copyCSS={copyCSS} copy={description} lines={2} />
    </Container>
)

export default Description
