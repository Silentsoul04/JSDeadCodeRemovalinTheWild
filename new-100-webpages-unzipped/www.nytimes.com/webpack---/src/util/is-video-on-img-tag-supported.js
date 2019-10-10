import getSafariVersion from 'src/util/get-safari-version';
import isSafari from 'src/util/is-safari';
import getUserAgent from 'src/util/get-user-agent';

export default function isVideoOnImgTagSupported(userAgent = getUserAgent()) {
    if (!isSafari(userAgent)) {
        return false;
    }

    const majorVersion = getSafariVersion(userAgent);
    let minorVersion;
    const match = /(?:iPhone|iPad|iPod|Macintosh).* Version\/\d+\.(\d+)/i.exec(
        userAgent
    );
    if (match && match.length) {
        minorVersion = parseInt(match[1], 10);
    }

    if (majorVersion >= 12 || (majorVersion === 11 && minorVersion >= 1)) {
        return true;
    }

    return false;
}



// WEBPACK FOOTER //
// ./src/util/is-video-on-img-tag-supported.js