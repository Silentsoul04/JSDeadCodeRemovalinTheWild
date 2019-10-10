/**
 * 🗄 CMS aware component
 */
import React, { Fragment } from 'react';

import decode from '../../lib/decode/decode';
import getCmsProperties from '../../lib/getCmsProps/getCmsProps';

import { TextProps } from './types';

/*******************************************************************************************************
 * UI
 *******************************************************************************************************/

function constructComponent(props: TextProps) {
  const { value, classes, noDecode } = props;
  const { withLink, size } = getCmsProperties(props);
  const textProps = {
    className: classes,
  };

  if (withLink) {
    return React.createElement(size || 'p', {
      ...textProps,
      dangerouslySetInnerHTML: {
        __html: decode(value),
      },
    });
  }
  return React.createElement(
    size || 'p',
    textProps,
    noDecode ? value : decode(value)
  );
}

export default function Text(props: TextProps) {
  return <Fragment>{constructComponent(props)}</Fragment>;
}
