/**
 * This file provides utilities to work with SVGs in the context of Server Side Rendering.
 * Including heavyweight SVGs in the component code might negatively affect the size of the client side bundle.
 * In order to avoid performance hits, SVG definitions are included in the server side "shell" (see app-server.js)
 * Components in turn reference a definition by ID via <use> element https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use
 * Webpack's tree shaking feature therefore will remove actual SVGs from the client side bundle thanks to named exports.
 */
import {
    h
} from 'preact';

export const SvgUse = ({
    id,
    children,
    ...props
}) => ( <
    svg { ...props
    } > {
        children
    } <
    use xlinkHref = {
        `#${id}`
    }
    /> <
    /svg>
);