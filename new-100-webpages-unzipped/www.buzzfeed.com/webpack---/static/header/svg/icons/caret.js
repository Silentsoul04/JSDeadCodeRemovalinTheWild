import {
    h
} from 'preact';
import {
    SvgUse
} from '..';

const attributes = {
    id: 'caret-icon',
    width: 38,
    height: 38
};

export const CaretIcon = () => ( <
    symbol { ...attributes
    } >
    <
    path d = "M11.5 36c-.5 0-1-.2-1.4-.6-.8-.8-.8-2 0-2.8L23.7 19 10.1 5.4c-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0L29.3 19 12.9 35.4c-.4.4-.9.6-1.4.6z" / >
    <
    /symbol>
);

export const UseCaretIcon = ({ ...props
}) => ( <
    SvgUse id = {
        attributes.id
    }
    viewBox = {
        `0 0 ${attributes.width} ${attributes.height}`
    } { ...props
    }
    />
);