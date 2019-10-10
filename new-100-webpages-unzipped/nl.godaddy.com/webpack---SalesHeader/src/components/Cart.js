import React from 'react';
import PropTypes from 'prop-types';
import Button from '@ux/button';
import Icon from '@ux/icon';
import CartContent from './CartContent';
import {
    FormattedMessage
} from 'react-intl';
import {
    NamespaceConsumer,
    NamespaceShape,
    withNamespace
} from '@ux/namespace-component';

class Cart extends NamespaceConsumer {

    constructor() {
        super(...arguments);
        this.onChangeTimeout = null;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.onChange && this.props.onChange();
        this.setState({
            placeholders: 0
        });
    }

    render() {
        const {
            onClose,
            onContinue,
            basket,
            loading,
            currency,
            market,
            language
        } = this.props;
        const handleChange = this.handleChange;
        const isBasketEmpty = Boolean(!(basket && basket.items && basket.items.length));

        return ( <
            div className = {
                this.namespace('hc-cart')
            } >
            <
            div className = {
                this.namespace('hc-cart-header bg-dark')
            } >
            <
            span className = {
                this.namespace('ms3')
            } >
            <
            strong > {
                isBasketEmpty ? < FormattedMessage id = 'Shared:UtilityBar:HeaderCart:basket' / > :
                    <
                    FormattedMessage id = 'Shared:UtilityBar:HeaderCart:basketCount'
                values = {
                    {
                        count: basket.items.length
                    }
                }
                /> } <
                /strong> <
                /span> <
                Button
                data - eid = 'gce.header_cart.sales_header.close_x.click'
                design = 'tertiary'
                onClick = {
                    onClose
                } >
                <
                Icon name = 'x'
                color = 'white' / >
                <
                /Button> <
                /div> <
                CartContent
                key = {
                    basket.requestKey
                }
                basket = {
                    basket
                }
                loading = {
                    loading
                }
                onChange = {
                    handleChange
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
                /> {
                    !isBasketEmpty &&
                        <
                        div className = {
                            this.namespace('hc-cart-continue')
                        } >
                        <
                        Button
                    data - eid = 'gce.header_cart.sales_header.continue_button.click'
                    className = {
                        this.namespace('m-b-1')
                    }
                    design = 'primary'
                    onClick = {
                            onContinue
                        } >
                        <
                        Icon name = 'cart'
                    color = 'white' / >
                        <
                        FormattedMessage id = 'Shared:UtilityBar:HeaderCart:continueToCart' / >
                        <
                        /Button> <
                        Button
                    data - eid = 'gce.header_cart.sales_header.close_button.click'
                    design = 'default'
                    onClick = {
                            onClose
                        } >
                        <
                        FormattedMessage id = 'Shared:UtilityBar:HeaderCart:continueShopping' / >
                        <
                        /Button> <
                        /div>
                } <
                /div>
            );
        }
    }

    Cart.propTypes = {
        ...NamespaceShape,
        currency: PropTypes.string.isRequired,
        market: PropTypes.string.isRequired,
        basket: PropTypes.object,
        onChange: PropTypes.func,
        onClose: PropTypes.func,
        onContinue: PropTypes.func,
        requestKey: PropTypes.number,
        loading: PropTypes.bool,
        language: PropTypes.object.isRequired
    };

    export default withNamespace(Cart);