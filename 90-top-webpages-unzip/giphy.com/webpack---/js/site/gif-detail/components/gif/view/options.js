import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Component } from 'react'
import * as selectors from 'shared/redux/reducers'
import { autobind } from 'core-decorators'
import { getTvUrlFromGif, openTvFromGif } from 'shared/util/tv'
import RouterLink from 'shared/components/router/link'
import gifProps from 'shared/prop-types/gif'
import css from './options.css'

const { string } = PropTypes

@connect(state => ({
    permissions: selectors.getUserPermissions(state),
}))
/**
 * GIF Detail - GIF View Options: Controls the tile,
 * fullscreen, and TV view options icons.
 *
 * @class GifViewOptions
 */
export default class extends Component {
    static propTypes = {
        className: string,
        gif: gifProps,
    }
    @autobind
    onTvClick(e) {
        const { gif } = this.props
        e.preventDefault()
        openTvFromGif(gif)
    }
    render() {
        const {
            className,
            gif,
            permissions: { edit },
        } = this.props
        const { path } = gif
        return (
            <div className={className}>
                {edit && <RouterLink className={css.edit} href={`${path}/edit`} />}
                <RouterLink className={css.tile} href={`${path}/tile`} />
                <RouterLink className={css.fullscreen} href={`${path}/fullscreen`} />
                <a className={css.tv} href={getTvUrlFromGif(gif)} onClick={this.onTvClick} />
            </div>
        )
    }
}
