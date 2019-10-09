import PropTypes from 'prop-types'
import { format } from 'date-fns'
import FitText from 'shared/components/fit-text/fit-text'
import gifProps from 'shared/prop-types/gif'
import css from '../../css/grid-post.css'

const PostInfo = ({ slug, author, datetime, title }) => (
    <a className={css.content} href={`/posts/${slug}`}>
        <span className={css.attribution}>
            <span className={css.date}>{format(datetime, 'MMMM D, YYYY')}</span>
            {author ? <h4 className={css.author}>{author.author_display_name}</h4> : null}
        </span>
        <FitText className={css.fitTitle} maxFontSize={24} increment={4}>
            {title}
        </FitText>
    </a>
)

PostInfo.propTypes = {
    url: PropTypes.string,
    author: PropTypes.object,
    datetime: PropTypes.string,
    title: PropTypes.string,
}

const Post = ({ gif: { post }, backgroundColor, isHovered }) => (
    <div className={post ? css.container : css.containerHidden}>
        {post ? (
            <div className={isHovered ? css.backgroundHidden : css.background} style={{ backgroundColor }} />
        ) : null}
        {post ? <PostInfo {...post} /> : null}
    </div>
)

Post.propTypes = {
    gif: gifProps.isRequired,
    backgroundColor: PropTypes.string,
    isHovered: PropTypes.bool,
}

export default Post
