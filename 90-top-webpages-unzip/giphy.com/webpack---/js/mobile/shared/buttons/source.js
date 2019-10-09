import PropTypes from 'prop-types'
import styled from 'styled-components'
import { trackEvent, Actions } from 'shared/util/gif-detail-ga-events'
import isURL from 'is-url'
import url from 'url'
import { Button } from '@giphy/react-giphy-brand'

const LinkButton = styled(Button.withComponent('a'))`
    width: 100%;
    margin-bottom: 6px;
    overflow: hidden;
    text-overflow: ellipsis;
`

const SourceButton = ({ postURL, id }) =>
    isURL(postURL) && (
        <LinkButton
            onClick={() => trackEvent(Actions.sourceClick, id)}
            href={postURL}
            target="_blank"
            rel="noopener noreferrer"
        >
            See Source &ndash; {url.parse(postURL).hostname}
        </LinkButton>
    )

SourceButton.propTypes = {
    postURL: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default SourceButton
