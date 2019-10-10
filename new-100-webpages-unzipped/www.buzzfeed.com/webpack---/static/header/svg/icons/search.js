import {
    h
} from 'preact';
import {
    SvgUse
} from '../';

const attributes = {
    id: 'search-icon',
    width: 38,
    height: 38
};

export const SearchIcon = () => ( <
    symbol { ...attributes
    } >
    <
    path d = "M24.5 1C17.6 1 12 6.6 12 13.5c0 2.7.9 5.2 2.4 7.3L.6 34.6c-.8.8-.8 2 0 2.8.8.8 2 .8 2.8 0l13.8-13.8c2.1 1.5 4.6 2.4 7.3 2.4C31.4 26 37 20.4 37 13.5S31.4 1 24.5 1zm0 21c-4.7 0-8.5-3.8-8.5-8.5S19.8 5 24.5 5 33 8.8 33 13.5 29.2 22 24.5 22z" / >
    <
    /symbol>
);

export const UseSearchIcon = ({ ...props
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