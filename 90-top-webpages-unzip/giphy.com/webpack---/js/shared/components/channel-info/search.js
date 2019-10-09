import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import { Component } from 'react'
import channelProps from '../../prop-types/channel'
import { endsWithWords } from 'shared/util/string'
import css from './search.css'

const IMAGE_TYPES = ['gif', 'gifs', 'sticker', 'stickers']

export default class extends Component {
    static propTypes = {
        channel: channelProps,
        query: PropTypes.string,
        isTagView: PropTypes.bool,
    }
    state = {
        inputValue: '',
    }
    componentWillMount() {
        const { query, isTagView } = this.props
        this.setState({ inputValue: query && !isTagView ? query : '' })
    }
    updateInput(value) {
        this.setState({ inputValue: value })
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.inputValue !== this.state.inputValue) {
            return true
        }
        if (nextProps.contentType !== this.props.contentType) {
            return true
        }
        return false
    }
    render() {
        const { user, channel, contentType } = this.props
        const { inputValue } = this.state
        let displayName
        let shortDisplayName
        let searchSlug
        let imageType

        if (user) {
            displayName = user.display_name
            shortDisplayName = user.display_name
            searchSlug = user.username
        } else {
            displayName = channel.ancestors[0] ? channel.ancestors[0].display_name : channel.display_name
            shortDisplayName = channel.ancestors[0]
                ? channel.ancestors[0].short_display_name
                : channel.short_display_name
            searchSlug = channel.ancestors[0] ? channel.ancestors[0].slug : channel.slug
        }
        imageType = contentType === 'sticker' ? 'Stickers' : 'GIFs'

        return (
            <div className={css.container}>
                <form className={css.search} action={`/${searchSlug}/search`}>
                    <input
                        className={css.searchInput}
                        name="q"
                        type="text"
                        required="required"
                        placeholder={`Search ${shortDisplayName || displayName} ${
                            endsWithWords(shortDisplayName || displayName, IMAGE_TYPES) ? '' : imageType
                        }`}
                        onChange={e => this.updateInput(e.target.value)}
                        value={inputValue || ''}
                    />
                    <button className={css.searchButton} type="submit">
                        <i className={css.searchIcon} />
                    </button>
                </form>
            </div>
        )
    }
}
