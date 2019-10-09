/* eslint-disable complexity */
import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import Placeholder from './Placeholder';
import Spinner from '@ux/spinner';
import services from '../utils/services';
import { Events } from '../utils/constants';
import Expander from './Expander';
import { formatPrice } from '../utils/helpers';
import { NamespaceConsumer, NamespaceShape, withNamespace } from '@ux/namespace-component';
import { FormattedMessage } from 'react-intl';

class CartContent extends NamespaceConsumer {

  constructor(props) {
    super(...arguments);

    this.element = React.createRef();
    this.state = {
      editing: false,
      placeholders: 0,
      items: props.basket ? props.basket.items : [],
      hasOverflow: false,
      offsetTop: null,
      height: null
    };

    this.handleOverflow = this.handleOverflow.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
    this.handleAddEvent = this.handleAddEvent.bind(this);
    this.handleRemoveEvent = this.handleRemoveEvent.bind(this);
  }

  componentDidMount() {
    document.addEventListener(Events.ADD_ITEM, this.handleAddEvent);
    document.addEventListener(Events.REMOVE_ITEM, this.handleRemoveEvent);
    this.props.onChange && services.queue.addListener('empty', this.props.onChange);
  }

  componentWillUnmount() {
    clearTimeout(this.debounceTimeout);
    document.removeEventListener(Events.ADD_ITEM, this.handleAddEvent);
    document.removeEventListener(Events.REMOVE_ITEM, this.handleRemoveEvent);
    this.props.onChange && services.queue.removeListener('empty', this.props.onChange);
  }

  handleAddEvent() {
    this.setState({ placeholders: this.state.placeholders + 1 });
    this.props.onChange && this.props.onChange();
  }

  handleRemoveEvent(e) {
    !e.detail && this.props.onChange && this.props.onChange();
  }

  handleOverflow(hasOverflow) {
    if (this.state.hasOverflow !== hasOverflow) {
      this.setState({ hasOverflow });
    }
  }

  handleDelete(item) {
    const items = this.state.items.filter(i => i.itemId !== item.itemId);
    setImmediate(() => this.setState({ items, editing: true }));
    services.basket
      .delete(item)
      .then(() => document.dispatchEvent(new CustomEvent(Events.REMOVE_ITEM, { detail: item })));
  }

  handleDurationChange(item, newDuration) {
    const { pfid } = item.periodOptions.find(option => option.period === newDuration);
    if (item.pfid !== pfid) {
      this.setState({ editing: true });
      services.basket.patch({ items: [{ itemId: item.itemId, pfid }] });
    }
  }

  render() {
    const { items, editing, placeholders, hasOverflow } = this.state;
    const { basket, loading, market, currency, language } = this.props;
    const isBasketEmpty = !basket || !basket.items || !basket.items.length;
    const hasGroups = basket && basket.groups && basket.groups.length;
    const reversedItems = items && items.slice(0).reverse();

    if (loading && isBasketEmpty && !placeholders) {
      return (
        <div className={ this.namespace('hc-loading') }>
          <Spinner />
        </div>
      );
    }

    if (!loading && isBasketEmpty && !placeholders) {
      return (
        <div className={ this.namespace('hc-loading') }>
          <FormattedMessage id='Shared:UtilityBar:HeaderCart:emptyCart' />
        </div>
      );
    }

    return (
      <React.Fragment>
        <div className={ this.namespace('hc-summary') }>
          <span className={ this.namespace('ms3') }>
            <strong><FormattedMessage id='Shared:UtilityBar:HeaderCart:yourItems' /></strong>
          </span>
          <div>
            <span className={ this.namespace('ms-1 text-muted') }>
              { !hasGroups && <FormattedMessage id='Shared:UtilityBar:HeaderCart:subTotalPrefix' /> }
            </span>&nbsp;
            <span>
              <strong>
                {editing || placeholders > 0 || isBasketEmpty
                  ? <Spinner inline size='md'/>
                  : !hasGroups && formatPrice(market, currency, basket.pricing.subtotal)
                }
              </strong>
            </span>
          </div>
        </div>
        <hr className={ this.namespace(this.classNames('m-b-1 hc-divider', {
          'hc-divider-overflow-border': hasOverflow
        })) } />

        <div className={ this.namespace('hc-items') }>
          <Expander onOverflow={ this.handleOverflow }>
            {Array(placeholders).fill(0).map((_, index) => <Placeholder key={ index } />)}
            {reversedItems && reversedItems.map(item =>
              <Item
                currency={ currency }
                market={ market }
                language={ language }
                key={ item.itemId }
                item={ item }
                onDelete={ () => this.handleDelete(item) }
                onDurationChange={ (e) => this.handleDurationChange(item, e.value) }
              />
            )}
          </Expander>
        </div>
        <hr className={ this.namespace(this.classNames('m-b-1 hc-divider', {
          'hc-divider-overflow-border': hasOverflow
        })) } />
      </React.Fragment>
    );
  }
}

CartContent.propTypes = {
  ...NamespaceShape,
  currency: PropTypes.string.isRequired,
  market: PropTypes.string.isRequired,
  language: PropTypes.object.isRequired,
  basket: PropTypes.object,
  loading: PropTypes.bool,
  onChange: PropTypes.func,
  placeholders: PropTypes.number
};

export default withNamespace(CartContent);
