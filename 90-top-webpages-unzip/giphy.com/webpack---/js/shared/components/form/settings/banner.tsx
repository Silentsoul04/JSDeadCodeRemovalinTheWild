import React, { PureComponent, useState } from 'react'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Button as SharedButton, colors, SubheaderSmall } from '@giphy/react-giphy-brand'
import { useEditUserForm, useDeleteUserField } from '../hooks/edit-field'
import FileAccept from 'shared/components/file-portal/file-accept'
import InputWrapper from 'shared/components/inputs/file-input'
import { message } from 'shared/redux/message'
import { STATUS_STYLE, STATUS_MESSAGES } from 'shared/components/message/flash-message'
import { IProfilePowerUser } from 'shared/types/user'

const mimeTypes = ['image/gif', 'image/jpeg', 'image/png']
export const MAX_FILE_SIZE = 2 // MB what you upload is what you get back so need to keep this small-ish
const bannerField = 'banner_image'
const defaultBanner = `/static/img/dashboard/banner.gif`

const fillCss = css`
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
`
type InputProps = {
    onFileAccepted?: () => void
    onPreviewReady: (files: any[]) => void
    onError?: (error: Error) => void
    buttonCopy?: string
    hoverOnly: boolean
    bannerSrc: string
}

const Button = styled(SharedButton)`
    cursor: pointer;
    position: relative;
    input[type='file'] {
        ${fillCss}
        opacity: 0;
        cursor: pointer;
    }
`

const BannerSpecs = styled(SubheaderSmall)`
    color: ${colors.giphyWhite};
    opacity: 0.75;
    padding: 3px;
    position: relative;
`

const ButtonContainer = styled.div``

const BannerInputAndCTA = styled.div<{ hoverOnly: boolean }>`
    ${fillCss}
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ hoverOnly }) =>
        hoverOnly &&
        css`
            ${ButtonContainer} {
                opacity: 0;
                transition: opacity linear 0.3s;
            }
            &:hover {
                ${BannerImg} {
                    opacity: 0.5;
                }
                ${ButtonContainer} {
                    opacity: 1;
                }
            }
        `}
`

const BannerImg = styled.img`
    transition: opacity linear 0.3s;
    object-fit: cover;
    ${fillCss}
`

@FileAccept
class BannerInput extends PureComponent<InputProps> {
    render() {
        const { onError, onFileAccepted, buttonCopy, hoverOnly, bannerSrc } = this.props
        const inputProps = {
            name: bannerField,
            onFileAccepted,
            onError,
            mimeTypes,
            maxFilesize: MAX_FILE_SIZE,
        }
        return (
            <BannerInputAndCTA hoverOnly={hoverOnly}>
                <BannerImg src={bannerSrc} />
                <InputWrapper {...inputProps} mimeTypes={['image/*']} acceptMultiple={false} />
                <ButtonContainer>
                    <Button>
                        <InputWrapper {...inputProps} mimeTypes={['image/*']} acceptMultiple={false} />
                        {buttonCopy}
                    </Button>
                    <BannerSpecs>1040 x 160px / GIF, PNG, JPEG</BannerSpecs>
                </ButtonContainer>
            </BannerInputAndCTA>
        )
    }
}

const Form = styled.form<{ isDisabled: boolean }>`
    width: 100%;
    position: relative;
    width: 1040px;
    height: 160px;
    input[type='file'] {
        opacity: 0;
        ${fillCss}
    }
    ${({ isDisabled }) =>
        isDisabled &&
        css`
            opacity: 0.7;
            pointer-events: none;
        `};
`

type Props = {
    className?: string
    user: IProfilePowerUser
    message: (message: string, type: string) => void
}

const Trash = styled.div`
    position: absolute;
    right: 5px;
    bottom: 5px;
    background: black;
    width: 24px;
    height: 26px;
    padding-top: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.9;
    color: ${colors.giphyRed};
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
`

const getMessage = (e: Error | string) => {
    const errorMessage = (e as Error).message
    const messageOrKey = errorMessage || e
    const keyMessage = STATUS_MESSAGES[messageOrKey]
    return keyMessage || `Error uploading avatar: ${messageOrKey}}`
}

const Banner = ({ className, user, message }: Props) => {
    const onSuccess = (text: string) => {
        message(text, STATUS_STYLE.SUCCESS)
    }
    const onError = (error: Error | string) => {
        message(getMessage(error), STATUS_STYLE.ERROR)
    }

    const { banner_image } = user
    const [bannerSrc, setBannerSrc] = useState(banner_image || defaultBanner)

    const onDeleteSuccess = (text: string) => {
        onSuccess(text)
        setBannerSrc(defaultBanner)
    }

    const [isSaving, setSavingForm, formRef] = useEditUserForm(user.id, onSuccess, onError)
    const [isDeleting, setDelete] = useDeleteUserField(user.id, bannerField, onDeleteSuccess, onError)

    const userHasABanner = bannerSrc !== defaultBanner
    const buttonCopy = isSaving
        ? 'Saving...'
        : isDeleting
        ? 'Deleting...'
        : userHasABanner
        ? 'Upload New Banner'
        : 'Make it better with a Banner, Silly!'

    const onPreviewReady = (files: [any]) => {
        const [file] = files
        const { preview } = file
        setSavingForm(true)
        setBannerSrc(preview)
    }

    const onTrashClick = () => {
        // simple confirm for now.
        if (window.confirm(`Are you sure you want to delete your banner?`)) {
            setDelete(true)
        }
    }

    const { user_type } = user
    const isBrandOrArist = user_type === 'partner' || user_type === 'artist'

    return isBrandOrArist ? (
        <Form className={className} isDisabled={isSaving || isDeleting} ref={formRef}>
            <BannerInput
                hoverOnly={userHasABanner && !isDeleting && !isSaving}
                buttonCopy={buttonCopy}
                onPreviewReady={onPreviewReady}
                onError={onError}
                bannerSrc={bannerSrc}
            />
            {userHasABanner && <Trash className="ss-trash" onClick={onTrashClick} />}
        </Form>
    ) : null
}

export default compose(
    connect(
        undefined,
        { message },
    ),
)(Banner)
