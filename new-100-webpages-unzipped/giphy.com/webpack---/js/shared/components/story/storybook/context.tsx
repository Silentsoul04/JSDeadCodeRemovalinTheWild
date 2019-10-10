import React, { createContext, PureComponent, Props } from 'react'
import { connect } from 'react-redux'
import defaultStory from './default-story'
import { saveStory } from 'shared/api'
import * as selectors from 'shared/redux/reducers'
import { fetchStoryById } from '../../../redux/fetch-stories'
import { updateStoryById } from 'shared/redux/stories'
import styled from 'styled-components'
import ModalMessage from 'shared/components/message/modal-message'
import { format, isFuture } from 'date-fns'
import { IStory } from 'shared/types/story'
import { LoggedInUser } from 'shared/types/user'

const StyledDate = styled.span`
    font-weight: bold;
`

const PromptMessage = date => {
    const styledDate = <StyledDate>{date}</StyledDate>
    return {
        title: `Are you sure you want to make this story private?`,
        cancelLabel: `Cancel`,
        confirmLabel: `Make Private`,
        description: (
            <span>
                {`This story is scheduled to be published on `}
                {styledDate}
                {` and will not be visible to anyone but you until then. If set to private, it will not be visible even after the scheduled publish date.`}
            </span>
        ),
    }
}

export type StorybookContextProps = {
    hasEdits: boolean
    warningCount: number
    isModal: boolean
    loggedInUser: LoggedInUser
    onPrivacyClick: (story: Partial<IStory>) => void
    addWarning: () => void
    removeWarning: () => void
    onFormValidation: (isTooLong: boolean) => void
    updateStoryById: (id: string, data: object) => void
    fetchStoryById: (id: string) => Promise<any>
    setHasEdits: (hasEdits: boolean) => void
    color: string
    secondaryColor: string
    setColors: (colors: { color: string; secondaryColor: string }) => void
} & Props<void>

type StorybookContextState = {
    warningCount: number
    isValid: boolean
    user?: LoggedInUser
    hasEdits: boolean
    isModal: boolean
    showModal: boolean
    color: string
    secondaryColor: string
    selectedStory: IStory // for privacy
}
export const StorybookContext = createContext<StorybookContextProps>({} as StorybookContextProps)

export function withStorybookContext(Component) {
    return function WrapperComponent(props) {
        return <StorybookContext.Consumer>{context => <Component {...props} {...context} />}</StorybookContext.Consumer>
    }
}

class StoryBookContextProvider extends PureComponent<StorybookContextProps, StorybookContextState> {
    state = {
        warningCount: 0,
        isValid: false,
        user: undefined,
        hasEdits: false,
        isModal: false,
        showModal: false,
        selectedStory: defaultStory,
        color: defaultStory.color,
        secondaryColor: defaultStory.secondary_color,
    }

    componentDidMount() {
        const { isModal } = this.props

        this.setState({
            isModal,
        })
    }

    setHasEdits = hasEdits => {
        this.setState({ hasEdits })
    }

    setColors = ({ color, secondaryColor }) => {
        this.setState({
            secondaryColor,
            color,
        })
    }

    addWarning = () => {
        const { warningCount } = this.state
        this.setState({
            warningCount: warningCount + 1,
        })
    }

    removeWarning = () => {
        const { warningCount } = this.state
        this.setState({
            warningCount: Math.max(0, warningCount - 1),
        })
    }

    onFormValidation = isValid => {
        this.setState({
            isValid,
        })
    }

    onPrivacyClick = story => {
        const isScheduledForFuture = isFuture(new Date(story.publish_datetime))
        const newState = {
            ...this.state,
            showModal: !story.is_private && isScheduledForFuture,
            selectedStory: story,
        }
        this.setState(newState, () => {
            if (!this.state.showModal) {
                // if going from private to , skip rendering the modal and just save
                this.onModalConfirm()
            }
        })
    }

    savePrivacy = async storyData => {
        const {
            loggedInUser: { userToken },
            fetchStoryById,
            updateStoryById,
        } = this.props

        // formatting the story data for the request
        const { data: fullStoryData } = await fetchStoryById(storyData.story_id)
        try {
            const formatted = { ...fullStoryData, is_private: storyData.is_private }
            await saveStory(formatted, userToken)
            updateStoryById(storyData.story_id, formatted)
            this.onModalClose()
            ;(global as any).showSuccess(
                formatted.is_private ? 'Your story is now private!' : 'Your story has been published!'
            )
        } catch (error) {
            ;(global as any).showError('There was an issue saving your story')
        }
    }

    onModalClose = () => {
        this.setState({
            showModal: false,
            selectedStory: defaultStory,
        })
    }

    onModalConfirm = async () => {
        const { selectedStory } = this.state
        this.savePrivacy({ ...selectedStory, is_private: !selectedStory.is_private })
    }

    renderModal = () => {
        return (
            <ModalMessage
                onCancel={this.onModalClose}
                onConfirm={this.onModalConfirm}
                {...PromptMessage(format(this.state.selectedStory.publish_datetime, 'MMMM Do, YYYY'))}
            />
        )
    }

    render() {
        const { selectedStory, warningCount, isModal, hasEdits, showModal, color, secondaryColor } = this.state
        const { children, loggedInUser, updateStoryById, fetchStoryById } = this.props
        return (
            <StorybookContext.Provider
                value={{
                    color,
                    secondaryColor,
                    hasEdits,
                    warningCount,
                    isModal,
                    loggedInUser,
                    setColors: this.setColors,
                    setHasEdits: this.setHasEdits,
                    onPrivacyClick: this.onPrivacyClick,
                    addWarning: this.addWarning,
                    removeWarning: this.removeWarning,
                    onFormValidation: this.onFormValidation,
                    updateStoryById,
                    fetchStoryById,
                }}
            >
                {children}
                {showModal && !selectedStory.is_private && this.renderModal()}
            </StorybookContext.Provider>
        )
    }
}

export default connect(
    state => ({ loggedInUser: selectors.getUser(state) }),
    { updateStoryById, fetchStoryById }
)(StoryBookContextProvider)
