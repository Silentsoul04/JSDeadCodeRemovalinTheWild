import { css } from 'styled-components'
const mobileQuery = `(max-width: 767px)`
const desktopQuery = `(min-width: 768px)`
export const mobile = {
    query: mobileQuery,
    css: (...args) => css`
        @media ${mobileQuery} {
            ${css(...args)};
        }
    `,
}
export const desktop = {
    query: desktopQuery,
    css: (...args) => css`
        @media ${desktopQuery} {
            ${css(...args)};
        }
    `,
}
