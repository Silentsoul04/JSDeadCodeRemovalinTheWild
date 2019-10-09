import React, { useState, useRef } from 'react'
import Modal from 'shared/components/modal/modal'
import { Button, colors, Title as SharedTitle } from '@giphy/react-giphy-brand'
import styled, { keyframes } from 'styled-components'
import Close from 'shared/components/icons/close'
import Fields, { FIELDS, FieldUpdate } from '../fields'
import { Copy } from '../copy'
import routes from 'shared/routes'
import BlockEnterSubmit from '../inputs/block-enter-submit'

const peeker = {
    src: 'https://media.giphy.com/media/xUNemL2Yrwl6IoYWFa/200w.gif',
    height: 49,
}

const messageIn = keyframes`
 0% {
        opacity: 0;
        transform: translateY(50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }`

const passwordIn = keyframes`
 0% {
        opacity: 0;
        max-height: 0;
    }
    100% {
        opacity: 1;
        max-height: 100px;
    }`
const Container = styled.div`
    margin-top: -${peeker.height}px;
`

// z-index is required because we use a filter
// and it changes the stacking order
const Peeker = styled.div`
    text-align: center;
    animation: fadeIn 0.2s ease-in forwards;
    height: ${peeker.height}px;
    z-index: 1;
    position: relative;
    img {
        width: 100px;
    }
`

const ModalContainer = styled.div`
    background: ${colors.giphyDarkGrey};
    animation: ${messageIn} 0.3s ease-out;
    max-width: 517px;
    text-align: center;
`

const CopyContainer = styled.div`
    padding: 0 75px 35px;
`

const CloseContainer = styled.div<{ onClick?: () => void }>`
    span {
        padding: 10px;
        color: ${colors.giphyLightGrey};
        cursor: pointer;
    }
`
const Footer = styled.div`
    display: flex;
    ${Button}:first-child {
        margin-right: 10px;
    }
    ${Button} {
        width: 100%;
    }
`
const Title = styled(SharedTitle)`
    font-size: 22px;
`
const Subtitle = styled(Copy)`
    margin: 20px 0;
`

const ForgotPassword = styled(Copy)`
    margin-top: 20px;
    animation: ${passwordIn} 500ms linear;
`
type Props = {
    onClose?: () => void
    onDelete: (password: string) => void
    showPasswordMessage: boolean
    className?: string
    isDeleting: boolean
}

const passwordLabel: FieldUpdate[] = [[FIELDS.password, { placeholder: 'Enter password to confirm deletion' }]]

const DeleteUserModal = ({ onClose, onDelete, showPasswordMessage, className, isDeleting }: Props) => {
    const [isValid, setForm1Valid] = useState<boolean>(false)
    const formRef = useRef<HTMLFormElement>(null)
    const onDoDelete = () => {
        if (formRef && formRef.current) {
            const formData = new FormData(formRef.current)
            onDelete(formData.get('password') as string)
        }
    }
    return (
        <Modal scrollToTop className={className}>
            <Container>
                <Peeker>
                    <img src={peeker.src} />
                </Peeker>
                <ModalContainer>
                    <CloseContainer onClick={onClose}>
                        <Close />
                    </CloseContainer>
                    <CopyContainer>
                        <Title>
                            Are you sure you want to <br /> delete your account?
                        </Title>
                        <Subtitle>
                            Say it ain&apos;t so! This is an irreversible action, there&apos;s no going back! All of
                            your favorites and uploads will be gone forever. <br />
                            Maybe just <a href="/logout">logout</a> instead?
                        </Subtitle>
                        <form ref={formRef}>
                            <BlockEnterSubmit />
                            <Fields
                                customFieldProps={passwordLabel}
                                onValidChange={setForm1Valid}
                                showFields={[FIELDS.password]}
                                noTooltip
                            />
                        </form>
                        <Footer>
                            <Button color={colors.giphyDarkCharcoal} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button disabled={!isValid || isDeleting} color={colors.giphyRed} onClick={onDoDelete}>
                                Delete Account
                            </Button>
                        </Footer>
                        {showPasswordMessage && (
                            <ForgotPassword>
                                <a href={routes.PASSWORD_RESET.path}>Forgot Your Password?</a>
                            </ForgotPassword>
                        )}
                    </CopyContainer>
                </ModalContainer>
            </Container>
        </Modal>
    )
}

export default DeleteUserModal
