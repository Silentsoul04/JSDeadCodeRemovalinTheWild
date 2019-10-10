import {
    Fragment,
    PureComponent
} from 'react'
import Grid from '@giphy/react-giphy-grid'
import {
    Loader
} from 'shared/components/preloader-animation'
import {
    gridSpacing
} from 'shared/css/grid.css'
import {
    getArtistChannels,
    request
} from 'shared/api'
import getGifSkeleton from 'shared/components/gif-skeleton'

const DEFAULT_GUTTER = parseInt(gridSpacing)

export default class ArtistsGrid extends PureComponent {
    static defaultProps = {
        columns: 3,
        filter: '',
        gutter: DEFAULT_GUTTER,
    }
    state = {
        gifs: [],
        nextUrl: '',
        isFetching: false,
        isDone: false,
    }
    componentDidMount() {
        this.fetchArtists()
    }
    fetchArtists = async (url = '') => {
        const {
            filter
        } = this.props
        const {
            gifs,
            isFetching,
            isDone
        } = this.state
        if (isFetching || isDone) return
        this.setState({
            isFetching: true
        })

        const {
            results = [], next = ''
        } = url ? await request(url) : await getArtistChannels(filter)

        // filter out any channels that do not have a featured_gif set, as these will break
        const newGifs = results.map(({
            featured_gif = {},
            user = {}
        }) => {
            let gif = user.featured_gif || featured_gif
            // if there is no featured gif set or the gif is private,
            // fall back to an empty GIF. we need to make sure the
            // artist is not hidden from this page.
            if (!gif || gif.is_hidden || gif.is_removed) {
                gif = getGifSkeleton()
            }
            return { ...gif,
                url: user.profile_url,
                user
            }
        })

        this.setState({
            gifs: [...gifs, ...newGifs],
            nextUrl: next,
            isFetching: false,
            isDone: !next,
        })
    }
    fetchMoreArtists = () => {
        const {
            nextUrl
        } = this.state
        nextUrl && this.fetchArtists(nextUrl)
    }
    render() {
        const {
            columns,
            gutter,
            children
        } = this.props
        const {
            gifs,
            isFetching
        } = this.state
        return ( <
            Fragment > {
                gifs.length > 0 && ( <
                    Grid gifs = {
                        gifs
                    }
                    autoPlay = {
                        true
                    }
                    columns = {
                        columns
                    }
                    gutter = {
                        gutter
                    }
                    overlayElement = {
                        children
                    }
                    showTags = {
                        false
                    }
                    onLoadMore = {
                        this.fetchMoreArtists
                    }
                    />
                )
            } <
            Loader isFetching = {
                isFetching
            }
            /> <
            /Fragment>
        )
    }
}