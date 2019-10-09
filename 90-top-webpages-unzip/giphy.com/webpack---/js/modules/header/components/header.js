import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Component, Fragment } from 'react'
import Menu from './menu'
import Login from './login'
import Logo from './logo'
import CreationButtons from './creation-buttons'
import SearchBar from 'modules/search-bar/components/search-bar'
import css from './header.css'
import userPropTypes from 'shared/prop-types/user'
import Message from 'shared/components/message/flash-message'
import TosMessage from 'shared/components/tos-message'
import GlobalMessageManager from './global-message-manager'
import withWindowScroll from 'shared/components/gif-grid/with-window-scroll'
import useWindowSize from 'shared/hooks/window-size'

const STICKY_NAV_TOGGLE_POSITION = 62

const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 1040px;
`

const menuItems = ['reactions', 'entertainment', 'sports', 'stickers', 'artists']

const SearchWithWindowHeight = ({ searchTerm }) => {
    const { innerHeight } = useWindowSize()
    return <SearchBar isDesktop appHeight={innerHeight} isFixed searchTerm={searchTerm} />
}

@withWindowScroll(20)
export default class Header extends Component {
    static propTypes = {
        showSearch: PropTypes.bool,
        showBrowse: PropTypes.bool,
        searchTerm: PropTypes.string,
        user: userPropTypes,
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        const shouldBeSticky = nextProps.scrollTop >= STICKY_NAV_TOGGLE_POSITION
        if (shouldBeSticky !== prevState.isSticky) {
            return { isSticky: shouldBeSticky }
        }
        return null
    }
    state = {
        isSticky: false,
    }
    render() {
        const { showSearch, showBrowse, searchTerm, user } = this.props
        const { isSticky } = this.state

        return (
            <Fragment>
                <GlobalMessageManager />
                <Message isDesktop />
                <TosMessage />
                <div className={showSearch ? css.navPlaceholderSearch : css.navPlaceholder} data-sticky={isSticky} />
                <div className={css.headerWrapper} data-sticky={showSearch && isSticky}>
                    <div id="header" className={css.container}>
                        <Container itemScope itemType="http://schema.org/Organization">
                            <Logo />
                            {showBrowse && <Menu items={menuItems} />}
                            {showBrowse && <CreationButtons />}
                            <Login user={user} />
                        </Container>
                    </div>

                    {showSearch && (
                        <div className={css.searchbarWrapper}>
                            <Container id="searchbar" className={`${css.searchbar}`}>
                                <SearchWithWindowHeight searchTerm={searchTerm} />
                            </Container>
                        </div>
                    )}
                </div>
            </Fragment>
        )
    }
}
