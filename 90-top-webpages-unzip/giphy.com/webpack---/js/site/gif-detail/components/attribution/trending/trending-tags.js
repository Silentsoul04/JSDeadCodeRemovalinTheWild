import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import css from './index.css'

const { arrayOf, string, shape } = PropTypes

/**
 * Attribution: Controls the left rail's trending tags section
 *
 * @class TrendingTags
 */

const TrendingTags = ({ tags }) => (
    <div className={css.container}>
        <h4 className={css.title}>Trending Tags</h4>
        <ul>
            {tags.map((item, index) => (
                <li className={css.tagListItemWrapper} key={index}>
                    <a
                        className={css.tagListItem}
                        href={`/${item.channel_slug}/tagged/${item.name_encoded}`}
                    >{`#${item.name}`}</a>
                </li>
            ))}
        </ul>
    </div>
)

TrendingTags.propTypes = {
    tags: arrayOf(
        shape({
            channel_slug: string,
            name: string,
            name_encoded: string,
        }),
    ).isRequired,
}

export default TrendingTags
