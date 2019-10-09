/**
 * 🗄 CMS aware component
 */
import React, { Fragment } from 'react';

import decode from '../../lib/decode/decode';
import getClassNames from '../../lib/getClassNames/getClassNames';
import getCMSProperties from '../../lib/getCmsProps/getCmsProps';
import trackingTags from '../../lib/tracking/htmlTags';

import Icon from '../icon/Icon.component';

import { ButtonProps, ButtonType } from './types';

import './button.scss';

/*******************************************************************************************************
 * Types
 *******************************************************************************************************/

// Button Element Types
type ButtonElementProps = {
  role?: string;
  type: string;
  className: string;
  title?: string;
  href?: string;
  onClick?: () => void | any;
};

/*******************************************************************************************************
 * Helper
 *******************************************************************************************************/

// Get Style
const getStyleType = (type: ButtonType): string | undefined => {
  if (type === 'primary') return 'btn primaryCta';
  if (type === 'secondary') return 'btn secondaryCta';
  if (type === 'outline') return 'btn outlinedCta';
  if (type === 'link') return 'linkCta';
  if (type === 'alert') return 'btn alertCta';
};

// Get Button Props
const getButtonProps = (props: ButtonProps): ButtonElementProps => {
  const { title, link, tracking, buttonType, size } = getCMSProperties(props);

  // Global Props
  const globalProps: ButtonElementProps = {
    ...trackingTags(tracking),
    className: getClassNames(getStyleType(buttonType), {
      [`btn-${size}`]: size,
    }),
    title,
    type: 'button',
  };

  // Link Props
  if (link) return { ...globalProps, href: link, role: 'button' };

  // Button Props
  return { ...globalProps, onClick: props.onClick };
};

/*******************************************************************************************************
 * UI
 *******************************************************************************************************/

// UI Button & Link
function ButtonLink(props: ButtonProps) {
  const { icon, value } = props;
  const { link } = getCMSProperties(props);

  const childrenComponents = props.children || (
    <Fragment>
      {decode(value)}
      {icon && <Icon {...{ icon }} />}
    </Fragment>
  );

  return React.createElement(
    link ? 'a' : 'button',
    getButtonProps(props),
    childrenComponents
  );
}

// UI Dropdown Button
function DropdownButton(props: ButtonProps) {
  const { value, icon, classes, onClick } = props;
  const { link } = getCMSProperties(props);
  return (
    <button className={getClassNames(classes)} type="button">
      {link ? (
        <span>
          <a href={link}>{value}</a>
          <span onClick={onClick}>{icon && <Icon {...{ icon }} />}</span>
        </span>
      ) : (
        <span>
          {value}
          {icon && (
            <span onClick={onClick}>
              <Icon {...{ icon }} />
            </span>
          )}
        </span>
      )}
    </button>
  );
}

/*******************************************************************************************************
 * Container
 *******************************************************************************************************/

export default function Button(props: ButtonProps) {
  const { classes } = props;
  const { buttonType } = getCMSProperties(props);
  return (
    <div className={getClassNames('button-component', classes)}>
      {buttonType === 'dropdown' ? (
        <DropdownButton {...props} />
      ) : (
        <ButtonLink {...props} />
      )}
    </div>
  );
}
