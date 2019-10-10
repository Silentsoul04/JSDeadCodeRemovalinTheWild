import React from 'react';
import PropTypes from 'prop-types';
import UxCart from '@ux/cart';
import {
    NamespaceConsumer,
    NamespaceShape,
    withNamespace
} from '@ux/namespace-component';

class CartIcon extends NamespaceConsumer {
    render() {
        return ( <
            div className = {
                this.classNames(this.namespace('hc-cart-icon'), this.props.className)
            } >
            <
            UxCart { ...this.props
            }
            iconOnly = {
                true
            }
            /> <
            /div>
        );
    }
}

CartIcon.propTypes = {
    ...NamespaceShape,
    className: PropTypes.string,
    items: PropTypes.number
};

export default withNamespace(CartIcon);