import {
    SectionHeader,
    colors
} from '@giphy/react-giphy-brand'
import {
    format
} from 'date-fns'
import styled from 'styled-components'
import StoriesGrid from 'shared/components/story/grid-previews'
import {
    checkIfToday,
    checkIfYesterday
} from 'shared/util/date'
import TrendingDayTitle from './title'
import {
    PureComponent
} from 'react'
import {
    withHeaderInfoContext
} from './context'
import {
    getScrollTop
} from 'shared/util/scrolling'
import TopStory from './top-story'

const Container = styled.div `
    padding-bottom: 20px;
`

const TitleContainer = styled.div `
    padding: 0 10px;
    margin-bottom: 15px;
`

const StoryHeader = styled(SectionHeader)
`
    color: ${colors.giphyLightGrey};
    margin-bottom: 6px;
    padding: 0 10px;
    text-transform: capitalize;
    font-size: 16px;
`

@withHeaderInfoContext()
class Measure extends PureComponent {
    componentDidMount() {
        const {
            top
        } = this.el.getBoundingClientRect()
        const {
            date,
            label,
            sublabel,
            hasStories,
            actions: {
                addHeaderInfo
            },
        } = this.props

        if (hasStories) {
            addHeaderInfo({
                date,
                label,
                sublabel,
                position: top + getScrollTop(),
            })
        }
    }

    render() {
        return <Container ref = {
            c => (this.el = c)
        } > {
            this.props.children
        } < /Container>
    }
}
const TrendingDay = ({
        stories = [],
        date,
        appWidth = 0,
        hideFeatured = false,
        onLoadMore,
        autoPlay,
        latestStory
    }) => {
        const isToday = checkIfToday(date)
        const isYesterday = checkIfYesterday(date)
        const label = isToday ? 'Today' : isYesterday ? 'Yesterday' : format(date, 'dddd')
        const sublabel = !isYesterday && !isToday && format(date, 'MMM D')
        const allStories = hideFeatured ? stories.slice(1) : stories
        return allStories.length < 1 ? null : ( <
            Measure { ...{
                    date,
                    label,
                    sublabel,
                    hasStories: stories.length > 0
                }
            } > {!hideFeatured && ( <
                    TitleContainer >
                    <
                    TrendingDayTitle label = {
                        label
                    }
                    sublabel = {
                        sublabel
                    }
                    /> <
                    /TitleContainer>
                )
            } <
            StoryHeader > {
                hideFeatured ? `${label}'s` : 'All'
            }
            Stories < /StoryHeader> {
                isToday && latestStory && < TopStory story = {
                    latestStory
                }
                width = {
                    appWidth
                }
                autoPlay = {
                    autoPlay
                }
                />} <
                StoriesGrid
                stories = {
                    allStories
                }
                width = {
                    appWidth
                }
                noFeatured = {
                    hideFeatured
                }
                isFixedHeight = {
                    true
                }
                onLoadMore = {
                    onLoadMore
                }
                autoPlay = {
                    autoPlay
                }
                /> <
                /Measure>
            )
        }

        export default TrendingDay