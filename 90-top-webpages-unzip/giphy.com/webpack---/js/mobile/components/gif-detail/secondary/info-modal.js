import { Button, colors } from '@giphy/react-giphy-brand'
import { without } from 'lodash'
import PropTypes from 'prop-types'
import { PureComponent } from 'react'
import { connect } from 'react-redux'
import Flag from 'shared/components/flags/flag'
import styled from 'styled-components'
import * as selectors from '../../../shared/reducers'
import SourceButton from '../../../shared/buttons/source'
import CSRFToken from 'shared/components/form/csrftoken-hoc'
import Gif from '../../../shared/modal/gif'
import gifShape from 'shared/prop-types/gif'
import TagsComponent from './tags/tags'
import FooterContainer from '../../../shared/modal/footer-container'

const Tags = styled(TagsComponent)`
    box-sizing: border-box;
    margin-top: 30px;
    padding-left: 6px;
    text-align: center;
    width: 100%;
`

const Footer = styled(FooterContainer)`
    ${Button} {
        background: ${colors.giphyDarkGrey};
        width: 100%;
        margin-bottom: 6px;
    }
`

const FlagModal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

@CSRFToken
@connect(state => ({
    size: selectors.getAppSize(state),
    user: state.user,
}))
class InfoModal extends PureComponent {
    static propTypes = {
        rendition: PropTypes.string.isRequired,
        gif: gifShape.isRequired,
        csrftoken: PropTypes.string,
    }
    static defaultProps = {}
    state = {
        isShowingFlagForm: false,
    }
    closeFlagForm = () => this.setState({ isShowingFlagForm: false })
    showFlagForm = () => this.setState({ isShowingFlagForm: true })
    render() {
        const { isShowingFlagForm } = this.state
        const { gif, csrftoken, size, user, rendition } = this.props
        const { source_post_url: postURL, id, images, tags: gifTags = [] } = gif
        const src = images[rendition].url
        const tags = without(gifTags, 'transparent')
        return (
            <>
                <Gif src={src} width={size.width} />
                {tags.length > 0 && <Tags tags={tags} isSticker={gif.is_sticker} />}
                <Footer>
                    <SourceButton {...{ postURL, id }} />
                    <Button onClick={this.showFlagForm}>Report GIF</Button>
                    {isShowingFlagForm && (
                        <Flag
                            {...{
                                onFormToggle: this.closeFlagForm,
                                gifID: id,
                                showButton: false,
                                isActive: true,
                                csrftoken,
                                Modal: FlagModal,
                                user,
                            }}
                        />
                    )}
                </Footer>
            </>
        )
    }
}

export default InfoModal
