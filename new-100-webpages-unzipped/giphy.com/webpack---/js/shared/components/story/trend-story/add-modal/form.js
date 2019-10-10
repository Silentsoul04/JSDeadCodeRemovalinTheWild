import styled from 'styled-components'
import {
    Fragment,
    PureComponent
} from 'react'
import {
    connect
} from 'react-redux'
import PropTypes from 'prop-types'
import {
    Button,
    colors
} from '@giphy/react-giphy-brand'
import {
    getStoryBySlug
} from 'shared/redux/reducers'
import {
    fetchStoryBySlug
} from 'shared/redux/fetch-stories'
import {
    trendStoryById
} from 'shared/redux/save-trending-story'
import storyProps from 'shared/prop-types/story'
import Story from './story'

const SubmitButton = styled(Button)
`
    background: ${colors.primaryCTA};
    display: block;
    font-size: 16px;
    margin-bottom: 6px;
    width: 100%;
`

const CancelButton = styled(SubmitButton)
`
    background: ${colors.giphyDarkestGrey};
    color: ${colors.giphyLightGrey};
    font-size: 14px;
    margin-bottom: 0px;
`

@connect(
    (state, {
        slug
    }) => ({
        story: getStoryBySlug(state, slug),
    }), {
        fetchStoryBySlug,
        trendStoryById
    },
)
export default class HomebaseAddStoryForm extends PureComponent {
    static propTypes = {
        slug: PropTypes.string.isRequired,
        story: storyProps,
        fetchStoryBySlug: PropTypes.func.isRequired,
        trendStoryById: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired,
        onSuccess: PropTypes.func.isRequired,
    }
    state = {
        date: null,
        isSaving: false,
    }
    componentDidMount() {
        const {
            slug,
            story,
            fetchStoryBySlug
        } = this.props
        if (!story) {
            fetchStoryBySlug(slug)
        }
    }
    onDateChange = date => {
        this.setState({
            date
        })
    }
    onSubmit = async () => {
        const {
            story,
            trendStoryById,
            onSuccess
        } = this.props
        const {
            date
        } = this.state

        if (story && date) {
            const {
                story_id
            } = story
            this.setState({
                isSaving: true
            })
            try {
                await trendStoryById(story_id, new Date(date).toISOString())
                onSuccess()
            } catch (e) {
                this.setState({
                    isSaving: false
                })
            }
        }
    }
    render() {
        const {
            story,
            onCancel
        } = this.props
        const {
            date,
            isSaving
        } = this.state
        return ( <
            Fragment >
            <
            Story story = {
                story
            }
            isSaving = {
                isSaving
            }
            onDateChange = {
                this.onDateChange
            }
            /> <
            SubmitButton disabled = {
                isSaving || !date || !story
            }
            onClick = {
                this.onSubmit
            } >
            Add to Scheduled Trending Stories <
            /SubmitButton> <
            CancelButton disabled = {
                isSaving
            }
            onClick = {
                onCancel
            } >
            Cancel <
            /CancelButton> <
            /Fragment>
        )
    }
}