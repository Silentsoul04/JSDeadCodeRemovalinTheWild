function nextTick() {
    return new Promise(resolve => {
        setTimeout(resolve, 0);
    });
}

export default nextTick;



// WEBPACK FOOTER //
// ./src/util/next-tick.js