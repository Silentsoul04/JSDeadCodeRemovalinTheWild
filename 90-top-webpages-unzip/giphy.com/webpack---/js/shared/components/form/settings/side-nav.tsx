import { colors } from '@giphy/react-giphy-brand'
import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router'
import { message } from 'shared/redux/message'
import styled, { css } from 'styled-components'
import AvatarUpload from './avatar-upload'
import { STATUS_STYLE, STATUS_MESSAGES } from 'shared/components/message/flash-message'
import { ResponseError } from 'shared/api/errors'
import { IProfileUser } from 'shared/types/user'

const replaceChannel = 'channel'
const items = [
    { icon: 'ss-barchart', label: 'Dashboard', href: '/dashboard' },
    { icon: 'ss-settings', label: 'Settings', href: '/settings' },
    { icon: 'ss-lock', label: 'Password', href: '/password/change' },
    { icon: 'ss-heart', label: 'Favorites', href: '/favorites' },
    { icon: 'ss-help', label: 'How to GIPHY', href: 'https://support.giphy.com' },
    { icon: 'ss-action', label: 'Go to Channel', href: replaceChannel },
]

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const activeCss = css`
    color: ${colors.giphyWhite};
    background-color: ${colors.giphyBlue};
`
const NavItem = styled.a<{ isActive: boolean }>(
    ({ isActive }) => css`
        color: ${colors.giphyBlue};
        &:hover {
            ${activeCss};
        }
        ${isActive && activeCss};
        display: flex;
        align-items: center;
        padding: 10px;
        i {
            margin-right: 10px;
        }
    `
)

type Props = {
    location: any
    className?: string
    user: IProfileUser
    message: (message: string, type: string) => void
}

const getMessage = (e: Error | string): string => {
    const errorMessage = (e as Error).message
    const messageOrKey = errorMessage || e
    const keyMessage = STATUS_MESSAGES[messageOrKey]
    if (!keyMessage && (e as ResponseError)) {
        const details = (e as ResponseError).details
        if (details) {
            const { detail } = details
            return detail
        }
    }
    return keyMessage || `Error uploading avatar: ${messageOrKey}}`
}

const SideNav = ({ user, location: { pathname }, className, message }: Props) => {
    const onAvatarError = (e: Error | string) => {
        message(getMessage(e), STATUS_STYLE.ERROR)
    }
    const onAvatarSuccess = (copy: string) => {
        message(copy, STATUS_STYLE.SUCCESS)
    }
    return (
        <Container className={className}>
            <AvatarUpload onAvatarError={onAvatarError} onAvatarSuccess={onAvatarSuccess} user={user} />
            {items.map(({ href, label, icon }) => {
                if (href === replaceChannel) {
                    href = user.profile_url
                }
                return (
                    <NavItem href={href} key={label} isActive={pathname === href}>
                        <i className={icon} />
                        {label}
                    </NavItem>
                )
            })}
        </Container>
    )
}

export default compose(
    connect(
        undefined,
        { message }
    ),
    withRouter
)(SideNav)
