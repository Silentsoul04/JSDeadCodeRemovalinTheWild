import React, { PropsWithChildren } from 'react';

import getClassNames from '../../lib/getClassNames/getClassNames';
import { BaseWidget, ComponentWithCmsProps } from '../../types';

import SharedComponent from '../SharedComponent';

import './styles/column.scss';

/*******************************************************************************************************
 * Types
 *******************************************************************************************************/

export type ColumnWidget = BaseWidget<'Column', never> & {
  order?: number;
  width?: string | number;
};

export type ColumnProps = ComponentWithCmsProps<
  ColumnWidget,
  PropsWithChildren<{}>
>;

/*******************************************************************************************************
 * Column Size
 *******************************************************************************************************/

const getColSize = (size: string | number | undefined) => {
  if (!size) return 100;
  if (!isNaN(size as number)) return size;

  const [colSize, grid] = size.toString().split('/');
  return (Number(colSize) * 100) / Number(grid);
};

/*******************************************************************************************************
 * UI
 *******************************************************************************************************/

export default function Column(props: ColumnProps) {
  const { width, order, children, content, classes } = props;

  const colSize = getColSize(width);
  const styles = {
    flex: `0 0 ${colSize}%`,
    maxWidth: colSize + '%',
    msFlex: `0 0 ${colSize}%`,
    order: order || 1,
  };
  return (
    <div style={styles} className={getClassNames('supernova-column', classes)}>
      {children || SharedComponent.Map(content)}
    </div>
  );
}
