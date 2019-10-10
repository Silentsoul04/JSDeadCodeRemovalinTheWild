import React from 'react';

import { BaseWidget, ComponentWithCmsProps, Widget } from '../../types';

import Icon from '../icon/Icon.component';
import SharedComponent from '../SharedComponent';
import Text from '../text/Text.component';

import './iconContent.scss';

export type IconContentWidget = BaseWidget<'IconContent', never> & {
  icon: string;
  title: string;
  content: Widget[];
};

type IconContentProps = ComponentWithCmsProps<IconContentWidget, {}>;

export default function IconContent(props: IconContentProps) {
  return (
    <div className="supernova-text-content">
      <Icon {...{ icon: props.icon, classes: 'icon-content' }} />
      <Text
        classes="supernova-text-content-title fontSizeH3"
        properties={{ size: 'h3' }}
        value={props.title}
      />
      <div className="supernova-text-content-txt">
        {SharedComponent.Map(props.content)}
      </div>
    </div>
  );
}
