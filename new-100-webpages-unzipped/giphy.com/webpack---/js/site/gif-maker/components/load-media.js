import {
    PureComponent
} from 'react'
import {
    uniqueId
} from 'lodash'
import FileAccept from 'shared/components/file-portal/file-accept'
import {
    URL_TYPE
} from 'shared/components/inputs/url-input'

@FileAccept
class LoadMedia extends PureComponent {
    state = {}
    loadUrl() {
        const {
            isLoading
        } = this.state
        const {
            onFileAccepted,
            url
        } = this.props
        // if we're loadig or those no url, abort
        if (isLoading || !url) {
            return
        }
        this.setState({
            isLoading: true
        })
        // we could accept other formats,
        // but should refactor the code in js/shared/components/inputs/url-input.js
        // so it's shareable
        onFileAccepted([{
            type: 'url',
            fileType: URL_TYPE.VIDEO,
            urlType: URL_TYPE.VIDEO,
            sourceUrl: url,
            file: url,
            id: uniqueId('url'),
        }, ])
    }
    componentWillMount() {
        this.loadUrl()
    }
    componentDidUpdate() {
        // probably don't need this lifecycle meth
        this.loadUrl()
    }
    render() {
        return null
    }
}

export default LoadMedia