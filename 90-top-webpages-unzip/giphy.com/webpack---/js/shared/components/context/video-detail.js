import createContext from 'immer-wieder'
import { shuffle, flatMap } from 'lodash'
import { getVideo, getVideos } from 'shared/api'
const cached = {}
const add = (state, video) => {
    if (!state.videosById[video.uid]) {
        state.videos.push(video)
        state.videosById[video.uid] = video
    }
}
const VideoDetailContext = createContext((setState, getState) => ({
    videoData: undefined,
    videos: [],
    videosById: {},
    modal: '',
    setModal: modal => setState({ modal }),
    setVideo: videoData => setState({ videoData }),
    addVideo: video => setState(state => add(state, video)),
    addVideos: videos => setState(state => videos.forEach(video => add(state, video))),
    fetchVideos: (tags = [], limit = 10) =>
        new Promise(resolve => {
            getState(async ({ videos: currentVideos = [], addVideos }) => {
                // tags for the request are formatted as a comma delimitted string tag,otherTag
                // it will also be used as the id for the cache
                const tagParam = tags.sort().join(',')

                if (!cached[tagParam]) {
                    cached[tagParam] = {}
                }
                const existingFetch = cached[tagParam]

                if (existingFetch.hasNoMore) {
                    resolve()
                } else if (existingFetch.isFetching) {
                    // wait for it
                    existingFetch.resolve.push(resolve)
                } else {
                    const { limit: lastLimit = 0 } = existingFetch

                    existingFetch.resolve = [resolve]

                    if (limit > lastLimit) {
                        existingFetch.isFetching = true
                        const { data: videos, pagination = {} } = await getVideos({
                            tags: tagParam,
                            next_cursor: currentVideos.length,
                            limit,
                        })
                        existingFetch.isFetching = false

                        const newVideos = shuffle(videos)
                        addVideos(newVideos)

                        // save the result
                        cached[tagParam] = {
                            limit,
                            videos: [...currentVideos, ...newVideos],
                            // unblock fetching if there are amore
                            hasNoMore: !pagination.next_cursor,
                        }
                    }
                    // resolve
                    existingFetch.resolve.forEach(r => r())
                    delete existingFetch.resolve
                }
            })
        }),
    // more like fetch and go
    fetchVideo: uid =>
        new Promise(resolve => {
            getState(async ({ videos, addVideo, setVideo }) => {
                let videoData = videos[uid]
                if (videoData) {
                    setVideo(videoData)
                } else {
                    try {
                        const { data: videoData } = await getVideo(uid)
                        addVideo(videoData)
                        // also set the current video
                        setVideo(videoData)
                    } catch (error) {
                        console.error(error)
                    }
                }
                resolve()
            })
        }),
}))

export const withVideoDetailContext = VideoDetailContext.hoc
/**
 * Populate the state with videos we've fetched
 *
 * @class HydratedProvider
 * @extends {VideoDetailContext.Provider}
 */
class HydratedProvider extends VideoDetailContext.Provider {
    constructor(props) {
        super(props)
        const videos = flatMap(Object.values(cached), ({ videos }) => videos)
        videos.forEach(video => add(this.state, video))
    }
}
export default { Consumer: VideoDetailContext.Consumer, Provider: HydratedProvider }
