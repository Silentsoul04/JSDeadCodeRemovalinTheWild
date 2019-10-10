import React, { Fragment, PropsWithChildren } from 'react';
import LazyLoad from 'react-lazyload';

import getClassNames from '../../lib/getClassNames/getClassNames';
import getCmsProps from '../../lib/getCmsProps/getCmsProps';

import { BaseWidget, ComponentWithCmsProps } from '../../types';

import SharedComponent from '../SharedComponent';

/*******************************************************************************************************
 * Types
 *******************************************************************************************************/

export type SectionWidget = BaseWidget<
  'Section',
  {
    background?: string;
  }
>;

export type SectionProps = ComponentWithCmsProps<
  SectionWidget,
  PropsWithChildren<{
    lazyLoad?: boolean;
  }>
>;

/*******************************************************************************************************
 * UI
 *******************************************************************************************************/

const LazyWrapper = ({ children }: any) => (
  <LazyLoad scroll once height={300}>
    {children}
  </LazyLoad>
);

export default function Section(props: SectionProps) {
  const { lazyLoad = true } = props;
  const { background } = getCmsProps(props);

  const sectionStyles = {
    backgroundImage: background ? `url(${background})` : '',
    backgroundSize: background ? 'cover' : '',
  };

  const Wrapper = lazyLoad ? LazyWrapper : Fragment;

  return (
    <Wrapper>
      <section
        id={props.id}
        style={sectionStyles}
        className={getClassNames('section-component', props.classes)}>
        <div className="content">
          {props.children || SharedComponent.Map(props.content)}
        </div>
      </section>
    </Wrapper>
  );
}
