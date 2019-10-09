import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import React from 'react'
import { getScrollTop } from 'shared/util/scrolling'
import Tag from './ellipsisTag'
import css from './tags.css'

const NUMBER_OF_LINES = 2

export default class Tags extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        tags: PropTypes.array,
        isSticker: PropTypes.bool.isRequired,
    }
    state = {
        truncated: false,
        maxHeight: 0,
        userToggled: false,
    }
    componentDidMount() {
        this.setMaxHeight(true)
    }
    componentDidUpdate() {
        this.setMaxHeight()
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.tags !== this.props.tags || nextState !== this.state) {
            return true
        }
        return false
    }
    setMaxHeight(initialRender) {
        const scrollTop = getScrollTop()
        const truncatedContainer = this.truncationContainer
        const tagHeight = this.truncationContainer.children[0].offsetHeight
        const bottomTruncatedContainer = truncatedContainer.getBoundingClientRect().top + tagHeight * NUMBER_OF_LINES // in case this jumps around the page

        if (
            truncatedContainer.clientHeight > tagHeight * NUMBER_OF_LINES + 10 &&
            !this.state.userToggled &&
            !this.state.truncated
        ) {
            this.setState({
                truncated: true, // now that we have the tag dimensions info, truncate if tags spill over
                maxHeight: bottomTruncatedContainer + scrollTop, // the height of the container when all tags are visible
            })
        } else if (initialRender) {
            this.setState({ maxHeight: bottomTruncatedContainer + scrollTop })
        }
    }
    toggleContainer() {
        this.setState({
            userToggled: true,
            truncated: false,
        })
    }
    render() {
        const { className, tags, isSticker } = this.props
        const { truncated, maxHeight, userToggled } = this.state
        const analyticsInformation = {
            category: 'GIF Detail Discovery',
            action: 'Click',
            label: 'Tags',
        }

        return (
            <div className={`${css.container} ${className}`}>
                <div
                    className={truncated ? css.truncatedContainer : css.fullContainer}
                    ref={el => {
                        this.truncationContainer = el
                    }}
                >
                    {tags.map((tag, index) => (
                        <Tag
                            analyticsConfig={analyticsInformation}
                            userToggled={userToggled}
                            name={tag}
                            isSticker={isSticker}
                            key={index}
                            maxHeight={maxHeight}
                            toggleContainer={() => this.toggleContainer()}
                        />
                    ))}
                </div>
            </div>
        )
    }
}
