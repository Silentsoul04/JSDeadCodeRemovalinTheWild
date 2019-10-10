import React, { PureComponent } from 'react'
import Attribution from '../attribution/attribution'
import styled from 'styled-components'
import Menu from './menu'

const Container = styled.div`
    margin-left: 8px;
    text-align: left;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    display: flex;
`
type Props = {
    gif: any
    nextGif: any
    swipeProgress: number
}
class Primary extends PureComponent<Props> {
    render() {
        const {
            gif,
            gif: { user },
            nextGif,
            swipeProgress,
        } = this.props
        return (
            <Container>
                <Attribution {...{ gif, nextGif, user, swipeProgress, nextUser: nextGif ? nextGif.user : null }} />
                <Menu />
            </Container>
        )
    }
}

export default Primary
