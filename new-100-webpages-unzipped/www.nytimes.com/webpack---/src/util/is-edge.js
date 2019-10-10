import getUserAgent from './get-user-agent';

const isEdge = (userAgent = getUserAgent()) => /edge\/(\d+)/i.test(userAgent);

export default isEdge;



// WEBPACK FOOTER //
// ./src/util/is-edge.js