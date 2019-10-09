import { IUser } from '@giphy/js-types'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'
import { message, SendMessageAction } from 'shared/redux/message'
import { compose } from 'recompose'
import React, { useState, useEffect } from 'react'
import { Label } from 'shared/components/form/fields'
import Modal from 'shared/components/form/settings/delete-user-modal'
import useAsyncEffect from 'shared/hooks/use-async-effect'
import { ButtonGroups as SharedButtonGroups, CTAButton, FormContainer } from './sc'
import { deleteUser } from 'shared/api'
import { ResponseError } from 'shared/api/errors'
import { STATUS_STYLE } from 'shared/components/message/flash-message'

type Props = {
    user: IUser
    className?: string
    message: SendMessageAction
}

const ButtonGroups = styled(SharedButtonGroups)`
    margin-bottom: 0;
`

const LaunchDelete = styled(CTAButton)`
    margin-left: 0;
`

const DeleteUserModal = styled(Modal)<{ userGone: boolean }>`
    & * {
        transition: 1s filter linear;
        filter: grayscale(${props => (props.userGone ? 100 : 0)}%);
        ${props =>
            props.userGone &&
            css`
                pointer-events: none;
            `}
    }
    transition: 1s background-color linear;
    ${props =>
        props.userGone &&
        css`
            background-color: black;
        `}
`

export type DeleteHandler = (error?: Error) => void

const deleteConfirmationTimeout = 5000
type useDeleteUserAPI = {
    deleteUser: (string) => void
    isDeleting: boolean
}
function useDeleteUser(id: number, cb: DeleteHandler): useDeleteUserAPI {
    const [isDeleting, setSave] = useState<boolean>(false)
    const [password, setPassword] = useState<string>('')
    useAsyncEffect(async () => {
        if (password && isDeleting) {
            try {
                await deleteUser(id, password)
                cb()
            } catch (error) {
                console.error(error)
                cb(error)
            }
            setSave(false)
        }
    }, [isDeleting])
    return {
        deleteUser: password => {
            setPassword(password)
            setSave(true)
        },
        isDeleting,
    }
}

const Messages = {
    password: `Oops, that's not the correct password! Please try again. Or don't...`,
    seeYa: `Your account is in the process of being deleted. Hate to see you leave 😢`,
}
const DeleteAccount = ({ message, user, className = '' }: Props) => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [userGone, setUserGone] = useState<boolean>(false)
    const [showPasswordMessage, setShowPasswordMessage] = useState<boolean>(false)
    const deleteHandler: DeleteHandler = error => {
        if (error) {
            if (error as ResponseError) {
                const { details } = error as ResponseError
                if (details.password) {
                    setShowPasswordMessage(true)
                    message(Messages.password, STATUS_STYLE.ERROR)
                } else {
                    // ResponseError.details has keys, but I don't what they are,
                    // and they can be anything so just show a default
                    message(`Error deleting, please try again`, STATUS_STYLE.ERROR)
                }
            } else {
                message(`Error deleting, please try again`, STATUS_STYLE.ERROR)
            }
        } else {
            message(Messages.seeYa, STATUS_STYLE.SUCCESS, undefined, deleteConfirmationTimeout)
            setUserGone(true)
        }
    }
    useEffect(() => {
        let redirectInFive
        if (userGone) {
            redirectInFive = setTimeout(() => (location.href = '/'), deleteConfirmationTimeout)
        }
        return () => clearTimeout(redirectInFive)
    }, [userGone])
    const { deleteUser, isDeleting } = useDeleteUser(user.id, deleteHandler)
    return (
        <FormContainer className={className}>
            {showModal && (
                <DeleteUserModal
                    isDeleting={isDeleting}
                    userGone={userGone}
                    onClose={() => {
                        // don't let the user close the model if they successfully deleted
                        if (!userGone) setShowModal(false)
                    }}
                    onDelete={(password: string) => deleteUser(password)}
                    showPasswordMessage={showPasswordMessage}
                />
            )}
            <ButtonGroups>
                <Label label="Channel Privacy" />
                <LaunchDelete onClick={() => setShowModal(true)} disabled={isDeleting}>
                    Delete Your Account
                </LaunchDelete>
            </ButtonGroups>
        </FormContainer>
    )
}

export default compose(
    connect(
        undefined,
        { message },
    ),
)(DeleteAccount)
