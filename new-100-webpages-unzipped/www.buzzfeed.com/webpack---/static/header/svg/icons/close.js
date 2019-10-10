import {
    h
} from 'preact';
import {
    SvgUse
} from '..';

const attributes = {
    id: 'close-icon',
    width: 38,
    height: 38
};

export const CloseIcon = () => ( <
    symbol { ...attributes
    } >
    <
    polygon points = "30.3,10.5 27.5,7.7 19,16.2 10.5,7.7 7.7,10.5 16.2,19 7.7,27.5 10.5,30.3 19,21.8 27.5,30.3 30.3,27.5 21.8,19 " / >
    <
    /symbol>
);

export const UseCloseIcon = ({ ...props
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