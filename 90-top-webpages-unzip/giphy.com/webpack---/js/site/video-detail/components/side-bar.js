import styled from 'styled-components'
import { withVideoDetailContext } from 'shared/components/context/video-detail'
import PublicUserDetails from '../../gif-detail/components/attribution/public-user'
import StickAroundAd from 'shared/components/stick-around-ad/stick-around-ad'
import { grid3 } from 'shared/css/grid.css'

const Container = styled.section`
    display: flex;
    width: ${grid3};
    min-height: 72px;
    margin-right: 16px;
    flex-shrink: 0;
    padding-right: 20px;
    flex-direction: column;
`
const adProps = {
    title: 'GIPHY FILM FEST',
    link: '/giphytv',
    description:
        "The world's first film festival limited to only 18 seconds and under. Watch over 100 finalist videos.",
    img: { src: 'https://media.giphy.com/avatars/giphyfilmfest/Ir8G6AF2v7qJ.gif', width: 210, height: 210 },
    buttonCopy: 'See All Videos',
}

const SideBar = ({ videoData = {} }) => {
    if (!videoData) return null
    const { user, id } = videoData
    return (
        <Container>
            {user && user.username !== 'giphyfilmfest' && <PublicUserDetails user={user} id={id} />}
            <StickAroundAd adProps={adProps} />
        </Container>
    )
}

export default withVideoDetailContext()(SideBar)
