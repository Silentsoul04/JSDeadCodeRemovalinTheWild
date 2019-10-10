import Header from 'containers/header'
import Artists from '../components/artists'
import Page from './page'

const AboutPage = ({
    match: {
        params = {}
    }
}) => {
    const {
        letter
    } = params
    return ( <
        Page >
        <
        Header / >
        <
        Artists filter = {
            letter
        }
        /> <
        /Page>
    )
}

export default AboutPage