import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import { CTAButton as BrandCTAButton } from 'shared/components/form/form-components'
import { colors } from '@giphy/react-giphy-brand'
import InputWrapper from 'shared/components/inputs/file-input'
import FileAccept from 'shared/components/file-portal/file-accept'

export const MAX_FILE_SIZE = 8 // MB

const Container = styled.div<{ isDisabled: boolean; avatarSize: number }>`
    display: flex;
    flex-direction: column;
    position: relative;
    ${({ isDisabled }) =>
        isDisabled &&
        css`
            opacity: 0.7;
            pointer-events: none;
        `};
    width: ${({ avatarSize }) => avatarSize}px;
    img {
        width: 100%;
        height: ${({ avatarSize }) => avatarSize}px;
    }
    input[type='file'] {
        height: 100%;
        left: 0;
        opacity: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }
`
const CTAButton = styled(BrandCTAButton)`
    width: 100%;
`

const Trash = styled.div`
    position: absolute;
    right: 5px;
    bottom: 48px;
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

const mimeTypes = ['image/gif', 'image/jpeg', 'image/png']

namespace Input {
    type Props = {
        onFileAccepted?: () => void
        onError?: (error: Error) => void
        needsToChangeAvatar?: boolean
        buttonCopy?: string
    }
    export const AvatarInput = FileAccept(({ onError, onFileAccepted, needsToChangeAvatar, buttonCopy }: Props) => {
        const inputProps = {
            name: Avatar.inputName,
            onFileAccepted,
            onError,
            mimeTypes,
            maxFilesize: MAX_FILE_SIZE,
        }
        return (
            <InputWrapper {...inputProps} mimeTypes={['image/*']} acceptMultiple={false}>
                <CTAButton>{buttonCopy || (needsToChangeAvatar ? 'Upload Avatar' : 'Change Avatar')}</CTAButton>
            </InputWrapper>
        )
    })
}

type Props = {
    onError?: (error: Error) => void
    onValid: (isValid: boolean, avatar?: string) => void
    avatarSize?: number
    // override default and any uploaded preview in state
    userAvatar?: string
    // if no avatar is specified
    defaultAvatar?: string
    className?: string
    needsToChangeAvatar?: boolean
    isDeleting?: boolean
    isSaving?: boolean
    onDelete?: () => void
    showDelete?: boolean
}

type State = {
    uploadedPreview?: any
    isHovered: boolean
}

class Avatar extends PureComponent<Props, State> {
    static inputName = 'avatar_url'
    state = {
        uploadedPreview: undefined,
        isHovered: false,
    }
    static defaultProps = {
        onError: error => console.error(error),
        avatarSize: 250,
    }
    onPreviewReady = files => {
        const [file] = files
        const { preview } = file
        const { onValid } = this.props
        this.setState({ uploadedPreview: preview })
        onValid(true, preview)
    }
    onMouseOver = () => this.setState({ isHovered: true })
    onMouseLeave = () => this.setState({ isHovered: false })
    render() {
        const { uploadedPreview, isHovered } = this.state
        const {
            onError,
            className,
            avatarSize,
            needsToChangeAvatar,
            userAvatar,
            defaultAvatar,
            onDelete,
            isDeleting,
            isSaving,
            showDelete,
        } = this.props
        // userAvatar takes precedence over the uploadedPreview,
        // which may have been deleted
        // we could set the state uploadedPreview right away,
        // but then we won't know if we've successfully deleted
        const preview = userAvatar || uploadedPreview || defaultAvatar
        const buttonCopy = isDeleting ? 'Deleting...' : isSaving ? 'Saving...' : ''
        return (
            <Container
                className={className}
                avatarSize={avatarSize!}
                isDisabled={!!isDeleting || !!isSaving}
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}
            >
                {preview && <img src={preview} />}
                <Input.AvatarInput
                    {...{
                        onPreviewReady: this.onPreviewReady,
                        onError,
                        buttonCopy,
                        needsToChangeAvatar: needsToChangeAvatar && !uploadedPreview,
                    }}
                />
                {onDelete && isHovered && showDelete && <Trash className="ss-trash" onClick={onDelete} />}
            </Container>
        )
    }
}

export default Avatar
