import React from 'react'
import styled from 'styled-components'
import NavLink, { NavLinkProps } from './nav-link'

type NavLinksProps = {
    titles: NavLinkProps[]
}

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    color: white;
    flex: 2;
    margin: 0 20px;
    height: 100%;
`

const NavLinks = ({ titles }: NavLinksProps) => {
    return (
        <Container>
            {titles.map(({ url, title }, index) => (
                <NavLink key={index} url={url} title={title} />
            ))}
        </Container>
    )
}

export default NavLinks
