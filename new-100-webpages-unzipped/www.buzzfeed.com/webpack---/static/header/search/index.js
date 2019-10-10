import {
    h,
    Component
} from 'preact';
import styles from './styles.scss';
import {
    UseSearchIcon
} from '../svg/icons/search';
import {
    I18n
} from '../context';
import {
    Link
} from '../link';
import {
    Button
} from '../button';
import {
    withTheme
} from '../withTheme';

const searchInputId = 'js-header-search';
const searchIconId = 'js-search-button';

const SearchIcon = withTheme(({
            theme,
            id
        }) => {
            return ( <
                UseSearchIcon className = {
                    `${styles.searchIcon} ${theme.searchIcon}`
                }
                role = "img"
                aria - labelledby = {
                    id
                } >
                <
                I18n.Consumer > {
                    i18n => < title id = {
                        id
                    } > {
                        i18n.search
                    } < /title>} <
                    /I18n.Consumer> <
                    /UseSearchIcon>
                );
            });

        class SearchInput extends Component {
            componentDidMount() {
                this.input.focus();
            }

            render({
                id
            }) {
                return ( <
                    I18n.Consumer > {
                        i18n => ( <
                            form className = {
                                styles.searchInputContainer
                            }
                            role = "search"
                            action = "/search" >
                            <
                            label htmlFor = {
                                id
                            }
                            className = {
                                styles.searchLabel
                            } > {
                                i18n.search
                            } < /label> <
                            input id = {
                                id
                            }
                            className = {
                                styles.searchInput
                            }
                            type = "search"
                            name = "q"
                            placeholder = {
                                i18n.search
                            }
                            autocomplete = "off"
                            ref = {
                                input => this.input = input
                            }
                            data - bfa = "@a:search;@d:input;" / >
                            <
                            /form>
                        )
                    } < /I18n.Consumer>
                );
            }
        }

        export class Search extends Component {
            constructor() {
                super();

                this.state = {
                    inputVisible: false
                };
                this.onClick = this.onClick.bind(this);
            }

            onClick(clickEvent) {
                clickEvent.preventDefault();
                this.setState({
                    ...this.state,
                    inputVisible: !this.state.inputVisible
                });
            }

            render() {
                return ( <
                    div className = {
                        styles.search
                    } > {
                        this.state.inputVisible && < SearchInput id = {
                            searchInputId
                        }
                        />} <
                        div > { /* Link on small screens, button on large screens   */ } <
                        Link className = {
                            `${styles.searchLink}`
                        }
                        href = "/search"
                        location = {
                            'search'
                        } >
                        <
                        SearchIcon id = {
                            `${searchIconId}-mobile`
                        }
                        /> <
                        /Link> <
                        I18n.Consumer > {
                            i18n =>
                            <
                            Button className = {
                                `${styles.searchButton}`
                            }
                            aria - label = {
                                i18n.a11y_search
                            }
                            onClick = {
                                this.onClick
                            }
                            location = {
                                'search'
                            }
                            aria - controls = {
                                searchInputId
                            }
                            aria - expanded = {
                                String(this.state.inputVisible)
                            } >
                            <
                            SearchIcon id = {
                                `${searchIconId}-desktop`
                            }
                            /> <
                            /Button>
                        } <
                        /I18n.Consumer> <
                        /div> <
                        /div>
                    );
                }
            }