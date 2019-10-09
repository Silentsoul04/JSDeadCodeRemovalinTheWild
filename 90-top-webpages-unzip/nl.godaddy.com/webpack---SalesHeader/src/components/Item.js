import React from 'react';
import PropTypes from 'prop-types';
import Button from '@ux/button';
import Duration from '@upp/shared-components/lib/basket/duration';
import MultiYearPrice from '@upp/shared-components/lib/basket/multiyearPrice';
import { PeriodUnits } from '../utils/constants';
import { formatPrice } from '../utils/helpers';
import { NamespaceConsumer, NamespaceShape, withNamespace } from '@ux/namespace-component';
import { FormattedMessage } from 'react-intl';

class Item extends NamespaceConsumer {
  render() {
    const { item, onDelete, onDurationChange, market, currency, language } = this.props;
    const title = item.label;
    let subtitle = null;
    const isOneTimeFee = item.periodUnit === PeriodUnits.ONE_TIME;

    if (item.metadata && item.metadata.domains && item.metadata.domains.length === 1) {
      subtitle = item.metadata.domains[0].domain;
    }

    if (item.metadata && item.metadata.domains && item.metadata.domains.length > 1) {
      subtitle = item.metadata.domains.map(d => d.domain).join(', ');
    }

    return (
      <div className={ this.namespace('hc-item item card ux-card') }>
        <div className={ this.namespace('hc-item-header bg-faint') }>
          <div className={ this.namespace('hc-item-header-text') }>
            <div className={ this.namespace('ms-1') }><strong>{title}</strong></div>
            <div className={ this.namespace('ms-1 text-muted') }>{subtitle}</div>
          </div>
          <Button
            design='tertiary'
            onClick={ onDelete }
            data-eid='gce.header_cart.sales_header.item_delete.click'
          >
            <span className={ this.namespace('uxicon uxicon-trash align-top ms-1') } />
          </Button>
        </div>
        <div className={ this.namespace('hc-item-editor') }>
          <div>
            { !isOneTimeFee && <div className={ this.namespace('ms-1') }><strong><FormattedMessage id='Shared:UtilityBar:HeaderCart:purchaseLength' /></strong></div> }
            <div className={ this.namespace('ms-2 text-muted') }>
              <MultiYearPrice
                design='inline'
                item={ item }
                currency={ currency }
                itemPricing={ item.pricing }
                market={ market }
                language={ language }
              />
            </div>
          </div>
          <div className={ this.namespace('hc-duration') }>
            {!isOneTimeFee &&
              <Duration
                hideLabel
                hidePrice
                item={ item }
                currency={ currency }
                market={ market }
                eid={ 'gce.header_cart.sales_header.' }
                language={ language }
                selectedValue={ item.period }
                onChange={ onDurationChange }
              />
            }
            <span className={ this.namespace('text-success') }>
              <strong>{ formatPrice(market, currency, item.pricing.subtotal) }</strong>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  ...NamespaceShape,
  currency: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  market: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onDurationChange: PropTypes.func.isRequired,
  language: PropTypes.object.isRequired
};

export default withNamespace(Item);
