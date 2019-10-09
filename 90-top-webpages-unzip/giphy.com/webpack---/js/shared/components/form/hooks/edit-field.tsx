import { useState, useRef } from 'react'
import useAsyncEffect from 'shared/hooks/use-async-effect'
import { editUserById } from 'shared/api'

export type onSuccess = (message: string) => void
export type onError = (e: Error) => void
export function useDeleteUserField(
    userId: number,
    fieldName: string,
    onSuccess: onSuccess,
    onError: onError
): [boolean, (isDeleting: boolean) => void] {
    const [isDeletingField, setDeleteField] = useState(false)
    useAsyncEffect(async () => {
        if (isDeletingField) {
            const formData = new FormData()
            // delete the avatar by passing an empty avatar value
            formData.set(fieldName, '')
            try {
                await editUserById(userId, formData)
                onSuccess(`Delete Success!`)
            } catch (e) {
                console.error(e)
                onError(e)
            }
            setDeleteField(false)
        }
    }, [isDeletingField])
    return [isDeletingField, setDeleteField]
}

export function useEditUserForm(
    userId: number,
    onSuccess: onSuccess,
    onError: onError
): [boolean, (isSaving: boolean) => void, any] {
    const formRef = useRef<HTMLFormElement>(null)
    const [isSavingUser, setSavingUser] = useState(false)
    useAsyncEffect(async () => {
        // if we have a new avatar and we have a form (which we always should)
        if (isSavingUser && formRef.current) {
            const formData = new FormData(formRef.current)
            try {
                await editUserById(userId, formData)
                onSuccess(`Saved!`)
            } catch (e) {
                console.error(e)
                onError(e)
            }
            setSavingUser(false)
        }
    }, [isSavingUser, formRef])
    return [isSavingUser, setSavingUser, formRef]
}
