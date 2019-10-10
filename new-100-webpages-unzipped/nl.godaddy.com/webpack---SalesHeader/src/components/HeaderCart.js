import React from 'react';
import Cart from './Cart';
import CartIcon from './CartIcon';
import PopOver from '@ux/popover';
import PropTypes from 'prop-types';
import config from '../utils/config';
import {
    Events
} from '../utils/constants';
import {
    getMarket,
    getCurrency
} from '../utils/helpers';
import {
    IntlProvider
} from 'react-intl';
import services from '../utils/services';
import {
    NamespaceConsumer,
    NamespaceShape,
    withNamespace
} from '@ux/namespace-component';
import UxCart from '@ux/cart';

class HeaderCart extends NamespaceConsumer {

    constructor(props) {
        super(...arguments);
        this.state = {
            open: false,
            enabled: false,
            loading: false,
            basket: {},
            checkoutUrl: props.checkout
        };

        this.enable = this.enable.bind(this);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.continue = this.continue.bind(this);
        this.setProps = this.setProps.bind(this);
        this.isHeaderCartEligible = this.isHeaderCartEligible.bind(this);
        this.getBasket = this.getBasket.bind(this);

        config.init({
            baseUrl: props.checkout
        });
    }

    componentDidMount() {
        document.addEventListener(Events.ENABLE, this.enable);
        document.addEventListener(Events.ADD_ITEM, this.open);
        document.addEventListener(Events.PROPS, this.setProps);
    }

    componentWillUnmount() {
        document.removeEventListener(Events.ENABLE, this.enable);
        document.removeEventListener(Events.ADD_ITEM, this.open);
        document.removeEventListener(Events.PROPS, this.setProps);
    }

    getBasket() {
        this.setState({
            loading: true
        });
        services.basket.get()
            .then(basket => {
                this.setState({
                    basket,
                    loading: false
                });
            })
            .catch(() => {
                this.setState({
                    loading: false
                });
            });
    }

    isHeaderCartEligible() {
        const isIE = typeof window !== 'undefined' && ( /* @cc_on!@*/ false || !!document.documentMode);
        return this.state.enabled && !this.isMobile && !isIE;
    }

    continue () {
        window.location = this.state.checkoutUrl;
    }

    enable() {
        this.setState({
            enabled: true
        }, this.getBasket);
    }

    open() {
        this.setState({
            open: true
        });
    }

    close() {
        this.setState({
            open: false
        });
    }

    setProps(event) {
        if (event.detail && event.detail.checkoutUrl) {
            this.setState({
                checkoutUrl: event.detail.checkoutUrl
            });
        }
    }

    render() {
        const {
            basket,
            loading
        } = this.state;
        const market = getMarket();
        const currency = getCurrency();
        const messages = this.props.messages;
        const language = {
            firstYear: messages['Shared:UtilityBar:HeaderCart:firstYear'],
            secondPlusYear: messages['Shared:UtilityBar:HeaderCart:secondPlusYear'],
            itemEditor: {
                month: messages['Shared:UtilityBar:HeaderCart:itemEditor:month'],
                months: messages['Shared:UtilityBar:HeaderCart:itemEditor:months'],
                year: messages['Shared:UtilityBar:HeaderCart:itemEditor:year'],
                years: messages['Shared:UtilityBar:HeaderCart:itemEditor:years']
            }
        };
        const headerCart = ( <
            div className = {
                this.namespace('hc-header-cart')
            } >
            <
            IntlProvider locale = {
                market
            }
            key = {
                market
            }
            messages = {
                messages
            } >
            <
            PopOver control = { < CartIcon { ...this.props
                }
                items = {
                    basket && basket.items && basket.items.length
                }
                /> }
                eid = {
                    'gce.header_cart.sales_header.icon.click'
                }
                open = {
                    this.state.open
                }
                onToggle = {
                    (open) => open ? this.open() : this.close()
                } >
                <
                Cart
                basket = {
                    basket
                }
                loading = {
                    loading
                }
                onChange = {
                    this.getBasket
                }
                onClose = {
                    this.close
                }
                onContinue = {
                    this.continue
                }
                currency = {
                    currency
                }
                market = {
                    market
                }
                language = {
                    language
                }
                /> <
                /PopOver> <
                /IntlProvider> <
                /div>
            );

            return (
                this.isHeaderCartEligible() ? headerCart : < UxCart { ...this.props
                }
                />
            );
        }
    }

    HeaderCart.propTypes = {
        ...NamespaceShape,
        // preserving existing prop names for compatibility
        checkout: PropTypes.string.isRequired,
        items: PropTypes.number
    };

    export default withNamespace(HeaderCart);