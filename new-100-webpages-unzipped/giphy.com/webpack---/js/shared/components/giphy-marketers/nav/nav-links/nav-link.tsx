import React from 'react'
import styled from 'styled-components'
import { headerHeight } from '../../constants'
import { giphyWhite } from '@giphy/js-brand'

export type NavLinkProps = {
    url: string
    title: string
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
    height: 100%;
    position: relative;

    &:hover::after {
        content: '';
        width: 100%;
        border-bottom: 5px solid ${giphyWhite};
        position: absolute;
        bottom: 0;
    }
`

const Link = styled.a`
    color: white;
    height: 100%;
    display: flex;
    align-items: center;
`

const NavLink = ({ url, title }: NavLinkProps) => {
    const onClick = e => {
        e.preventDefault()
        const link = e.currentTarget
        const hash = link.getAttribute('href')
        const target = document.querySelector(`section${hash}`)

        if (!target) {
            return
        }

        const bodyTop = document.body.getBoundingClientRect().top
        const targetTop = target.getBoundingClientRect().top
        const targetPosition = targetTop - bodyTop
        const offsetPosition = targetPosition - headerHeight

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        })
    }
    return (
        <Container>
            <Link href={url} onClick={onClick}>
                <span>{title}</span>
            </Link>
        </Container>
    )
}

export default NavLink
