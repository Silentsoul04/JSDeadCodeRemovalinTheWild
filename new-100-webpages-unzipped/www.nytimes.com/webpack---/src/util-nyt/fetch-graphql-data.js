/* global webpackPluginVhsVersion */

import fetchFactory from 'fetch-ponyfill';
import PromisePolyfill from 'promise-polyfill';
import idToUri from './id-to-uri';

const query = `
query VideoQuery($id: String!) {
  video(id: $id) {
    ...on Video {
      advertisingProperties {
        sensitivity
        sponsored
      }
      bylines {
        renderedRepresentation
      }
      contentSeries
      cues {
        name
        type
        timeIn
        timeOut
      }
      duration
      embedded
      headline {
        default
      }
      is360
      isLive
      liveUrls
      playlist {
        headline {
          default
        }
        promotionalHeadline
        url
        sourceId
        section {
          displayName
        }
        videos(first: 20) {
          edges @filterEmpty {
            node {
              advertisingProperties {
                sensitivity
                sponsored
              }
              id
              sourceId
              duration
              section {
                id
                name
              }
              headline {
                default
              }
              renditions {
                url
                type
              }
              url
              promotionalMedia {
                ... on Image {
                  crops(cropNames: [SMALL_SQUARE, MEDIUM_SQUARE, SIXTEEN_BY_NINE]) {
                    renditions {
                      name
                      width
                      height
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
      promotionalHeadline
      promotionalMedia {
        ... on Image {
          crops (cropNames: [SMALL_SQUARE, MEDIUM_SQUARE, SIXTEEN_BY_NINE, THREE_BY_TWO, TWO_BY_THREE, FLEXIBLE]) {
            name
            renditions {
              name
              width
              height
              url
            }
          }
        }
      }
      promotionalSummary
      related {
        ... on Article {
          promotionalHeadline
          url
          sourceId
        }
      }
      renditions {
        type
        width
        height
        url
        bitrate
      }
      section {
        name
      }
      shortUrl
      sourceId
      subsection {
        name
      }
      summary
      timesTags {
        __typename
        displayName
        isAdvertisingBrandSensitive
        vernacular
      }
      url
    }
  }
}`;

const fetch = fetchFactory({
        Promise: window.Promise || PromisePolyfill
    })
    .fetch;

function buildHeaders(env, token) {
    const headers = {
        'Content-Type': 'application/json'
    };
    if (
        env === 'production' ||
        env === 'staging' ||
        env === 'test' ||
        env === 'preview'
    ) {
        headers['NYT-App-Type'] = 'vhs';
        headers['NYT-App-Version'] = webpackPluginVhsVersion;
        headers['NYT-Token'] = token;
    }
    return headers;
}

const validateResponseStatus = response => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    }
    return Promise.reject(new Error(response));
};

const validateData = json => {
    if (json.data.video) {
        return Promise.resolve(json);
    }
    return Promise.reject(new Error(json));
};

//
// API
//

const fetchGraphQLData = (url, options) => {
    const headers = buildHeaders(options.env, options.token);
    const variables = {
        id: idToUri(options.id)
    };

    return fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                query,
                variables
            })
        })
        .then(validateResponseStatus)
        .then(res => res.json())
        .then(validateData)
        .then(json => json.data.video);
};

export default fetchGraphQLData;



// WEBPACK FOOTER //
// ./src/util-nyt/fetch-graphql-data.js