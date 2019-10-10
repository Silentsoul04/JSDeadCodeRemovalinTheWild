import getUserAgent from './get-user-agent';

const getDeviceType = (userAgent = getUserAgent()) => {
    let device = null;

    const options = [
        ['android_chrome', /(android.*chrome)/i],
        ['android_firefox', /(android.*firefox)/i],
        ['android_legacy', /(android )(2|3)/i],
        ['android_ics', /(android 4.0)/i],
        ['android_jellybean', /(android 4.)(1|2|3)/i],
        ['android_kitkat', /(android 4.4)/i],
        ['android_lollipop', /(android 5)/i],
        ['android_marshmallow', /(android 6)/i],
        ['ie_mobile', /(windows phone).*(iemobile)/i],
        ['ipad', /\(iPad;/i],
        ['kindle', /kindle/i],
        ['iphone', /\(iPhone;/i],
        ['other mobile', /(touchpad|blackberry|opera mobi)i/]
    ];

    for (let i = 0; i < options.length; i += 1) {
        const pattern = options[i][1];
        const match = userAgent.match(pattern);

        if (match !== null) {
            device = options[i][0];
        }
    }

    return device || 'desktop';
};

export default getDeviceType;



// WEBPACK FOOTER //
// ./src/util/get-device-type.js