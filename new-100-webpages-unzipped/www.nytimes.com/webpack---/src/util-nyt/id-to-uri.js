import uuid from 'uuid/v5';

const dnsUUID = '36dd619a-56dc-595b-9e09-37f4152c7b5d'; // uuid -v5 ns:DNS scoop.nyt.net
const videoUUID = uuid('video', dnsUUID);

const idToUri = id => {
    if (typeof id === 'number' || id.match(/^[0-9]+$/)) {
        // a scoop ID was passed in
        return `nyt://video/${uuid(`${id}`, videoUUID)}`;
    }
    return id; // already a URI, full URL, or path
};

export default idToUri;



// WEBPACK FOOTER //
// ./src/util-nyt/id-to-uri.js