import get from 'lodash/get';
import head from 'lodash/head';
import isNil from 'lodash/isNil';
import orderBy from 'lodash/orderBy';
import property from 'lodash/property';

import { UserServicesDto } from '../../apis/userServices/useUserServices.hook';
import getSetting from '../../lib/settings/get-setting';
import formatString from '../../lib/string-utils/formatString';

import { hasNestedServices, isPackage } from './data-connect/utils';
import { SubscriptionData } from './types';

const getUpdateRefs = (activeCalling: UserServicesDto[]) =>
  activeCalling
    .map(property<UserServicesDto, string>(['tracking', 'upgradeRef']))
    .filter(x => x);

const isUnlimited = (x: SubscriptionData) => x && !x.minutes;

const usedSomeQuota = (data: SubscriptionData, threshold: number) =>
  !isNil(data.minutes) &&
  !isNil(data.left) &&
  data.minutes * threshold >= data.left;

const upgradeEnabled = (
  data: SubscriptionData,
  updateRefs: string[],
  subscriptionsUpgradeThreshold: number
) =>
  usedSomeQuota(data, subscriptionsUpgradeThreshold) &&
  !updateRefs.some(x => data.id === x);

function mapTo(
  dto: UserServicesDto,
  updateRefs: string[],
  subscriptionsUpgradeThreshold: number,
  currency: string | undefined,
  manageUrl: string | undefined,
  upgradeUrl: string | undefined
) {
  const subscription: Partial<SubscriptionData> = {
    ends: dto.end,
    id: dto.id,
    manageUrl: formatString(
      manageUrl,
      // TODO Make sure this logic is true
      dto.id
        .split('.')
        .slice(1)
        .join('.')
    ),
    name: get(dto, ['data', 'nameFormatted']),
  };

  // Calculate minutes/left (logic copied from S4L client)
  if (isPackage(dto) && (dto.balance || dto.balance === 0)) {
    subscription.minutes = dto.quota;
    subscription.left = dto.balance;
  } else if (hasNestedServices(dto)) {
    const { totalMinutes, availableMinutes } = dto.services
      .filter(isPackage)
      .reduce(
        (
          acc: {
            totalMinutes: number | undefined;
            availableMinutes: number | undefined;
          },
          cur
        ) => {
          const total = parseInt(`${cur.quota}`, 10);
          const available = parseInt(`${cur.balance}`, 10);

          if (!isNaN(total) && !isNaN(available)) {
            acc.totalMinutes = (acc.totalMinutes || 0) + total;
            acc.availableMinutes = (acc.availableMinutes || 0) + available;
          }

          return acc;
        },
        { totalMinutes: undefined, availableMinutes: undefined }
      );

    subscription.minutes = totalMinutes;
    subscription.left = availableMinutes;
  }

  subscription.unlimited = isUnlimited(subscription as any);
  subscription.upgradeEnabled = upgradeEnabled(
    subscription as SubscriptionData,
    updateRefs || [],
    subscriptionsUpgradeThreshold || 0.1
  );

  // Not sure about currency: can it ever be undefined?
  if (subscription.upgradeEnabled && currency) {
    subscription.upgradeUrl = formatString(
      upgradeUrl || '',
      currency,
      encodeURIComponent(get(dto, ['data', 'href'], ''))
    );
  }

  return subscription as SubscriptionData;
}

const mapToModel = (
  activeCalling: UserServicesDto[],
  activeCredit: UserServicesDto[],
  manageUrl: string,
  upgradeUrl: string
) => {
  const updateRefs = getUpdateRefs(activeCalling);

  const threshold = getSetting([
    'settings',
    'commerce',
    'subscriptionsUpgradeThreshold',
  ]);

  const creditCurrency = get(head(activeCredit), ['attributes', 'currency']);

  return orderBy(
    activeCalling.map(x =>
      mapTo(x, updateRefs, threshold, creditCurrency, manageUrl, upgradeUrl)
    ),
    ['upgradeEnabled'],
    ['desc']
  );
};

export default mapToModel;
