import {
    h
} from 'preact';
import {
    Theme
} from './context';
import purpleTheme from '../sass/themes/purple.scss';
import lightTheme from '../sass/themes/light.scss';

const themeClassNamesMap = {
    light: lightTheme,
    purple: purpleTheme
};

export const withTheme = Component => {
    const ThemedComponent = props => ( <
        Theme.Consumer > {
            theme => < Component theme = {
                themeClassNamesMap[theme]
            } { ...props
            }
            />
        } <
        /Theme.Consumer>
    );

    return ThemedComponent;
};