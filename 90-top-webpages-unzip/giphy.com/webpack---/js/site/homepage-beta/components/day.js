import { TitleLarge, SectionHeader, colors } from '@giphy/react-giphy-brand'
import { format } from 'date-fns'
import styled from 'styled-components'
import StoriesGrid from 'shared/components/story/grid-previews'
import { checkIfToday, checkIfYesterday } from 'shared/util/date'
import { bodyFont } from 'shared/css/fonts.css'
import { grid12 } from 'shared/css/grid.css'

const GRID_WIDTH = parseInt(grid12)

const Container = styled.div`
    padding-bottom: 20px;
`

const Title = styled(TitleLarge)`
    margin-bottom: 18px;
    padding: 0 5px;
    line-height: 36px;
    padding: 0;
`

const Subtitle = styled.span`
    font-family: 'nexaregular', ${bodyFont};
`

const StoryHeader = styled(SectionHeader)`
    color: ${colors.giphyLightGrey};
    margin-bottom: 6px;
    padding: 0;
`

const TrendingDay = ({ stories = [], date, onLoadMore, autoPlay }) => {
    const isToday = checkIfToday(date)
    const isYesterday = checkIfYesterday(date)
    const label = isToday ? 'Today' : isYesterday ? 'Yesterday' : format(date, 'dddd')
    const sublabel = !isYesterday && format(date, 'MMM D')
    return (
        <Container>
            <Title>
                {label} {sublabel && <Subtitle>{sublabel}</Subtitle>}
            </Title>
            <StoryHeader>{isToday ? 'Latest Stories' : 'All Stories'}</StoryHeader>
            <StoriesGrid
                stories={stories}
                columns={4}
                width={GRID_WIDTH}
                onLoadMore={onLoadMore}
                autoPlay={autoPlay}
                showEditMenu={true}
            />
        </Container>
    )
}

export default TrendingDay
