import PropTypes from 'prop-types'
import {
    PureComponent
} from 'react'
import log from 'shared/util/log'

/**
 * @param {String} prop The name of the prop we want to render
 */
export default (prop = 'html') => WrappedComponent =>
    class MarkDown extends PureComponent {
        static propTypes = {
            [prop]: PropTypes.string.isRequired,
        }
        state = {
            [prop]: '',
        }
        async getHtmlFromMarkdown() {
            const html = this.props[prop]
            // load Showdoan (250k) async
            let Showdown
            try {
                Showdown = await
                import ( /* webpackChunkName: "showdown" */ 'showdown')
            } catch (e) {
                log.error('Error loading Showdown', e)
                return
            }
            const converter = new Showdown.Converter()
            this.setState({
                [prop]: converter.makeHtml(html),
            })
        }
        componentDidMount() {
            this.getHtmlFromMarkdown()
        }
        componentDidUpdate() {
            this.getHtmlFromMarkdown()
        }
        render() {
            return <WrappedComponent { ...this.props
            } { ...this.state
            }
            />
        }
    }