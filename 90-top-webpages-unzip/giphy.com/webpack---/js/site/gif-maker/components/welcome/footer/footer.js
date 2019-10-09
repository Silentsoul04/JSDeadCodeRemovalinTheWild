import { withRouter } from 'react-router'
import css from './footer.css'
import { START_IMAGE, GIF_MAKER } from '../../route'

const Footer = withRouter(({ match: { url }, history: { push } }) => {
    return (
        <div className={css.footerLinks}>
            <div className={css.tosLinks}>
                <a href="/community-guidelines" target="_blank">
                    Community Guidelines
                </a>
                <a href="/privacy" target="_blank">
                    Privacy Policy
                </a>
            </div>
            {url === GIF_MAKER && (
                <div className={css.showStartImageButton} onClick={() => push(START_IMAGE)}>
                    Choose your inspiration <span className={css.startImageArrow} />
                </div>
            )}
        </div>
    )
})

export default Footer
