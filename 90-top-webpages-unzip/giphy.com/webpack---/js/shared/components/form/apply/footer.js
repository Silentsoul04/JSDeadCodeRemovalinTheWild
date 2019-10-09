import { Copy } from '../copy'
import Media from 'react-media'
import { desktop } from 'shared/util/media-query'

const Footer = () => (
    <Copy>
        <Media query={desktop.query}>
            {matches =>
                matches ? (
                    <>
                        Maybe go check out some cute <a href="/search/dogs">dog GIFs</a>?
                    </>
                ) : (
                    <a href="#" onClick={() => history.back()}>
                        Close
                    </a>
                )
            }
        </Media>
    </Copy>
)

export default Footer
