import PropTypes from 'prop-types'
import styled from 'styled-components'
import AutoPlay from '../../containers/auto-play/auto-play'
import GridTypeToggle from 'shared/containers/grid-type'
import MarkdownRenderer from '../../shared/markdown-renderer'
import { margin } from '../../shared/constants.css'
import { giphyLightGrey } from 'shared/css/colors.css'

const Container = styled.div`
    padding: ${margin};
    color: ${giphyLightGrey};
    letter-spacing: 0.25;
    font-size: 14px;
    font-weight: 600;
    text-transform: capitalize;
    text-align: left;
    -webkit-font-smoothing: antialiased;

    p {
        line-height: ${props => (props.hasAutoPlay ? 21 : 14)}px;
        padding: ${props => (props.hasAutoPlay ? 2 : 0)}px 0;
    }
`

const CenteredFlex = styled.div`
    display: flex;
    align-items: flex-start;
`

const ButtonContainer = styled.div`
    margin-left: auto;
    flex-shrink: 0;
`

const HeaderSubtitle = ({ subtitle, autoPlay, toggleGrid }) => (
    <Container hasAutoPlay={autoPlay}>
        <CenteredFlex>
            <div dangerouslySetInnerHTML={{ __html: subtitle }} />
            <ButtonContainer>
                {toggleGrid && <GridTypeToggle />}
                {autoPlay && <AutoPlay />}
            </ButtonContainer>
        </CenteredFlex>
    </Container>
)

HeaderSubtitle.propTypes = {
    autoPlay: PropTypes.bool,
    subtitle: PropTypes.string.isRequired,
    toggleGrid: PropTypes.bool,
}

export default MarkdownRenderer('subtitle')(HeaderSubtitle)
