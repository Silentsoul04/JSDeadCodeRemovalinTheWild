import { colors, SubheaderSmall } from '@giphy/react-giphy-brand'
import { sample } from 'lodash'
import { Fragment, PureComponent } from 'react'
import { withStorageContext } from 'react-storage-context'
import styled from 'styled-components'

const BackgroundContainer = styled.div`
    position: fixed;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    z-index: -1000;
    min-width: 960px;
    opacity: ${props => (props.videoReady ? 0.5 : 0)};
    transition: opacity 0.6s linear;
`

const AnimatedBackground = styled.video`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    min-height: 50%;
    min-width: 50%;
    overflow-y: hidden;
`

const Artist = styled.a`
    background: ${colors.giphyLightGrey};
    height: 35px;
    display: flex;
    align-items: center;
`

const Avatar = styled.img`
    width: 35px;
    height: 35px;
    object-fit: cover;
`
const ArtistName = styled(SubheaderSmall)`
    padding: 0 10px;
    color: black;
    font-size: 14px;
`

const FooterContainer = styled.div`
    position: fixed;
    bottom: ${props => (props.hasSeenToSMessage ? 20 : 60)}px;
    max-width: 1040px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transition: bottom 0.5s cubic-bezier(0.77, 0, 0.175, 1);
`

@withStorageContext
class Background extends PureComponent {
    state = {
        webmUrl: '',
        mp4Url: '',
    }
    async componentDidMount() {
        const result = await fetch(`/ajax/animated-backgrounds/`)
        const json = await result.json()
        const {
            webm_url: webmUrl,
            mp4_url: mp4Url,
            artist: { avatar_url: avatarUrl, profile_path: profilePath, name },
        } = sample(json.result)
        this.setState({
            webmUrl,
            mp4Url,
            profilePath,
            avatarUrl,
            name,
        })
    }
    onCanPlayThrough = () => this.setState({ videoReady: true })
    render() {
        const {
            local: { hasSeenToSMessage },
        } = this.props
        const { webmUrl, mp4Url, name, profilePath, avatarUrl, videoReady } = this.state
        return webmUrl ? (
            <Fragment>
                <BackgroundContainer videoReady={videoReady}>
                    <AnimatedBackground preload="auto" autoPlay loop muted onCanPlayThrough={this.onCanPlayThrough}>
                        <source src={mp4Url} type="video/mp4" />
                        <source src={webmUrl} type="video/webm" />
                    </AnimatedBackground>
                </BackgroundContainer>
                <FooterContainer hasSeenToSMessage={hasSeenToSMessage}>
                    <Artist href={profilePath}>
                        <Avatar src={avatarUrl} />
                        <ArtistName>{name}</ArtistName>
                    </Artist>
                </FooterContainer>
            </Fragment>
        ) : null
    }
}

export default Background
