import {
    trackPageView
} from 'shared/util/analytics'

export default pathname => {
    // url should be der
    // Google Analytics
    trackPageView(pathname)
}