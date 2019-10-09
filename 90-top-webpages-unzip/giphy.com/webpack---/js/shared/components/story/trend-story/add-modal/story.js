import { PureComponent, Fragment } from 'react'
import { StoryPreview, DatePicker } from '@giphy/react-giphy-brand'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import Loader from 'shared/components/loaders/dots'
import storyProps from 'shared/prop-types/story'

const fadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`

const Container = styled.div`
    box-sizing: content-box;
    min-height: 280px;
    padding: 10px 0;
    position: relative;
`

const Wrapper = styled.div`
    animation: ${fadeIn} 0.3s ease-out;
    display: flex;
    opacity: ${props => (props.saving ? 0.15 : 1)};
    pointer-events: ${props => (props.saving ? 'none' : 'auto')};
    width: 100%;
`

const StoryWrapper = styled.div`
    pointer-events: none;
`

const DateWrapper = styled.div`
    flex-grow: 0;
    flex-shrink: 0;
    margin-left: 30px;
    width: 300px;

    input {
        padding: 0px;
        margin: 0px;
    }
`
export default class HomebaseAddModalStory extends PureComponent {
    static propTypes = {
        story: storyProps,
        isSaving: PropTypes.bool,
        onDateChange: PropTypes.func.isRequired,
    }
    static defaultProps = {
        story: null,
        isSaving: false,
    }
    now = new Date()
    render() {
        const { story, isSaving, onDateChange } = this.props
        return (
            <Container>
                {story ? (
                    <Fragment>
                        <Wrapper saving={isSaving}>
                            <StoryWrapper>
                                <StoryPreview story={story} width={190} height={260} />
                            </StoryWrapper>
                            <DateWrapper>
                                <DatePicker
                                    color={story.color}
                                    altColor={story.secondary_color}
                                    hasTimeSelect={true}
                                    allowMultiple={false}
                                    minDate={new Date(story.publish_datetime)}
                                    onUpdate={onDateChange}
                                />
                            </DateWrapper>
                        </Wrapper>
                        {isSaving && <Loader isAbsolute={true} />}
                    </Fragment>
                ) : (
                    <Loader isAbsolute={true} />
                )}
            </Container>
        )
    }
}
