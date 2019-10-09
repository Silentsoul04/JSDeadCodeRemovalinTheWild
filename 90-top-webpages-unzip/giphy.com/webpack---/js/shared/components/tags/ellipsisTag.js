import PropTypes from 'prop-types'
import { matchPath } from 'react-router'
import routes from 'shared/routes'
import React from 'react'
import { googleAnalyticsEvent } from 'shared/util/analytics'
import css from './tag.css'
import { getExplorePath } from 'shared/util/search'
import { trackEvent as trackGifDetailEvent, Actions } from '../../util/gif-detail-ga-events'

const isGifDetail = () => matchPath(location.pathname, routes.GIF_DETAIL)
export default class Tag extends React.PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        isSticker: PropTypes.bool.isRequired,
        userToggled: PropTypes.bool.isRequired,
        maxHeight: PropTypes.number.isRequired,
    }
    state = {
        isEllipsis: false,
        isHidden: false,
    }
    componentDidMount() {
        // when a new tag is added or created
        this.updateTag()
    }
    componentDidUpdate() {
        // when an existing tag's info changes
        this.updateTag()
    }
    componentWillReceiveProps(nextProps) {
        // reset the tags
        if (
            nextProps.name !== this.props.name ||
            nextProps.maxHeight !== this.props.maxHeight ||
            nextProps.userToggled !== this.props.userToggled
        ) {
            this.setState({ isEllipsis: false, isHidden: false })
        }
    }
    updateTag() {
        const { maxHeight, userToggled } = this.props

        if (!userToggled) {
            if (this.tagEl.getBoundingClientRect().top < maxHeight) {
                // tag is in first 2 lines
                if (
                    this.tagEl.nextElementSibling &&
                    this.tagEl.nextElementSibling.getBoundingClientRect().top > maxHeight
                ) {
                    this.setState({ isEllipsis: true })
                }
            } else {
                // make sure tags that jump up to 2nd line after setting ellipsis are not visible
                this.setState({ isHidden: true })
            }
        }
    }
    click(e) {
        const { isEllipsis } = this.state
        const { toggleContainer, name } = this.props
        isGifDetail()
            ? trackGifDetailEvent(Actions.tag, name)
            : googleAnalyticsEvent({
                  category: 'GIF Detail Discovery',
                  action: 'Click',
                  label: 'Tags',
              })

        if (!isEllipsis) return

        e.preventDefault()
        this.setState({ isEllipsis: false })
        toggleContainer()
    }
    render() {
        const { isEllipsis, isHidden } = this.state
        const { name, isSticker } = this.props

        return (
            <a
                ref={link => {
                    this.tagEl = link
                }}
                className={`gif-detail-tag ${isHidden ? css.hide : css.pill}`}
                href={getExplorePath(name, isSticker)}
                onClick={e => this.click(e)}
            >
                <h3 className={css.tag}>{isEllipsis ? '...' : `#${name}`}</h3>
            </a>
        )
    }
}
