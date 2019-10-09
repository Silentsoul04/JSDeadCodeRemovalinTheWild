import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import * as selectors from 'shared/redux/reducers'
import styled, { css } from 'styled-components'
import { omit } from 'lodash'

const Container = styled.div`
    ${props =>
        props.style.translateLeft &&
        css`
            width: 1040px;
            position: absolute;
            left: calc(50% - 686px);
            top: 0;
        `};
`

@connect(state => ({
    siteContainerStyle: selectors.getSiteContainerStyle(state),
}))
export default class SiteContainer extends PureComponent {
    render() {
        const { children, siteContainerStyle } = this.props
        const childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, omit(this.props, ['children', 'siteContainerStyle'])),
        )
        return <Container style={siteContainerStyle}>{childrenWithProps}</Container>
    }
}
