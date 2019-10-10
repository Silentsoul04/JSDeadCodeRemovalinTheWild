import React, { ReactNode } from 'react'
import styled, { css, keyframes } from 'styled-components'
import Close from './close'
import { giphyWhite } from '@giphy/js-brand'
import SharedModal from 'shared/components/modal/modal'
const fadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`

const Container = styled.div`
    animation: ${fadeIn} 0.2s ease-out;
    box-sizing: border-box;
    height: 100%;
    display: flex;
    justify-content: center;
    width: 100%;
`

const Background = styled.div`
    background-color: black;
    position: absolute;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    left: 0;
    ${({ theme }) =>
        css`
            opacity: ${theme.backgroundOpacity || 0.9};
        `};
`

const CloseButton = styled.div<{ showCloseHeader: boolean }>`
    margin-top: ${props => props.theme.closeMarginTop || 0}px;
    height: ${props => props.theme.headerHeight}px;
    margin-left: ${props => props.theme.closeMarginLeft || 0}px;
    display: ${props => (props.showCloseHeader ? 'flex' : 'none')};
    align-items: center;
    flex: 0 0 auto;
`

const Cancel = styled.div`
    color: ${giphyWhite};
    cursor: pointer;
    height: 56px;
    line-height: 56px;
    width: 100%;
    font-weight: 700;
    -webkit-font-smoothing: antialiased;
    flex: 0 0 auto;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    position: relative;
`

const ContainerInner = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
`

const Modal = styled(SharedModal)`
    background-color: initial;
`

type Props = {
    children: ReactNode
    closeOverlay: () => void
    className?: string
    showCloseHeader?: boolean
    hideCancel?: boolean
}
const Overlay = ({ children, closeOverlay, className, showCloseHeader = true, hideCancel = false }: Props) => (
    <Modal>
        <Container>
            <Background />
            <ContainerInner className={className}>
                <CloseButton showCloseHeader={showCloseHeader}>
                    <Close onClick={closeOverlay} />
                </CloseButton>
                <Content>{children}</Content>
                {!hideCancel && <Cancel onClick={closeOverlay}>Cancel</Cancel>}
            </ContainerInner>
        </Container>
    </Modal>
)

export default Overlay
