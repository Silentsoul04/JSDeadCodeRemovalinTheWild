import {
    PureComponent
} from 'react'
import Modernizr from 'modernizr'
let isWebPOkay = false
let hasChecked = false
// Doing this check in componentWillMount causes the component
// to delay its rendering, just do it here
Modernizr.on('webpanimation', ok => {
    hasChecked = true
    isWebPOkay = ok
})

const CheckForWebP = WrappedComponent =>
    class WebPDecider extends PureComponent {
        componentWillMount() {
            if (!hasChecked) {
                // fallback in case the static version hasn't run, but it definitely should have!
                Modernizr.on('webpanimation', ok => {
                    isWebPOkay = ok
                    hasChecked = true
                    this.forceUpdate()
                })
            }
        }
        render() {
            return hasChecked ? < WrappedComponent { ...this.props
            }
            isWebPOkay = {
                isWebPOkay
            }
            /> : null
        }
    }

export default CheckForWebP