import { Component } from 'react'
import css from './header.css'
import styled from 'styled-components'
import { TitleSmall } from '@giphy/react-giphy-brand'
import withLocationState from 'shared/components/with-location-state'

const Section = styled(TitleSmall)`
    font-family: 'nexabook';
    font-size: 38px;
    line-height: 36px;
    color: white;
    margin-left: 6px;
    margin-top: 2px;
`
const Container = styled.div`
    display: flex;
    align-items: center;
`
const ContainerH4 = Container.withComponent('h4')

@withLocationState(['headerSubtitle'])
class Logo extends Component {
    state = {
        isAnimating: false,
    }
    animationInterval = null
    componentDidMount() {
        this.animates = false
        this.animationInterval = setInterval(() => {
            this.animates = !this.animates
            this.setState({ isAnimating: !this.state.isAnimating })
        }, 10000)
    }
    componentWillUnmount() {
        clearInterval(this.animationInterval)
    }
    render() {
        const { headerSubtitle, className = '' } = this.props
        return (
            <a itemProp="url" href="/" className={`${css.logoContainer} ${className}`}>
                <WrappedTitle>
                    <span className={css.logo}>
                        <svg
                            className={css.svg}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 164 35"
                            itemProp="logo"
                        >
                            <g fillRule="evenodd" clipRule="evenodd">
                                <path className={css.green} d="M0 3h4v29H0z" />
                                <path className={css.purple} d="M24 11h4v21h-4z" />
                                <path className={css.blue} d="M0 31h28v4H0z" />
                                <path className={css.yellow} d="M0 0h16v4H0z" />
                                <path className={css.red} d="M24 8V4h-4V0h-4v12h12V8" />
                                <path className={css.shadow} d="M24 16v-4h4M16 0v4h-4" />
                            </g>
                            <g className={css.logoText}>
                                <path d="M59.1 12c-2-1.9-4.4-2.4-6.2-2.4-4.4 0-7.3 2.6-7.3 8 0 3.5 1.8 7.8 7.3 7.8 1.4 0 3.7-.3 5.2-1.4v-3.5h-6.9v-6h13.3v12.1c-1.7 3.5-6.4 5.3-11.7 5.3-10.7 0-14.8-7.2-14.8-14.3 0-7.1 4.7-14.4 14.9-14.4 3.8 0 7.1.8 10.7 4.4L59.1 12zM68.2 31.2V4h7.6v27.2h-7.6zM88.3 23.8v7.3h-7.7V4h13.2c7.3 0 10.9 4.6 10.9 9.9 0 5.6-3.6 9.9-10.9 9.9h-5.5zm0-6.5h5.5c2.1 0 3.2-1.6 3.2-3.3 0-1.8-1.1-3.4-3.2-3.4h-5.5v6.7zM125 31.2V20.9h-9.8v10.3h-7.7V4h7.7v10.3h9.8V4h7.6v27.2H125zM149.2 13.3l5.9-9.3h8.7v.3l-10.8 16v10.8h-7.7V20.3L135 4.3V4h8.7l5.5 9.3z" />
                            </g>
                        </svg>
                        <span className={this.animates ? css.animationOn : css.animationOff} />
                    </span>
                    {headerSubtitle && <Section>{headerSubtitle}</Section>}
                </WrappedTitle>
            </a>
        )
    }
}

const WrappedTitle = props => (location.pathname === '/' ? <Container {...props} /> : <ContainerH4 {...props} />)
export default Logo
