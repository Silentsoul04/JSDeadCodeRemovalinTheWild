import { defaultProps } from 'recompose'
import GridBase from 'shared/components/gif-grid/grid'
import setStillAndAnimatedProps from 'shared/components/gif-grid/set-still-and-animated-props'
import Preload from 'shared/components/gif-grid/preload-range'
import checkForWebP from 'shared/util/check-for-webp'
import css from './start-image-grid.css'

const preload = {
        low: -innerHeight * 3,
        high: innerHeight * 3,
    },
    priority = {
        low: -200,
        high: innerHeight + 200,
    }

@checkForWebP
@setStillAndAnimatedProps({
    gif: 'fixed_width',
    still: 'fixed_width_still',
    webp: 'fixed_width',
})
@defaultProps({ scrollTop: 0 })
@Preload(preload, priority)
class StartImageGrid extends GridBase {
    static defaultProps = {
        css,
        autoPlay: true,
    }
    /**
     * fixed witdh
     */
    getGifWidth() {
        return 202
    }

    /**
     * fixed height
     */
    getGifHeight() {
        return 165
    }
}

export default StartImageGrid
