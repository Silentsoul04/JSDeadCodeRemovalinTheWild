/**
 * 🗄 CMS aware component
 */
import React from 'react';
import LazyLoad from 'react-lazyload';

import getClassNames from '../../lib/getClassNames/getClassNames';

import './image.scss';
import { ImageProps } from './types';

// UI
export default function Image(props: ImageProps) {
  const { alt, height = 200 } = props;

  // Accessibility
  // The `alt` prop cannot be empty string if role="presentation" is not set.
  const role = !alt ? 'presentation' : undefined;

  return (
    <div
      className={getClassNames(
        'image-component',
        props.classes,
        props.imageType
      )}>
      {props.imageType === 'background' && (
        <span
          className="image"
          style={{ backgroundImage: `url(${props.url})` }}
        />
      )}
      {props.imageType !== 'background' && (
        <LazyLoad height={height} once>
          <img src={props.url} alt={alt} role={role} />
        </LazyLoad>
      )}
    </div>
  );
}
