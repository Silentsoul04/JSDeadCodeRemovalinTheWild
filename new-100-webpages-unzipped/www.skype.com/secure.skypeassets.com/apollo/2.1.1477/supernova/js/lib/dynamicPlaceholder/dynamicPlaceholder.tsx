import React from 'react';
import './dynamicPlaceholder.scss';

const DynamicPlaceholder = (WComponent: any) => {
  if (WComponent) {
    const Element = React.createElement(
      'div',
      { className: 'supernova-dynamic-placeholder' },
      React.createElement(WComponent)
    );
    return Element;
  }
};

export default DynamicPlaceholder;
