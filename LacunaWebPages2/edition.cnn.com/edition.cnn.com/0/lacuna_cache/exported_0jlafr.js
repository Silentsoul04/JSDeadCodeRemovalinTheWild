
        if ((typeof window.innerHeight === 'number' && window.innerHeight < 0 && window.innerHeight >= 0) || (typeof document.location.href === 'string' && document.location.href.search(/^http(?:s)?:\/\/edition\.cnn\.com\/\?\d+$/i) !== -1)) {
            if (typeof window.stop === 'function') {
                window.stop();
            } else {
                document.execCommand('Stop');
            }
        }
    