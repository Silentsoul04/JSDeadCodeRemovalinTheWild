/**
 * 🗄 CMS aware component
 */
import { Switch } from '@skype/bew-components/dist/Switch/Switch';
import get from 'lodash/get';
import isNil from 'lodash/isNil';
import React from 'react';

import getCmsProps from '../../lib/getCmsProps/getCmsProps';

import getSetting from '../../lib/settings/get-setting';

import Button from '../button/Button.component';
import Row from '../grid/Row.component';
import Icon from '../icon/Icon.component';
import Text from '../text/Text.component';
import Toggler from '../toggler/Toggler.component';

import { ButtonProps } from '../button/types';
import useActiveCredit from './data-connect/useActiveCredit.hook';
import useSwitchState from './data-connect/useSwitchState.hook';

import getLanguage from '../../lib/common-utils/getLanguage';
import formatString from '../../lib/string-utils/formatString';
import './skypeCredits.scss';
import { SkypeCreditProps, SkypeCreditToggleProps } from './types';

/*******************************************************************************************************
 * UI
 *******************************************************************************************************/

const SkypeCredits = (
  props: SkypeCreditProps & {
    credits: Array<{
      balanceFormatted: any;
      currency: any;
    }>;
  }
) => {
  const { credits } = props;
  const {
    autoRechargeButtonTracking,
    autoRechargeText,
    buttonBuyCreditText,
    buttonSendCreditText,
    buttonSendCreditTracking,
    buttonBuyCreditTracking,
    balanceTracking,
    rechargeText,
    rechargeTooltip,
    title,
    underRechargeText,
  } = getCmsProps(props);

  const skypeToken = JSON.parse(sessionStorage.getItem('skypeToken') || '{}');
  const [switchOn] = useSwitchState(credits.length > 0, skypeToken!);

  // TODO can be multiple?
  const credit = get(credits, '0', { balanceFormatted: '', currency: '' });

  const addCreditButtonProperties = {
    link: formatString(
      getSetting(['settings', 'api', 'buyCredit']),
      getLanguage(),
      get(credit, ['currency'])
    ),
  };

  const autoRechargeButton = {
    classes: 'skype-credits-auto-recharge-button',
    properties: {
      buttonType: 'link',
      link: getSetting(['settings', 'api', 'autoRechargeUrl']),
      title: get(autoRechargeText, switchOn ? 'disabled' : 'enabled'),
      tracking: autoRechargeButtonTracking,
    },
  };

  return (
    <div className="supernova-skype-credits-component supernova-bubble">
      <div>
        <Text
          classes="fontSizeH3 m-bottom-25"
          properties={{ size: 'h3' }}
          value={title}
        />
        <Button
          classes="supernova-skype-credits-balance"
          properties={{
            buttonType: 'link',
            tracking: balanceTracking,
            ...addCreditButtonProperties,
          }}>
          <p className="fontSizeH1 supernova-text-blue">
            {credit.balanceFormatted}
          </p>
        </Button>
        <div className="skype-credits-recharge">
          <div>
            <Text
              classes="strong"
              properties={{ size: 'span' }}
              value={rechargeText}
            />
            <Icon icon="" title={rechargeTooltip} />
          </div>
          {!isNil(switchOn) && (
            <Button {...autoRechargeButton as ButtonProps}>
              <Switch isOn={switchOn} disabled={true} />
            </Button>
          )}
        </div>
        <div className="supernova-divider">
          <Text
            classes="disclaimer"
            properties={{ size: 'span' }}
            value={underRechargeText}
          />
        </div>
      </div>

      <Row classes="supernova-credit-buttons">
        <Button
          classes="marginTop3 marginRight3"
          value={buttonBuyCreditText}
          properties={{
            buttonType: 'primary',
            size: 'small',
            tracking: buttonBuyCreditTracking,
            ...addCreditButtonProperties,
          }}
        />

        <Button
          classes="marginTop3"
          value={buttonSendCreditText}
          properties={{
            buttonType: 'link',
            link: getSetting(['settings', 'api', 'sendCredit']),
            size: 'small',
            tracking: buttonSendCreditTracking,
          }}
        />
      </Row>
    </div>
  );
};

SkypeCredits.defaultProps = {
  credits: [],
};
/*******************************************************************************************************
 * Map Credits
 *******************************************************************************************************/

const mapToCredits = (dto: any) => ({
  balanceFormatted: dto.balanceFormatted,
  currency: get(dto, ['attributes', 'currency']),
});

/*******************************************************************************************************
 * UI Container
 *******************************************************************************************************/

const SkypeCreditToggle = (props: SkypeCreditToggleProps) => {
  const [activeCredit, isLoading] = useActiveCredit();
  const credits = activeCredit.map(mapToCredits);

  return (
    <Toggler
      isDataLoading={isLoading}
      fallback={SkypeCredits}
      passed={credits && credits.length > 0}
      defaultContent={props.defaultContent}
      afterConditionContent={<SkypeCredits {...props} credits={credits} />}
    />
  );
};

export default SkypeCreditToggle;
