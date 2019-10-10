import fetchFactory from 'fetch-ponyfill';

const fetch = fetchFactory().fetch;

const shortUrl = url => {
    const encodedUrl = window.encodeURIComponent(url);
    const api = 'https://content.api.nytimes.com/svc/bitly/shorten.json?url=';

    // Expected data scheme:
    // data :{
    //   status: "OK",
    //   code: 200,
    //   reason: "",
    //   payload: {
    //     short_url: "http://nyti.ms/1XZBThZ"
    //   }
    // }

    return fetch(api + encodedUrl)
        .then(response => response.json())
        .then(data => {
            if (data && data.payload && data.payload.short_url) {
                return data.payload.short_url;
            } else if (data && data.reason) {
                throw new Error(data.reason);
            }

            throw new Error('Fail to shorten URL');
        });
};

export default shortUrl;



// WEBPACK FOOTER //
// ./src/util-nyt/short-url.js