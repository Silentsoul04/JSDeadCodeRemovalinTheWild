const isWebglEnabled = () => {
    try {
        const canvas = document.createElement('canvas');
        return Boolean(
            window.WebGLRenderingContext &&
            (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
        );
    } catch (error) {
        return false;
    }
};

export default isWebglEnabled;



// WEBPACK FOOTER //
// ./src/util/is-webgl-enabled.js