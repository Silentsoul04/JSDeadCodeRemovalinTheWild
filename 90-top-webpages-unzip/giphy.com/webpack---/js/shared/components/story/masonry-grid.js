import React, { Children, PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getStateStyles, getItemStyles } from './masonry-grid-layout'

const Container = styled.div`
    margin-bottom: 30px;

    &:after {
        clear: both;
        content: '';
        display: block;
        width: 100%;
    }
`

const Item = styled.div`
    float: left;
    margin-bottom: ${props => props.spacing}px;
`

export default class MasonryStoriesGrid extends PureComponent {
    static propTypes = {
        width: PropTypes.number.isRequired,
        columns: PropTypes.number,
        noFeatured: PropTypes.bool,
        isFixedHeight: PropTypes.bool,
    }
    static defaultProps = {
        columns: 0,
        noFeatured: false,
        isFixedHeight: false,
    }
    state = {
        columns: 0,
        spacing: 6,
        itemWidth: 0,
        appWidth: 0,
    }
    constructor(props) {
        super(props)

        this.state = getStateStyles(props)
    }
    static getDerivedStateFromProps({ columns, width, children, isFixedHeight }, { columns: prevColumns, appWidth }) {
        if (columns !== prevColumns || width !== appWidth) {
            const totalItems = Children.toArray(children).length
            return getStateStyles({
                columns: totalItems === 1 ? 1 : columns,
                width,
                isFixedHeight,
            })
        }
        return null
    }
    render() {
        const { children, noFeatured } = this.props
        const { itemHeight, spacing } = this.state
        const Stories = Children.toArray(children)
        return (
            <Container>
                {Stories.map((child, index) => {
                    const styles = getItemStyles(this.state, index, noFeatured)
                    return (
                        <Item key={index} style={styles} spacing={spacing}>
                            {React.cloneElement(child, {
                                width: styles.width,
                                height: itemHeight,
                            })}
                        </Item>
                    )
                })}
            </Container>
        )
    }
}
