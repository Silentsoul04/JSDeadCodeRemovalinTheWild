import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Input, Button, colors } from '@giphy/react-giphy-brand'
import { getSlug } from 'shared/util/url'

const InputWrapper = styled.form`
    align-items: center;
    display: flex;
    width: 100%;
`

const AddButton = styled(Button)`
    background: ${colors.primaryCTA};
    flex-grow: 0;
    flex-shrink: 0;
    height: 40px;
    font-size: 14px;
    line-height: 42px;
    padding: 0;
    width: 40px;
`

const getStorySlugFromUrl = url => {
    const slug = getSlug(url)
    return slug && url.indexOf('/stories/') > -1 ? slug : null
}

export default class HomebaseAddInput extends PureComponent {
    static propTypes = {
        value: PropTypes.string,
        onSubmit: PropTypes.func,
    }
    state = {
        slug: '',
        url: '',
    }
    constructor(props) {
        super(props)

        const { value, onSubmit } = props
        if (value) {
            const slug = getStorySlugFromUrl(value)
            this.state = {
                slug,
                url: value,
            }
            slug && onSubmit && onSubmit(this.state)
        }
    }
    onInput = e => {
        const url = e.target.value
        const slug = getStorySlugFromUrl(url)
        this.setState({ slug, url })
    }
    onSubmit = e => {
        const { onSubmit } = this.props
        e.preventDefault()
        onSubmit && onSubmit({ ...this.state })
    }
    render() {
        const { value } = this.props
        const { slug } = this.state
        return (
            <InputWrapper onSubmit={this.onSubmit}>
                <Input initialValue={value} inputProps={{ placeholder: 'Add Story URL', onInput: this.onInput }} />
                <AddButton disabled={!slug} type="submit">
                    <i className="ss-plus" />
                </AddButton>
            </InputWrapper>
        )
    }
}
