import { search, channelSearch, channelSocialSearch } from 'shared/api'
import { take } from 'lodash'

const searchResultsCache = { '': [] }
const channelSearchResultsCache = { '': [] }

function getChannelName(searchTerm: string) {
    return searchTerm.split(' ')[0].substring(1)
}

const getDropDownItems = (
    searchTerm: string,
    searchType: string,
    maxChannels: number,
    maxItems: number,
    maxSocialChannels: number
) => {
    // check the cache if the cache isnt avail make the request
    if (searchType === 'regularSearch') {
        if (searchResultsCache[searchTerm]) {
            return searchResultsCache[searchTerm]
        } else {
            // request results
            return Promise.all([search(searchTerm), channelSearch(searchTerm)]).then(([tags, channels]) => {
                // take MAX_NUMBER_OF_CHANNELS and map them to the dropdown format
                const channelResults = take(channels, maxChannels).map(({ name, slug, icon: img, id }) => ({
                    name,
                    img,
                    slug,
                    link: `/channels/id/${id}`,
                    type: 'channels',
                }))

                // based on channelResults, choose a number of tags, and map them to dropdown format
                const tagResults = take(tags, maxItems - channelResults.length).map(({ name, name_encoded }) => ({
                    name: name.toLowerCase(),
                    link: `/search/${name_encoded}`,
                    type: 'tags',
                }))

                // store the result so we can display immediately next time
                searchResultsCache[searchTerm] = [...tagResults, ...channelResults]
                return [...tagResults, ...channelResults]
            })
        }
    } else if (searchType === 'socialSearch') {
        if (channelSearchResultsCache[searchTerm]) {
            return channelSearchResultsCache[searchTerm]
        } else {
            // request results
            return Promise.resolve(channelSocialSearch(getChannelName(searchTerm))).then(channels => {
                // take MAX_NUMBER_OF_CHANNELS and map them to the dropdown format
                const channelResults = take(channels, maxSocialChannels).map(({ name, slug, icon: img, id }) => ({
                    name,
                    slug,
                    img,
                    link: `/channels/id/${id}`,
                    type: 'channels',
                }))

                channelSearchResultsCache[searchTerm] = [...channelResults]
                return channelResults
            })
        }
    }
}

export default getDropDownItems
