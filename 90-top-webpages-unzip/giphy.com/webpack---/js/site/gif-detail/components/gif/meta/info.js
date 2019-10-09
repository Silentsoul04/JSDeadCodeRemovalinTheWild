import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import { PureComponent } from 'react'
import { getTitle } from 'shared/util/gif-text'
import { format } from 'date-fns'
import { formatSize } from 'shared/util/numbers'
import cookie from 'cookie'
import getData from 'shared/util/gif-extract'
import gifProps from 'shared/prop-types/gif'
import Flag from '../../../containers/flag'
import css from './info.css'

/**
 * GIF Detail - Meta Info: Controls the meta information
 * for GIFs. Includes size, frame count, rating, etc.
 *
 * @class GifMetaInfo
 */
export default class extends PureComponent {
    static propTypes = {
        gif: gifProps,
    }
    state = {
        isInfoShowing: false,
    }
    render() {
        const { isInfoShowing } = this.state
        const { gif } = this.props
        const { create_datetime, rating } = gif
        const { frames, size, width, height } = getData(gif)
        const { csrftoken } = cookie.parse(document.cookie)
        return (
            <div className={css.container}>
                <div className={css.wrapper}>
                    <h1 className={css.title}>{getTitle(gif)}</h1>
                    <div
                        className={isInfoShowing ? css.hideInfo : css.showInfo}
                        onClick={() => this.setState({ isInfoShowing: !isInfoShowing })}
                    />
                </div>
                {isInfoShowing && (
                    <div className={css.info}>
                        <div>
                            <div className={css.item}>
                                Dimensions:{' '}
                                <span>
                                    {width} x {height} px
                                </span>
                            </div>
                            <div className={css.item}>
                                Uploaded: <span>{format(create_datetime, 'MM/D/YYYY')}</span>
                            </div>
                        </div>
                        <div>
                            <div className={css.item}>
                                Size: <span>{formatSize(size)}</span>
                            </div>
                            <div className={css.item}>
                                Rating: <span>{(rating || 'unrated').toUpperCase()}</span>
                            </div>
                        </div>
                        <div>
                            <div className={css.item}>
                                Frames: <span>{frames || ''}</span>
                            </div>
                            <div className={css.item}>
                                <Flag gifID={gif.id} csrftoken={csrftoken} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
