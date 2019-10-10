import { useState } from 'react'
import { css } from 'styled-components'
import { isiOS } from 'mobile/shared/environment'
import useAsyncEffect from './use-async-effect'
import log from 'shared/util/log'

/**
 * This was originally refactored from
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/video/autoplay.js
 *
 * But a lot of what they did seemed unnecessary, and it didn't support iOS
 */
const testAutoPlay = new Promise<boolean>(resolve => {
    const waitTime = 3000
    const video = document.createElement('video')
    const styles = css`
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        height: 2px;
        width: 2px;
    `
    video.style.cssText = styles.toString()
    // This mp4 needed to be small, but too small and iOS wouldn't play it
    // it needed to be about 50x50px.
    video.src =
        'data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAvFtZGF0AAACrwYF//+r3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE1MiByMjg1NCBlOWE1OTAzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNyAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTE2IGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDM6MHgxMzMgbWU9dW1oIHN1Ym1lPTEwIHBzeT0xIHBzeV9yZD0xLjAwOjAuMDAgbWl4ZWRfcmVmPTEgbWVfcmFuZ2U9MjQgY2hyb21hX21lPTEgdHJlbGxpcz0yIDh4OGRjdD0xIGNxbT0wIGRlYWR6b25lPTIxLDExIGZhc3RfcHNraXA9MSBjaHJvbWFfcXBfb2Zmc2V0PS0yIHRocmVhZHM9MiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTggYl9weXJhbWlkPTIgYl9hZGFwdD0yIGJfYmlhcz0wIGRpcmVjdD0zIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MiBrZXlpbnQ9MjUwIGtleWludF9taW49MSBzY2VuZWN1dD00MCBpbnRyYV9yZWZyZXNoPTAgcmNfbG9va2FoZWFkPTYwIHJjPWNyZiBtYnRyZWU9MSBjcmY9MjMuMCBxY29tcD0wLjYwIHFwbWluPTAgcXBtYXg9NjkgcXBzdGVwPTQgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAACJliIEAAt/+99M/zLLsmiS146j3opyL89M/KVGifIG9e0bNAAAADEGaCC2IK//+1qWbQAAAAx5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAH0AABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACSHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAH0AAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAMgAAADIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAB9AAAAAAAAEAAAAAAcBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAAEAAAACAAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAFrbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAABK3N0YmwAAACrc3RzZAAAAAAAAAABAAAAm2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAMgAyAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAA1YXZjQwFkACn/4QAcZ2QAKaxyBEQniIjARAAAAwAEAAADAAg8YMYRgAEABmjoQ48siwAAABBwYXNwAAAAAQAAAAEAAAAYc3R0cwAAAAAAAAABAAAAAgAAQAAAAAAUc3RzcwAAAAAAAAABAAAAAQAAABxzdHNjAAAAAAAAAAEAAAABAAAAAgAAAAEAAAAcc3RzegAAAAAAAAAAAAAAAgAAAtkAAAAQAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU4LjE5LjEwMA=='
    video.setAttribute('autoplay', '')
    video.setAttribute('playsinline', '')
    video.setAttribute('loop', '')
    video.setAttribute('muted', '')

    let timeout

    const handlePlay = () => done(true)
    const handleError = () => {
        if (isiOS()) {
            // we only were checking for iOS (low power mode)
            console.error('Autoplay mp4 test failed.')
        }
        done(true)
    }
    const done = (played: boolean) => {
        clearTimeout(timeout)
        video.removeEventListener('playing', handlePlay, false)
        video.removeEventListener('error', handleError, false)
        // Cleanup, but don't assume video is still in the page -
        // an extension (eg Flashblock) may already have removed it.
        if (video.parentNode) {
            video.parentNode.removeChild(video)
        }
        log.info(`Can autoplay video: ${played}`)
        resolve(played)
    }
    // wait for playing event
    video.addEventListener('playing', handlePlay, false)
    // also if the video errors, let's assume it was the video
    video.addEventListener('error', handleError, false)
    document.body.appendChild(video)
    timeout = setTimeout(() => done(false), waitTime)
})
function useCanVideoAutoPlay() {
    const [canAutoPlay, setCanAutoPlay] = useState(true)
    useAsyncEffect(async () => {
        if (isiOS()) {
            const played = await testAutoPlay
            setCanAutoPlay(played)
        }
    }, [])
    return canAutoPlay
}

export default useCanVideoAutoPlay
