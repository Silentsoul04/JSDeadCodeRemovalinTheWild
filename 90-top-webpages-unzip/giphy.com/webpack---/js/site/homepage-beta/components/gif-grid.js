import Grid from 'shared/components/search/grid'
import Header from 'shared/components/gif-grid/header'
import { processTrendingAPIGifs } from 'shared/util/gif-process'
import { WEB_API_KEY } from 'shared/api'

const TrendingGifGrid = () => (
    <div>
        <Header title="Trending GIFs" />
        <Grid groupId="trending" processor={processTrendingAPIGifs} category={`home`} apiKey={WEB_API_KEY} />
    </div>
)

export default TrendingGifGrid
