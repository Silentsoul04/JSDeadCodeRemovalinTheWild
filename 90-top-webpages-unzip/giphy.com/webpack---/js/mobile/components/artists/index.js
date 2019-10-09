import styled from 'styled-components'
import { connect } from 'react-redux'
import { margin } from '../../shared/constants.css'
import Grid from 'shared/components/artists/grid'
import Filters from 'shared/components/artists/filters'
import Description from 'shared/components/artists/description'
import Artist from './attribution'
import { WhenInView } from 'shared/util/in-view'

const GUTTER = parseInt(margin)
const BANNER_RATIO = 0.15

const Container = styled.div`
    padding: 6px 0 20px;
    position: relative;
    text-align: left;
`

const Banner = styled.div`
    background: no-repeat url('/static/img/artistdirectory_750.gif') center top;
    background-size: contain;
    margin-bottom: 12px;
    width: 100%;
`

const FilterWrapper = styled.div`
    margin-bottom: 15px;
`

const UserElement = props => <Artist user={props.gif.user} />

const ArtistsDirectory = ({ appWidth = 0, filter = '' }) => {
    const bannerHeight = Math.round(appWidth * BANNER_RATIO)
    return (
        <Container>
            <WhenInView height={bannerHeight}>
                <Banner style={{ height: bannerHeight }} />
            </WhenInView>
            {!filter && <Description padded />}
            <FilterWrapper>
                <Filters filter={filter} />
            </FilterWrapper>
            <Grid filter={filter} columns={2} gutter={GUTTER}>
                <UserElement />
            </Grid>
        </Container>
    )
}

export default connect(state => ({
    appWidth: state.appSize.width,
}))(ArtistsDirectory)
