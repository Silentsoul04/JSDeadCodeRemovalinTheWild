import { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getUser } from 'shared/redux/reducers'
import * as selectors from '../../../shared/reducers'
import { Form } from 'shared/components/flags/form'
import flagGif from 'shared/redux/flag'
import userProps from 'shared/prop-types/user'
import Button from '../../../shared/buttons/state-button'

const Container = styled.div`
    margin-top: auto;
    width: 100%;
`

const Report = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;

    form {
        background: transparent;
        padding: 0;
    }
`

const Reported = styled.p`
    font-size: 20px;
    font-weight: bold;
`

const Link = Button.withComponent('a')

@connect(state => {
    const currentCard = selectors.getStoryCurrentCard(state)
    return {
        user: getUser(state),
        currentCard,
        currentGif: selectors.getGifById(state, currentCard.gifId),
    }
})
export default class StoryGifMenu extends PureComponent {
    static propTypes = {
        currentCard: PropTypes.object.isRequired,
        user: userProps,
    }
    state = {
        isReporting: false,
        isReportingInvalid: false,
        isReported: false,
    }
    onReport(form) {
        const { currentGif } = this.props
        const { user, id } = currentGif

        if (!form.checkValidity()) {
            this.setState({ isReportingInvalid: true })
            return
        }

        const data = new FormData(form)
        user && data.append('username', user.username)
        flagGif(id, user, data)
            .then(() => this.setState({ isReported: true }))
            .catch(() => this.setState({ isReportingInvalid: true }))
    }
    render() {
        const {
            currentGif: { url },
        } = this.props
        const { isReported, isReporting, isReportingInvalid } = this.state
        return isReporting ? (
            <Report>
                {isReported ? (
                    <Reported>Reported!</Reported>
                ) : (
                    <Form
                        hideCancel={true}
                        isActive={true}
                        isInvalid={isReportingInvalid}
                        onSubmit={form => this.onReport(form)}
                    />
                )}
            </Report>
        ) : (
            <Container>
                <Link primary={true} href={url} target="_blank">
                    View GIF
                </Link>
                <Button onClick={() => this.setState({ isReporting: true })}>Report GIF</Button>
            </Container>
        )
    }
}
