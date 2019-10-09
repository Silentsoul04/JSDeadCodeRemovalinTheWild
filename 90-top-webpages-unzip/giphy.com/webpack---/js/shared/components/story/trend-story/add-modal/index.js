import { PureComponent } from 'react'
import { colors } from '@giphy/react-giphy-brand'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Modal from 'shared/components/modal/modal'
import Header from 'shared/components/modal/header'
import AddInput from '../add-input'
import StoryForm from './form'

const Container = styled.div`
    background: ${colors.giphyDarkestGrey};
    box-sizing: border-box;
    padding: 0 30px 15px;
    position: relative;
    text-align: left;
    width: 600px;
`

export default class HomebaseAddStoryModal extends PureComponent {
    static propTypes = {
        url: PropTypes.string,
        onCancel: PropTypes.func,
        onSuccess: PropTypes.func,
        onClose: PropTypes.func.isRequired,
    }
    state = {
        slug: '',
    }
    onAddClick = ({ slug }) => {
        this.setState({ slug })
    }
    render() {
        const { url, onSuccess, onClose, onCancel } = this.props
        const { slug } = this.state
        return (
            <Modal>
                <Container>
                    <Header title="Add Trending Story" onClose={onClose} />
                    <AddInput value={url} onSubmit={this.onAddClick} />
                    {!!slug && (
                        <StoryForm slug={slug} onSuccess={onSuccess || onClose} onCancel={onCancel || onClose} />
                    )}
                </Container>
            </Modal>
        )
    }
}
