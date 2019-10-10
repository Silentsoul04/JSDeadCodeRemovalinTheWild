const getStackTrace = error => (error && error.stack) || '';

export default getStackTrace;



// WEBPACK FOOTER //
// ./src/util/get-stack-trace.js