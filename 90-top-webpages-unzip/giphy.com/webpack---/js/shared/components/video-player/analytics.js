import { throttle } from 'lodash'
import { Actions, trackEvent } from 'shared/util/video-ga-events'

class VideoPlayerAnalytics {
    constructor(videoId) {
        this.videoId = videoId
    }
    trackAction = actionKey => {
        const action = Actions[actionKey]
        action && trackEvent(action, this.videoId)
    }
    onPlay = () => {
        this.trackAction('play')
    }
    onPause = () => {
        this.trackAction('pause')
    }
    onEnded = () => {
        this.trackAction('ended')
    }
    onLoop = () => {
        this.trackAction('loop')
    }
    onMute = isMuted => {
        this.trackAction(isMuted ? 'soundOff' : 'soundOn')
    }
    onHDSD = isHD => {
        this.trackAction(isHD ? 'hdOn' : 'hdOff')
    }
    onFullscreen = isFullscreen => {
        isFullscreen && this.trackAction('fullscreen')
    }
    onShare = isOpen => {
        this.trackAction(isOpen ? 'shareOn' : 'shareOff')
    }
    onShareAction = shareType => {
        this.trackAction(shareType)
    }
    onScrub = throttle(() => {
        this.trackAction('scrub')
    }, 100)
}

export default VideoPlayerAnalytics
