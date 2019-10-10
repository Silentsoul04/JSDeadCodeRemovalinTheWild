import Header from 'containers/header'
import Page from './page'
import SearchBar from 'containers/search-bar'
import locationState from 'shared/components/with-location-state'

const SupportPage = ({
    content
}) => ( <
    Page >
    <
    Header / >
    <
    SearchBar / >
    <
    div className = "blog-post" >
    <
    div dangerouslySetInnerHTML = {
        {
            __html: content
        }
    }
    /> <
    /div> <
    /Page>
)

export default locationState(['content'])(SupportPage)