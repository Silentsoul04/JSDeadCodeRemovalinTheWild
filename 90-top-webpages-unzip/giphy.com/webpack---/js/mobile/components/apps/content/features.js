import PropTypes from 'prop-types'
import css from './features.css'
import MarkdownRenderer from '../../../shared/markdown-renderer'

const AppFeatures = ({ html }) => <div className={css.appFeatures} dangerouslySetInnerHTML={{ __html: html }} />

AppFeatures.propTypes = {
    html: PropTypes.string.isRequired,
}

export default MarkdownRenderer()(AppFeatures)
