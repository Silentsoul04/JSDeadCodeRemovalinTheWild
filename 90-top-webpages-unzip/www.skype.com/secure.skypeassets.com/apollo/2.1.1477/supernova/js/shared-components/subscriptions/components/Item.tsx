import React from 'react';

import getCMSProperties from '../../../lib/getCmsProps/getCmsProps';

import Button from '../../button/Button.component';
import Column from '../../grid/Column.component';
import Text from '../../text/Text.component';
import TextIcon from '../../textIcon/TextIcon.component';

import { SubscriptionData, SubscriptionsProps } from '../types';

/*******************************************************************************************************
 * Types
 *******************************************************************************************************/

/*******************************************************************************************************
 * Content
 *******************************************************************************************************/

const textIcon = {
  icon: '',
  iconPosition: 'left',
  withLink: false,
};

/*******************************************************************************************************
 * Helpers
 *******************************************************************************************************/

function getColorClass(width: any) {
  if (width < 30) {
    return 'progress-red';
  } else if (width < 75) {
    return 'progress-yellow';
  } else {
    return 'progress-green';
  }
}

/*******************************************************************************************************
 * UI components
 *******************************************************************************************************/

/* As the first Stage it will be hidden */
const OptionalExpires = ({ ends, expiresText }: any) => (
  <TextIcon
    {...textIcon as any}
    icon=""
    classes="supernova-bubble-note"
    value={expiresText.replace('{DATE}', new Date(ends).toLocaleDateString())}
  />
);

const ProgressBar = ({ width }: any) => {
  // Color
  const color = getColorClass(width);
  return (
    <div className="supernova-subscription-progress-bar">
      <div
        style={{ width: `${width}%` }}
        className={`supernova-subscription-progress ${color}`}
      />
    </div>
  );
};

/*******************************************************************************************************
 * UI Container
 *******************************************************************************************************/

export default function Subscription(
  props: SubscriptionsProps & { item: SubscriptionData } & { slot: number }
) {
  const { minsLeftTexts, unlimitedText, manage, upgrade } = getCMSProperties(
    props
  );
  const {
    unlimited,
    left,
    minutes,
    icon,
    name,
    manageUrl,
    upgradeEnabled,
    upgradeUrl,
  } = props.item;

  // Bar
  const width = unlimited ? 100 : Number((left / minutes) * 100);

  // TimeLeft
  const timeLeft = unlimited
    ? unlimitedText
    : `${minsLeftTexts.replace('{MINUTES}', `${left}`)}`;
  return (
    <li>
      <div className="subscription-item">
        <Text
          classes="fontSizeH2 subscription-item-time-left"
          properties={{ size: 'p' }}
          value={timeLeft}
        />
        <div className="subscription-row">
          <Column width={70} classes="marginTop1 no-padding-left">
            <ProgressBar width={width} />
            <div className="subscription-footnote">
              <TextIcon
                {...textIcon as any}
                icon={icon || ''}
                value={name}
                classes="supernova-bubble-note marginTop1 marginBottom1"
              />
            </div>
          </Column>
          <Column width={15}>
            <Button
              value={manage.value}
              properties={{
                buttonType: 'outline',
                link: manageUrl,
                size: 'small',
                tracking: { ...manage.tracking, slot: `${props.slot}` },
              }}
            />
          </Column>
          {upgradeEnabled && (
            <Column width={15}>
              <Button
                value={upgrade.value}
                properties={{
                  buttonType: 'primary',
                  link: upgradeUrl,
                  size: 'small',
                  tracking: { ...upgrade.tracking, slot: `${props.slot}` },
                }}
              />
            </Column>
          )}
        </div>
      </div>
    </li>
  );
}
