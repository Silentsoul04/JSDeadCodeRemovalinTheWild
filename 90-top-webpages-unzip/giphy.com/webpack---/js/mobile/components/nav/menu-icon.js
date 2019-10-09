import styled, { css } from 'styled-components'

const Container = styled.div`
    height: 100%;
    pointer-events: none;
    position: relative;
    width: 100%;
`

const Icon = styled.svg`
    left: 50%;
    margin: -19px 0 0 -19px;
    position: absolute;
    top: 50%;
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
    ${props =>
        !props.isActive &&
        css`
            opacity: 0;
            transform: rotate(${props.rotate});
        `};
`

const MenuIcon = ({ isActive }) => (
    <Container>
        <Icon isActive={!isActive} rotate={`-90deg`} width="39" height="39" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h39v39H0z" />
                <path d="M12 12h-1v-2h19v2H12zm-4 9H7v-2h23v2H8zm4 8h-1v-2h19v2H12z" fill="#0CF" />
            </g>
        </Icon>
        <Icon
            isActive={isActive}
            rotate={`90deg`}
            className={isActive ? css.menuIcon : css.closeHidden}
            width="39"
            height="39"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h39v39H0z" />
                <path
                    fill="#0CF"
                    d="M10.858 12.272l15.87 15.87.756.756 1.414-1.414-.756-.756-15.87-15.87-.756-.756-1.414 1.414z"
                />
                <path
                    fill="#0CF"
                    d="M28.142 12.272l-15.87 15.87-.756.756-1.414-1.414.756-.756 15.87-15.87.756-.756 1.414 1.414z"
                />
            </g>
        </Icon>
    </Container>
)

export default MenuIcon
