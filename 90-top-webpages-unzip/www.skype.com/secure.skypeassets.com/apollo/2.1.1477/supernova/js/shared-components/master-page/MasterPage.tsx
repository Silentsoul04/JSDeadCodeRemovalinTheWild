import React from 'react';
import getCmsProps from '../../lib/getCmsProps/getCmsProps';
import Home from '../../pages/home/Home';
import GlobalAlert from '../alert-message/AlertMessage';

import '../../styles/global.scss';
import { MasterPageWidget } from './types';

export default function MasterPage(props: MasterPageWidget) {
  const { alertComponent } = getCmsProps(props);
  return (
    <GlobalAlert {...alertComponent}>
      <Home data={props.page} />
    </GlobalAlert>
  );
}
