/**
 * 🗄 CMS aware component
 */
import React from 'react';

import decode from '../../lib/decode/decode';
import getClassNames from '../../lib/getClassNames/getClassNames';
import getCmsProps from '../../lib/getCmsProps/getCmsProps';
import trackingTags from '../../lib/tracking/htmlTags';

import { IconProps } from './types';

import './icon.scss';

/*******************************************************************************************************
 * UI
 *******************************************************************************************************/

export default function Icon(props: IconProps) {
  const { ariaHidden, title } = props;
  const { size, label, labelPosition, tracking } = getCmsProps(props);
  const styleIcon = { fontSize: size, lineHeight: 2 };

  const decodedTitle = decode(title);

  return (
    <div
      className={getClassNames('icon-component', props.classes, labelPosition)}>
      {label && (labelPosition === 'left' || labelPosition === 'top') && (
        <span>{label}</span>
      )}
      {props.link && (
        <a
          href={props.link}
          style={styleIcon}
          aria-label={decodedTitle}
          title={decodedTitle}
          {...trackingTags(tracking)}>
          {props.icon}
        </a>
      )}
      {!props.link && (
        <span
          aria-hidden={ariaHidden || !!label}
          aria-label={decodedTitle}
          title={decodedTitle}
          style={styleIcon}>
          {props.icon}
        </span>
      )}
      {label &&
        (labelPosition === 'right' ||
          labelPosition === 'bottom' ||
          !labelPosition) && <span>{label}</span>}
    </div>
  );
}

Icon.defaultProps = {
  ariaHidden: false,
};
