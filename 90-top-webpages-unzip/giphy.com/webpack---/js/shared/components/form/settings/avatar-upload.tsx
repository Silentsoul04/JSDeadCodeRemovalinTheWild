import React, { useState } from 'react'
import Avatar from '../avatar'
import { useDeleteUserField, useEditUserForm, onError, onSuccess } from '../hooks/edit-field'
import { IProfileUser } from 'shared/types/user'

type Props = {
    user: IProfileUser
    onAvatarError: onError
    onAvatarSuccess: onSuccess
}

const defaultAvatar = 'https://media.giphy.com/avatars/default5.gif'
const AvatarUpload = ({ user, onAvatarError, onAvatarSuccess }: Props) => {
    const [avatar, setAvatar] = useState<string>(user.avatar_url || defaultAvatar)
    const [hasDefaultAvatar, setHasDefaultAvatar] = useState<boolean>(user.has_default_avatar)
    const [isSaving, setSavingForm, formRef] = useEditUserForm(user.id, onAvatarSuccess, onAvatarError)
    const onAvatarDelete = (message: string) => {
        setAvatar(defaultAvatar)
        setHasDefaultAvatar(true)
        onAvatarSuccess(message)
    }
    const onAvatarAccepted = (isValid: boolean, preview: string) => {
        setSavingForm(isValid)
        if (isValid && preview) {
            setHasDefaultAvatar(false)
            setAvatar(preview)
        }
    }
    const onAvatarDeleteClick = () => {
        // simple confirm for now.
        if (window.confirm(`Are you sure you want to delete your avatar?`)) {
            setDeleteAvatar(true)
        }
    }
    const [isDeleteingAvatar, setDeleteAvatar] = useDeleteUserField(user.id, 'avatar', onAvatarDelete, onAvatarError)
    return (
        <form ref={formRef}>
            <Avatar
                userAvatar={avatar}
                onValid={onAvatarAccepted}
                isDeleting={isDeleteingAvatar}
                isSaving={isSaving}
                onError={onAvatarError}
                showDelete={!hasDefaultAvatar}
                onDelete={onAvatarDeleteClick}
            />
        </form>
    )
}

export default AvatarUpload
