import React, { PropsWithChildren } from 'react';

import getClassNames from '../../lib/getClassNames/getClassNames';
import { BaseWidget, ComponentWithCmsProps } from '../../types';

import SharedComponent from '../SharedComponent';

import './styles/row.scss';

/*******************************************************************************************************
 * Types
 *******************************************************************************************************/

export type RowWidget = BaseWidget<'Row', never>;

export type RowProps = ComponentWithCmsProps<RowWidget, PropsWithChildren<{}>>;

/*******************************************************************************************************
 * UI
 *******************************************************************************************************/

export default function Row(props: RowProps) {
  return (
    <div className={getClassNames('row supernova-row', props.classes)}>
      {props.children || SharedComponent.Map(props.content)}
    </div>
  );
}
