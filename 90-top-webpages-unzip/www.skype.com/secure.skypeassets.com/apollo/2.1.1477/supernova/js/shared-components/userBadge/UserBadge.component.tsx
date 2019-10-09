import defaultTo from 'lodash/defaultTo';
import get from 'lodash/get';
import head from 'lodash/head';
import isNil from 'lodash/isNil';
import React from 'react';

import decode from '../../lib/decode/decode';
import getCmsProps from '../../lib/getCmsProps/getCmsProps';
import { UserProfileType } from '../../lib/skypeUser/types';
import useSkypeUser from '../../lib/skypeUser/useSkypeUser';
import trackingTags from '../../lib/tracking/htmlTags';

import Button from '../button/Button.component';
import Icon from '../icon/Icon.component';
import { IconWidget } from '../icon/types';
import { ImageWidget } from '../image/types';
import SharedComponent from '../SharedComponent';
import { TextWidget } from '../text/types';
import { TextIconWidget } from '../textIcon/types';

import { UserBadgeProps } from './types';

import './userBadge.scss';

/*******************************************************************************************************
 * Content
 *******************************************************************************************************/

const editIconWidget: IconWidget = {
  classes: 'user-badge-icon edit',
  icon: '',
  link: '',
  properties: {},
  title: '',
  type: 'Icon',
};

const profileImgWidget: ImageWidget = {
  alt: '',
  classes: 'user-badge-profile-image round',
  imageType: 'background',
  type: 'Image',
  url: '',
};

const fullNameWidget: TextWidget = {
  classes: 'user-badge-full-name fontSizeH2',
  noDecode: true,
  properties: { size: 'p' },
  type: 'Text',
  value: '',
};

const emailWidget: TextWidget = {
  classes: 'user-badge-email',
  properties: {},
  type: 'Text',
  value: '',
};

const changePasswordWidget: TextIconWidget = {
  classes: 'user-badge-change-password lock',
  icon: '',
  iconPosition: 'left',
  type: 'TextIcon',
  value: '',
  withLink: false,
};

/*******************************************************************************************************
 * UI Elements
 *******************************************************************************************************/

const AvatarPlaceholder = () => (
  <div className="user-badge-avatar round placeholder">
    <Icon icon={''} ariaHidden />
  </div>
);

/*******************************************************************************************************
 * UI Container
 *******************************************************************************************************/

function getUserFullName(user: UserProfileType, signinName: string | null) {
  const firstName = defaultTo(get(user, 'firstname'), '');
  const lastName = defaultTo(get(user, 'lastname'), '');
  const username = defaultTo(get(user, 'username'), '');

  if (firstName === '' && lastName === '') {
    if (!isNil(signinName) && signinName !== '') return `${signinName}`;

    return username;
  }

  return `${firstName} ${lastName}`.trim();
}

export default function UserBadge(props: UserBadgeProps) {
  const { user, signinName } = useSkypeUser();

  const {
    editProfileUrl,
    editProfileText,
    changePasswordUrl,
    changePasswordText,
    editProfileTracking,
    changePasswordTracking,
  } = getCmsProps(props);

  // Edit
  editIconWidget.link = editProfileUrl;
  editIconWidget.title = editProfileText;
  editIconWidget.properties!.tracking = editProfileTracking;

  // Profile
  profileImgWidget.url = get(user, 'avatarUrl');

  // Name & Email
  fullNameWidget.value = getUserFullName(user, signinName);
  emailWidget.value = head(get(user, 'emails')) || '';

  // Change Password Link
  changePasswordWidget.value = changePasswordUrl ? (
    <a href={changePasswordUrl} {...trackingTags(changePasswordTracking)}>
      {decode(changePasswordText)}
    </a>
  ) : null;
  return (
    <div className="user-badge-component supernova-border-radius no-left-top theme-dark">
      <SharedComponent component={editIconWidget} />
      {user.avatarUrl ? (
        <SharedComponent component={profileImgWidget} />
      ) : (
        <AvatarPlaceholder />
      )}
      <SharedComponent component={fullNameWidget} />
      <SharedComponent component={emailWidget} />
      <Button
        classes="user-badge-edit-button noDesktop noLargeDesktop"
        properties={{
          buttonType: 'secondary',
          link: editProfileUrl,
          tracking: editProfileTracking,
        }}
        value={editProfileText}
      />
      <SharedComponent component={changePasswordWidget} />
    </div>
  );
}
