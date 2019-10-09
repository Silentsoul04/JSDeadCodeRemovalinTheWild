import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import channelProps from 'shared/prop-types/channel'
import css from './index.css'

const { arrayOf } = PropTypes

/**
 * Attribution: Controls the left rail attribution content
 * and layout for the following cases:
 *
 * @class RelatedChannel
 */

const RelatedChannel = ({ channels }) => (
    <div className={css.container}>
        <h4 className={css.title}>Featured Channels</h4>
        <ul>
            {channels.map((item, index) => (
                <li key={index}>
                    <a className={css.channelItem} href={`/${item.slug}`}>
                        <img className={css.avatar} src={item.avatar_image_url} />
                        <h4 className={css.name}>{item.display_name}</h4>
                    </a>
                </li>
            ))}
        </ul>
    </div>
)

RelatedChannel.propTypes = {
    channels: arrayOf(channelProps).isRequired,
}

export default RelatedChannel
