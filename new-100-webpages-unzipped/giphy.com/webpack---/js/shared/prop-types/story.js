import PropTypes from 'prop-types'
import gifProps from './gif'

export default PropTypes.shape({
    story_id: PropTypes.string,
    user_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    description: PropTypes.string,
    gifs: PropTypes.array,
    tags: PropTypes.arrayOf(PropTypes.string),
    cover_gif: gifProps,
    is_private: PropTypes.bool,
    color: PropTypes.string,
    slug: PropTypes.string,
    create_datetime: PropTypes.string,
})