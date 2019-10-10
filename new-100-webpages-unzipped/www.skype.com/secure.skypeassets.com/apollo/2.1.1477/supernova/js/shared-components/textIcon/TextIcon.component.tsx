/**
 * 🗄 CMS aware component
 */
import React from 'react';

import getCmsProperties from '../../lib/getCmsProps/getCmsProps';

import Icon from '../icon/Icon.component';
import { IconProps } from '../icon/types';
import Text from '../text/Text.component';
import { TextProps } from '../text/types';

import { TextIconProps } from './types';

import './textIcon.scss';

// UI
function renderTextAndIcon(props: TextIconProps) {
  const { classes, withLink, icon, iconPosition, children, value } = props;
  const { textClasses, textSize } = getCmsProperties(props);
  const iconProps: IconProps = {
    ariaHidden: true,
    icon,
  };

  const text: TextProps = {
    classes: textClasses,
    properties: {
      size: textSize,
      withLink,
    },
    value: value || '',
  };

  if (iconPosition === 'left' || iconPosition === 'top') {
    return (
      <div className={`text-icon icon-${iconPosition} ${classes}`}>
        <Icon {...iconProps} />
        <div className="text-icon-content">
          {children || <Text {...text} />}
        </div>
      </div>
    );
  } else {
    return (
      <div className={`text-icon icon-${iconPosition} ${classes}`}>
        <div className="text-icon-content">
          {children || <Text {...text} />}
        </div>
        <Icon {...iconProps} />
      </div>
    );
  }
}

export default function TextIcon(props: TextIconProps) {
  return renderTextAndIcon(props);
}
