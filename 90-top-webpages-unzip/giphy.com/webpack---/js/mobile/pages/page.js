import PropTypes from 'prop-types'
import { PureComponent } from 'react'
import { getContext } from 'recompose'
import css from './pages.css'

@getContext({ isOffScreen: PropTypes.bool })
class Page extends PureComponent {
    static propTypes = {
        isOffScreen: PropTypes.bool.isRequired,
    }

    render() {
        const { children, isOffScreen } = this.props
        return <div className={isOffScreen ? css.contentHidden : css.content}>{children}</div>
    }
}

export default Page
