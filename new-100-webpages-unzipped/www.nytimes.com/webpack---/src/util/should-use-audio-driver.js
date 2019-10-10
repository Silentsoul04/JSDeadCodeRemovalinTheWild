const shouldUseAudioDriver = () => {
    const isOldiOSOnIphone = /iphone.*(7|8|9)_[0-9]/i.test(navigator.userAgent);
    const isWebView = /(iPhone|iPod).*AppleWebKit(?!.*Safari)/i.test(
        navigator.userAgent
    );
    return isOldiOSOnIphone || isWebView;
};

export default shouldUseAudioDriver;



// WEBPACK FOOTER //
// ./src/util/should-use-audio-driver.js