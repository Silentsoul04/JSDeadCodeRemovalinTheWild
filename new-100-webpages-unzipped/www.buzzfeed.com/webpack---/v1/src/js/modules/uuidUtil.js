export default {
    parseUuidsList(uuidListStr) {
        if (uuidListStr === undefined || uuidListStr === null || uuidListStr == '') {
            return [];
        }
        const UUID_LENGTH = 36; /* 32 info characters and 4 dashes */
        const splitByComma = uuidListStr.length > 36 && uuidListStr.charAt(UUID_LENGTH) === ',';
        if (splitByComma) {
            return uuidListStr.split(',');
        }
        let result = [];
        for (let index = 0; index <= uuidListStr.length - UUID_LENGTH; index += UUID_LENGTH) {
            result.push(uuidListStr.substring(index, index + UUID_LENGTH));
        }
        return result;
    },

    isUuid(uuid) {
        const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        return !!uuid.match(regex);
    },
};



// WEBPACK FOOTER //
// ./v1/src/js/modules/uuidUtil.js