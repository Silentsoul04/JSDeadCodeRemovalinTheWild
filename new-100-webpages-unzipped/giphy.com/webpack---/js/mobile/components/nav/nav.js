import {
    withRouter
} from 'react-router'
import PropTypes from 'prop-types'
import styled, {
    css
} from 'styled-components'
import MenuIcon from './menu-icon'
import CreateIcon from './create-icon'
import UserIcon from './user-icon'
import routes from 'shared/routes'
import SearchIcon from './search-icon'
import resizeAvatar from 'shared/util/resize-avatar'

const NavContainer = styled.div `
    margin-left: auto;
    flex-shrink: 0;
    display: flex;
    align-content: center;
`

const Button = styled.a `
    display: inline-flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    display: inline-flex;
    vertical-align: top;
    box-sizing: border-box;
    width: 38px;
    height: 40px;
    margin-left: 8px;
`

const UploadButton = styled(Button)
``

const UserButton = styled(Button)
`
    overflow: hidden;
    height: 40px;
`

const Avatar = styled.div `
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    transition: transform 0.3s ease-out;
    background-image: url(${props => props.avatarURL});
    ${props =>
        props.isActive &&
        css`
            transform: scale(1.3);
        `};
`

const CategoryButton = styled(Button)
`
    margin-right: 6px;
    vertical-align: top;
    box-sizing: border-box;
    height: 40px;
`

const Nav = ({
    match: {
        path
    },
    userClick,
    navClick,
    user: {
        loggedIn,
        avatarURL: existingAvatarURL
    },
    categoryMenuVisible,
    userMenuVisible,
    setIsSearchVisible,
    isSearchVisible,
}) => {
    const showSearchButton = path === routes.GIF_DETAIL.path
    const avatarURL = resizeAvatar(existingAvatarURL, 40)
    return ( <
        NavContainer > {
            showSearchButton && ( <
                SearchIcon isSearchVisible = {
                    isSearchVisible
                }
                onClick = {
                    () => {
                        navClick(false)
                        userClick(true, false)
                        if (categoryMenuVisible || userMenuVisible) {
                            // just give it a 100ms to remove other menu
                            setTimeout(() => setIsSearchVisible(!isSearchVisible), 100)
                        } else {
                            setIsSearchVisible(!isSearchVisible)
                        }
                    }
                }
                />
            )
        } <
        UploadButton href = "/create/gifmaker" >
        <
        CreateIcon / >
        <
        /UploadButton> <
        UserButton onClick = {
            () => {
                setIsSearchVisible(false)
                userClick(loggedIn, !userMenuVisible)
            }
        } >
        {
            loggedIn ? < Avatar avatarURL = {
                avatarURL
            }
            isActive = {
                userMenuVisible
            }
            /> : <UserIcon / >
        } <
        /UserButton> <
        CategoryButton onClick = {
            () => {
                setIsSearchVisible(false)
                navClick(!categoryMenuVisible)
            }
        } >
        <
        MenuIcon isActive = {
            categoryMenuVisible
        }
        /> <
        /CategoryButton> <
        /NavContainer>
    )
}

const {
    object,
    func,
    bool
} = PropTypes
Nav.propTypes = {
    userClick: func.isRequired,
    navClick: func.isRequired,
    user: object.isRequired,
    categoryMenuVisible: bool.isRequired,
    userMenuVisible: bool.isRequired,
}
export default withRouter(Nav)