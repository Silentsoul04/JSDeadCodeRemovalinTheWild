import locationState from 'shared/components/with-location-state'
import Page from './page'

const studioBackgrounds = [
    'https://media.giphy.com/media/sauMmrcDbMY5a/giphy.gif',
    'https://media.giphy.com/media/Q7gpLiBDR9Os8/giphy.gif',
    'https://media.giphy.com/media/Z69UDgjfRMjsY/giphy.gif',
    'https://media.giphy.com/media/leAStErynqN8I/giphy.gif',
    'https://media.giphy.com/media/7U5FkTj0JbVTi/giphy.gif',
]

const randomStudioBackground = () =>
    'url(' + studioBackgrounds[Math.floor(studioBackgrounds.length * Math.random())] + ')'

const StudiosPage = ({
    content
}) => ( <
    Page >
    <
    div className = "studios-landing-page"
    style = {
        {
            backgroundImage: randomStudioBackground()
        }
    } >
    <
    div className = "studios-landing-inner" >
    <
    h1 className = "studio-logo" >
    <
    span className = "offscreen" > GIPHY Studios < /span> <
    /h1> <
    div className = "studio-content"
    dangerouslySetInnerHTML = {
        {
            __html: content
        }
    }
    /> <
    /div> <
    /div> <
    /Page>
)

export default locationState(['content'])(StudiosPage)