import { Component } from 'react'
import Header from 'containers/header'
import { PostTitle, PostAuthor, PostBody } from '../components/post/post'
import Page from './page'
import SearchBar from 'containers/search-bar'
import locationState from 'shared/components/with-location-state'
import { margin } from '../shared/constants.css'

class PostPage extends Component {
    shareToTwitter() {
        window.open(
            'http://twitter.com/share?url=' + encodeURI(document.location.href) + '?tc=1&via=giphy',
            '',
            'width=500,height=252,toolbar=0,menubar=0,location=0,status=1,scrollbars=0,resizable=1,left=0,top=0',
        )
        return false
    }
    shareToFacebook() {
        window.open(
            'http://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.location.href),
            '',
            'width=650,height=280,toolbar=0,menubar=0,location=0,status=0,scrollbars=0,resizable=1,left=0,top=0',
        )
        return false
    }
    shareToPinterest() {
        window.open(
            'http://pinterest.com/pin/create/bookmarklet/?media=' +
                this.props.data.gif.images.original.url +
                '&url=' +
                encodeURIComponent(document.location.href),
            'width=650,height=280,toolbar=0,menubar=0,location=0,status=0,scrollbars=0,resizable=1,left=0,top=0',
        )
        return false
    }
    render() {
        const { post } = this.props
        return (
            <Page>
                <Header />
                <SearchBar />
                <div className="blog-post" style={{ marginLeft: parseInt(margin, 10) }}>
                    <PostTitle post={post} />
                    <PostAuthor post={post} />
                    <div className="sharing">
                        <div onTouchEnd={this.shareToFacebook} className="facebook" />
                        <div onTouchEnd={this.shareToTwitter} className="twitter" />
                        <div onTouchEnd={this.shareToPinterest} className="pinterest" />
                    </div>
                    <div className="clear">
                        <PostBody post={post} />
                    </div>
                </div>
            </Page>
        )
    }
}

export default locationState(['post'])(PostPage)
