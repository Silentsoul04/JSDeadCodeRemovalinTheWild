import PropTypes from 'prop-types'
import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Mousetrap from 'mousetrap'
import { getUrl } from 'shared/util/gif-extract'
import { isEmpty, without } from 'lodash'
import gifProps from 'shared/prop-types/gif'
import Gif from './gif'
import Attribution from '../containers/attribution'
import css from './detail.css'
import Grid from 'shared/components/search/grid'
import Tags from 'shared/components/tags/tags'
import { getTitle } from 'shared/util/gif-text'
import { updateEditMode, toggleEditMode } from 'shared/redux/edit-mode'
import { getEditModeIsEditing } from 'shared/redux/reducers'
import { Helmet } from 'react-helmet'
import { WEB_API_KEY } from 'shared/api'

/**
 * GIF Detail: Controls the main GIF Detail component
 * and layout.
 *
 * @class GifDetail
 */
@withRouter
@connect(
    state => ({
        isEditing: getEditModeIsEditing(state),
    }),
    { updateEditMode, toggleEditMode },
)
export default class Detail extends PureComponent {
    state = {}
    static propTypes = {
        gif: gifProps.isRequired,
        prevGif: gifProps,
        nextGif: gifProps,
        permissions: PropTypes.object,
        isEditOn: PropTypes.bool,
    }
    updateDocumentTitle(gif) {
        this.setState({
            documentTitle: gif
                ? gif.is_sticker
                    ? `${getTitle(gif)} for iOS & Android | GIPHY`
                    : `${getTitle(gif)} - Find & Share on GIPHY`
                : 'Find & Share on GIPHY',
        })
    }
    componentWillMount() {
        const { gif } = this.props
        this.updateDocumentTitle(gif)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.gif !== nextProps.gif) {
            this.updateDocumentTitle(nextProps.gif)
        }
    }

    componentDidMount() {
        // activate fullscreen mode
        Mousetrap.bind('up', () => {
            const {
                gif: { path },
                history: { replace },
            } = this.props
            replace(`${path}/fullscreen`)
            return false
        })

        // activate tile mode
        Mousetrap.bind('shift+up', () => {
            const {
                gif: { path },
                history: { replace },
            } = this.props
            replace(`${path}/tile`)
            return false
        })

        // reset takeover
        Mousetrap.bind(['down', 'shift+down', 'esc'], () => {
            this.resetTakeoverMode()
            return false
        })

        // reset takeover (esc)
        Mousetrap.bind('esc', () => {
            this.resetTakeoverMode()
            return false
        })

        // prev gif
        Mousetrap.bind('left', () => {
            const {
                prevGif,
                history: { push },
                match: {
                    params: { mode = '' },
                },
            } = this.props
            prevGif && push(`${prevGif.path}/${mode}`)
            return false
        })

        // next gif
        Mousetrap.bind('right', () => {
            const {
                nextGif,
                history: { push },
                match: {
                    params: { mode = '' },
                },
            } = this.props
            nextGif && push(`${nextGif.path}/${mode}`)
            return false
        })

        // edit mode
        Mousetrap.bind('command+i', () => {
            const {
                gif: { path },
                permissions: { edit },
                history: { replace },
            } = this.props
            edit && replace(`${path}/edit`)
            return false
        })

        this.props.mode === 'edit' && this.openEditPanel()
    }
    componentDidUpdate({ mode: prevMode, isEditing: prevIsEditing }) {
        const { mode, isEditing } = this.props
        const isEdit = mode === 'edit'

        if (isEdit && mode !== prevMode) {
            this.openEditPanel()
        }
        if (!isEditing && isEditing !== prevIsEditing) {
            this.resetTakeoverMode()
        }
    }
    componentWillUnmount() {
        this.historyListener && this.historyListener()
        Mousetrap.unbind(['up', 'down', 'left', 'right', 'shift+up', 'shift+down', 'esc'])
    }
    openEditPanel() {
        const { gif, updateEditMode, toggleEditMode } = this.props
        updateEditMode(gif)
        toggleEditMode(true)
    }
    resetTakeoverMode() {
        const {
            gif: { path },
            history: { replace },
            match: {
                params: { mode },
            },
        } = this.props
        mode && replace(path)
    }
    render() {
        const {
            gif,
            groupId: groupIdFromProp,
            relatedGroupId,
            match: {
                params: { mode = '' },
            },
        } = this.props
        const { documentTitle } = this.state
        const { is_sticker, tags } = gif
        const sanitizedTags = without(tags, 'transparent')
        const groupId = relatedGroupId || groupIdFromProp
        return (
            <div className={css.container}>
                <Helmet>
                    <title>{documentTitle}</title>
                </Helmet>
                <div className={css.sidebar}>
                    <Attribution isCompact={true} gif={gif} />
                </div>
                <div className={css.content}>
                    <Gif gifId={gif.id} />
                    <div>
                        {!isEmpty(sanitizedTags) && (
                            <Tags className={css.gifTags} tags={sanitizedTags} isSticker={is_sticker} />
                        )}
                        <Grid
                            category="related"
                            locationState={{ groupId }}
                            groupId={groupId}
                            columns={3}
                            showTV={false}
                            excludeGifIds={[gif.id]}
                            apiKey={WEB_API_KEY}
                        />
                    </div>
                </div>
                {mode === 'tile' && (
                    <div
                        className={css.takeover}
                        data-sticker={is_sticker}
                        title="Back to GIF"
                        style={{ backgroundImage: `url(${getUrl(gif)})` }}
                        onClick={() => this.resetTakeoverMode()}
                    />
                )}
            </div>
        )
    }
}
