import Truncate from 'react-truncate'
import PropTypes from 'prop-types'
import {
    colors
} from '@giphy/react-giphy-brand'
import {
    PureComponent
} from 'react'
import styled, {
    css
} from 'styled-components'

const Container = styled.div `
    text-align: left;

    span {
        ${props => props.copyCSS};
    }
`

const SeeMore = styled.div `
    ${props =>
        !props.show &&
        css`
            display: none;
        `};
    font-weight: bold;
    position: relative;
    font-size: 14px;
    margin-top: 8px;
    color: ${colors.giphyLightestGrey};
    cursor: pointer;
    ${props => props.seeMoreCSS};
`

const Arrow = styled.div `
    display: inline-block;
    font-size: 12px;
    height: 11px;
    padding-bottom: 5px;
    position: absolute;
    top: 2px;
    margin-left: 4px;
    ${props =>
        props.isSeeingMore &&
        css`
            transform: scale(1, -1);
            top: 4px;
        `};
    transition: transform 300ms ease-out;
`

class TextWithSeeMore extends PureComponent {
    static propTypes = {
        lines: PropTypes.number,
        copy: PropTypes.string.isRequired,
        copyCSS: PropTypes.array,
        seeMoreCSS: PropTypes.array,
    }
    static defaultProps = {
        lines: 3,
    }
    state = {
        isSeeingMore: false,
        hasTruncated: false,
    }
    onTruncate = hasTruncated => this.setState({
        hasTruncated
    })
    seeMore = () => {
        const {
            isSeeingMore
        } = this.state
        this.setState({
            isSeeingMore: !isSeeingMore
        })
    }
    render() {
        const {
            isSeeingMore,
            hasTruncated
        } = this.state
        const {
            lines,
            copy,
            className,
            copyCSS,
            seeMoreCSS
        } = this.props
        return ( <
            Container className = {
                className
            }
            copyCSS = {
                copyCSS
            } >
            <
            Truncate lines = {!isSeeingMore && lines
            }
            onTruncate = {
                this.onTruncate
            } > {
                copy
            } <
            /Truncate> <
            SeeMore onClick = {
                this.seeMore
            }
            show = {
                isSeeingMore || hasTruncated
            }
            seeMoreCSS = {
                seeMoreCSS
            } >
            See {
                isSeeingMore ? 'Less' : 'More'
            } {
                ' '
            } <
            Arrow className = "ss-icon ss-navigatedown"
            isSeeingMore = {
                isSeeingMore
            }
            /> <
            /SeeMore> <
            /Container>
        )
    }
}

export default TextWithSeeMore