import PropTypes from 'prop-types'
import produce from 'immer'
import { Component } from 'react'
import { connect } from 'react-redux'
import { find } from 'lodash'
import { getContext } from 'recompose'
import styled, { keyframes, css } from 'styled-components'
// import GIPHY from './giphy'
import TrendingDayTitle from '../trending-stories/day/title'
import { withHeaderInfoContext } from '../trending-stories/day/context'
import withWindowScroll, { DIRECTION } from 'shared/components/gif-grid/with-window-scroll'
import { getAppSize } from '../../shared/reducers/index'

const containerHeight = 29
const animationTime = 250
const animateTo = 22

const Container = styled.div`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    height: ${containerHeight}px;
    width: 100%;
    position: relative;
`

const upAndOut = keyframes`
    0% { 
        transform: translateY(0); 
        opacity: 1;
    }
    100% { 
        transform: translateY(-${animateTo}px); 
        opacity: 0;
    }
`

const upAndIn = keyframes`
    0% { 
        transform: translateY(${animateTo}px); 
        opacity: 0;
    }
    100% { transform: translateY(0); }
`

const downAndOut = keyframes`
    0% { 
        transform: translateY(0); 
        opacity: 1;
    }
    100% { 
        transform: translateY(${animateTo}px); 
        opacity: 0;
    }
`

const downAndIn = keyframes`
    0% { 
        transform: translateY(-${animateTo}px); 
        opacity: 0;
    }
    100% { transform: translateY(0); }
`

const animation = css`
    animation: ${({ active, isUp }) => (active ? (isUp ? upAndIn : downAndIn) : isUp ? upAndOut : downAndOut)} ease-out
        ${animationTime}ms forwards;
`
const TitleContainer = styled.div`
    text-align: left;
    flex-shrink: 0;
    width: 100%;
    position: absolute;
    ${props => !props.noAnimate && animation};
`

const getLabel = (label, sublabel, appWidth) => {
    if (sublabel && appWidth < 430) {
        const isVerySmall = appWidth < 330
        switch (label.toLowerCase()) {
            case 'tuesday':
                return isVerySmall ? 'Tue' : 'Tues'
            case 'thursday':
                return isVerySmall ? 'Thu' : 'Thurs'
        }
        label = label.slice(0, 3)
    }
    return label
}

const Title = ({ label, sublabel, noAnimate, active, isUp }) => (
    <TitleContainer {...{ noAnimate, isUp, active }}>
        <TrendingDayTitle label={label} sublabel={sublabel} />
    </TitleContainer>
)

@getContext({ isOffScreen: PropTypes.bool })
@connect(state => ({ appWidth: getAppSize(state).width }))
@withHeaderInfoContext()
@withWindowScroll(animationTime)
class DynamicHeader extends Component {
    state = {
        currentHeaderInfo: null,
    }
    shouldComponentUpdate(nextProps, nextState) {
        const { headerInfo, appWidth } = this.props
        if (nextProps.headerInfo !== headerInfo) {
            return true
        }
        if (nextProps.appWidth !== appWidth) {
            return true
        }
        const { currentHeaderInfo } = this.state
        if (nextState.currentHeaderInfo !== currentHeaderInfo) {
            return true
        }

        return false
    }

    static getDerivedStateFromProps({ headerInfo = [], scrollTop, appWidth }, prevState) {
        if (headerInfo.length > 0 && scrollTop !== prevState.scrollTop) {
            const scrollWithHeader = scrollTop
            let newHeaderInfo = find(headerInfo, ({ position }) => {
                return scrollWithHeader > position
            })
            if (newHeaderInfo) {
                newHeaderInfo = produce(newHeaderInfo, draft => {
                    draft.label = getLabel(draft.label, draft.sublabel, appWidth)
                })
            }
            const prevLabel = prevState.currentHeaderInfo && prevState.currentHeaderInfo.label
            if (newHeaderInfo && newHeaderInfo.label !== prevLabel) {
                return {
                    currentHeaderInfo: newHeaderInfo,
                    prevHeaderInfo: prevState.currentHeaderInfo,
                }
            }
        }
        return null
    }

    render() {
        const { currentHeaderInfo, prevHeaderInfo } = this.state
        const { scrollDirection } = this.props
        return (
            <Container>
                <Title
                    {...currentHeaderInfo}
                    active
                    noAnimate={!prevHeaderInfo}
                    key={currentHeaderInfo.label}
                    isUp={scrollDirection === DIRECTION.DOWN}
                />
                {!!prevHeaderInfo && (
                    <Title {...prevHeaderInfo} key={prevHeaderInfo.label} isUp={scrollDirection === DIRECTION.DOWN} />
                )}
            </Container>
        )
    }
}

export default DynamicHeader
