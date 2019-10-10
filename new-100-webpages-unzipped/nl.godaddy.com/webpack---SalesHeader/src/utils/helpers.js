import {
    Currency
} from '@godaddy/intl-formatter';
import {
    cookie
} from '@ux/util';
import {
    CurrencyConstants,
    MarketConstants
} from '../utils/constants';

export const getMarket = () => cookie.get(MarketConstants.COOKIE_KEY) || MarketConstants.DEFAULT_MARKET_KEY;
export const getCurrency = () => cookie.get(CurrencyConstants.COOKIE_KEY) || CurrencyConstants.DEFAULT_CURRENCY_KEY;

const gdCurrency = new Currency();
export const formatPrice = (market, currency, microunits) => {
    return gdCurrency.formatMicrounits(microunits, market, currency);
};