/**
 * 🗄 CMS aware component
 */
import get from 'lodash/get';
import React from 'react';

import getLanguage from '../../lib/common-utils/getLanguage';
import getCMSProperties from '../../lib/getCmsProps/getCmsProps';
import usePartialList from '../../lib/hooks/usePartialList';
import getSetting from '../../lib/settings/get-setting';
import formatString from '../../lib/string-utils/formatString';

import Button from '../button/Button.component';
import { ButtonProps } from '../button/types';
import useActiveCredit from '../skypeCredits/data-connect/useActiveCredit.hook';
import Text from '../text/Text.component';
import { TextProps } from '../text/types';
import Toggler from '../toggler/Toggler.component';

import SubscriptionItem from './components/Item';
import useActiveCalling from './data-connect/useActiveCalling.hook';
import {
  SubscriptionData,
  SubscriptionsProps,
  SubscriptionsToggleProps,
} from './types';
import mapToModel from './utils';

import './subscriptions.scss';

/*******************************************************************************************************
 * Content
 *******************************************************************************************************/

const showMoreButton: Partial<ButtonProps> = {
  classes: 'supernova-link',
  properties: {
    buttonType: 'link',
    size: 'small',
  },
};

/*******************************************************************************************************
 * UI components
 *******************************************************************************************************/

function Subscriptions(
  props: SubscriptionsProps & { subscriptions: SubscriptionData[] }
) {
  const [subscriptions, countRest, toggleList] = usePartialList(
    props.subscriptions.map(x => ({ ...x })),
    1
  );
  const { title, more = {} as any, discover = {} as any } = getCMSProperties(
    props
  );

  // ShowMore
  showMoreButton.value =
    countRest > 0 ? `${more.valueMore} (${countRest})` : more.valueLess;
  showMoreButton.onClick = toggleList;
  showMoreButton.properties!.tracking = more.tracking;

  return (
    <div className="supernova-bubble subscriptions-component">
      <div>
        <Text {...title as TextProps} />
        <ul className="subscriptions-list">
          {subscriptions.map((item, i) => (
            <SubscriptionItem key={i} slot={i} item={item} {...props} />
          ))}
        </ul>

        {props.subscriptions.length > 1 && (
          <div className="supernova-divider">
            <Button {...showMoreButton as ButtonProps} />
          </div>
        )}
      </div>

      {discover && (
        <Button
          classes="marginTop2"
          value={discover.value}
          properties={{
            buttonType: 'primary',
            link: formatString(discover.discoverUrl, getLanguage()),
            size: 'default',
            tracking: discover.tracking,
          }}
        />
      )}
    </div>
  );
}

Subscriptions.defaultProps = {
  subscriptions: [],
};

/*******************************************************************************************************
 * UI Container
 *******************************************************************************************************/

const SubscriptionToggle = (props: SubscriptionsToggleProps) => {
  const [activeCalling, isCallingLoading] = useActiveCalling();
  const [activeCredit, isCreditLoading] = useActiveCredit();

  const { manage, upgrade } = getCMSProperties(props);
  const subscriptions = mapToModel(
    activeCalling,
    activeCredit,
    get(manage, 'manageUrl'),
    get(upgrade, 'upgradeUrl')
  );

  return (
    <Toggler
      isDataLoading={isCallingLoading || isCreditLoading}
      fallback={Subscriptions}
      passed={subscriptions && subscriptions.length > 0}
      defaultContent={props.defaultContent}
      afterConditionContent={
        <Subscriptions {...props} subscriptions={subscriptions} />
      }
    />
  );
};

export default SubscriptionToggle;
