import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { omit } from 'lodash'
import { compose } from 'recompose'
import Form from './components/settings/settings-form'
import FormErrors from './components/form-errors'
import withLocationState from 'shared/components/with-location-state'
import useDocumentTitle from 'shared/hooks/use-document-title'
import { fontCss } from './components/container'
import { flattenResponse } from 'shared/components/form/fields'
import SideNav from 'shared/components/form/settings/side-nav'
import SharedBanner from 'shared/components/form/settings/banner'
import ChannelSettingsForm from './components/settings/channel-settings-form'
import DeleteAccount from './components/settings/delete-account'
import useAsyncEffect from 'shared/hooks/use-async-effect'
import { IUser } from '@giphy/js-types'
import DotsLoader from 'shared/components/loaders/dots'
import { editUserById } from 'shared/api'
import { message } from 'shared/redux/message'
import { STATUS_STYLE } from 'shared/components/message/flash-message'
import { ResponseError } from 'shared/api/errors'
import { IProfilePowerUser } from 'shared/types/user'

function useUserProfile(onError) {
    const [userProfile, setUserProfile] = useState<IUser | undefined>(undefined)
    useAsyncEffect(async () => {
        let response
        try {
            response = await fetch('/api/v1/users/profile/')
        } catch (error) {
            console.error(error)
            onError(error)
            return
        }
        const user = await response.json()
        const birthdate = user.birthdate
        if (birthdate) {
            let [y, m, d] = birthdate.split('-')
            user.birthdate = `${m}/${d}/${y}`
        }
        user.avatar_url = user.avatar
        setUserProfile(user)
    }, [])
    return userProfile
}

export function useSaveForm(id, cb: SaveHandler) {
    const formRef = useRef<HTMLFormElement>(null)
    const [isSaving, setSave] = useState<boolean>(false)
    const [formSaveId, setFormSaveId] = useState<number>(0)
    useAsyncEffect(async () => {
        if (formRef && isSaving) {
            const formData = new FormData(formRef.current!)
            const birthdate = formData.get('birthdate') as string
            if (birthdate) {
                const [m, d, y] = birthdate.split('/')
                formData.set('birthdate', `${y}-${m}-${d}`)
            }
            try {
                await editUserById(id, formData)
                setFormSaveId(formSaveId + 1)
                cb()
            } catch (error) {
                console.error(error)
                cb(error)
            }
            setSave(false)
        }
    }, [isSaving])
    return { formRef, save: () => setSave(true), isSaving, formSaveId }
}

const gutter = 17

const Container = styled.div`
    width: 1040px;
    display: flex;
    ${fontCss};
    flex-wrap: wrap;
`
const defaultMessage = { error: 'Failed to update user settings', success: `Your settings were saved :)` }

const Banner = styled(SharedBanner)`
    margin-bottom: ${gutter}px;
`

const Nav = styled(SideNav)`
    margin-right: ${gutter}px;
`
const FormContainer = styled.div`
    flex: 1;
`

const ChannelSettingsFormMargin = styled(ChannelSettingsForm)`
    margin-top: 30px;
`

const DeleteAccountMargin = styled(DeleteAccount)`
    margin-top: 30px;
`

export type SaveHandler = (error?: Error) => void
export type AckResponseErrorHandler = (field: string) => void

const SHOW_DELETE = true

const Settings = ({ title, message }) => {
    useDocumentTitle(title)
    const [responseErrors, setResponseErrors] = useState<object>({})
    const user = useUserProfile(() => message('Error fetching settings', STATUS_STYLE.SUCCESS))
    const saveHandler: SaveHandler = error => {
        // default error message
        let errorMessage = error ? defaultMessage.error : ''
        // response error contains details
        const responseError = error as ResponseError
        if (responseError && responseError.details) {
            setResponseErrors(flattenResponse(responseError.details))
        }
        message(errorMessage || defaultMessage.success, error ? STATUS_STYLE.ERROR : STATUS_STYLE.SUCCESS)
    }
    const ackResponseError: AckResponseErrorHandler = field => {
        // Callback for `Fields` to notify this Component to remove a server-side field error,
        // once a user has seen it and changed the field value
        if (responseErrors[field]) {
            setResponseErrors(omit(responseErrors, field))
        }
    }
    return user ? (
        <Container>
            <Banner user={user} />
            <Nav user={user} />
            <FormContainer>
                <Form
                    user={user as IProfilePowerUser}
                    saveHandler={saveHandler}
                    ackResponseError={ackResponseError}
                    responseErrors={responseErrors}
                />
                <ChannelSettingsFormMargin
                    user={user as IProfilePowerUser}
                    saveHandler={saveHandler}
                    ackResponseError={ackResponseError}
                    responseErrors={responseErrors}
                />
                {SHOW_DELETE && <DeleteAccountMargin user={user} />}
            </FormContainer>
            <FormErrors />
        </Container>
    ) : (
        <DotsLoader isAbsolute />
    )
}

export default compose(
    withLocationState(['title']),
    connect(
        undefined,
        { message },
    ),
)(Settings)
