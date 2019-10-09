import React, { PropsWithChildren } from 'react';
import getClassNames from '../../lib/getClassNames/getClassNames';
import { BaseWidget, ComponentWithCmsProps } from '../../types';
import SharedComponent from '../SharedComponent';

/*******************************************************************************************************
 * Types
 *******************************************************************************************************/

export type WrapperWidget = BaseWidget<'Wrapper'> & {
  style?: any;
};

export type WrapperProps = ComponentWithCmsProps<
  WrapperWidget,
  PropsWithChildren<{}>
>;

/*******************************************************************************************************
 * UI
 *******************************************************************************************************/

export default function Wrapper(props: WrapperProps) {
  return (
    <div
      className={getClassNames('wrapper-component', props.classes)}
      style={props.style}>
      {props.children ? props.children : SharedComponent.Map(props.content)}
    </div>
  );
}
