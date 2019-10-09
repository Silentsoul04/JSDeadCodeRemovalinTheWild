import PropTypes from 'prop-types'
import MarkdownRenderer from '../../../shared/markdown-renderer'
import css from './video.css'

const AppVideo = ({ embed }) => (
    <div className={css.appVideo}>
        <h3 className={css.appVideoTitle}>Watch our awesome video</h3>
        <div className={css.appVideoEmbed} dangerouslySetInnerHTML={{ __html: embed }} />
    </div>
)

AppVideo.propTypes = {
    embed: PropTypes.string.isRequired,
}

export default MarkdownRenderer('embed')(AppVideo)
