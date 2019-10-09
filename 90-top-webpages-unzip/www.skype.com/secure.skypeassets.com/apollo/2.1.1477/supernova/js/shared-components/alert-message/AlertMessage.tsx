import debounce from 'lodash/debounce';
import React, { useEffect, useState } from 'react';
import getClassNames from '../../lib/getClassNames/getClassNames';
import Button from '../button/Button.component';
import Section from '../grid/Section.component';
import Icon from '../icon/Icon.component';
import TextIcon from '../textIcon/TextIcon.component';

import './alertmessage.scss';
import { AlertMsgCmsProps, AlertState } from './types';

/*******************************************************************************************************
 * Ctx
 *******************************************************************************************************/

export const Ctx = React.createContext({});
export const { Consumer } = Ctx;

/*******************************************************************************************************
 * UI
 *******************************************************************************************************/

type AlertProps = AlertMsgCmsProps & AlertState & { close: any };

function Alert({
  message,
  action,
  actionName,
  close,
  closeBtnAria,
  closeBtnTracking,
}: AlertProps) {
  const [isSticky, setSticky] = useState(window.scrollY > 70);

  useEffect(() => {
    const listener = debounce(() => setSticky(window.scrollY > 70), 100);
    window.addEventListener('scroll', listener, { passive: true });
    return () => window.removeEventListener('scroll', listener);
  }, [isSticky]);
  return (
    <Section
      lazyLoad={false}
      classes={getClassNames('alert-message-component', { sticky: isSticky })}>
      <div className="alert-message-wrapper">
        <TextIcon icon="" iconPosition="left" value={message} />
        <div className="alert-message-actions">
          {action && (
            <Button
              onClick={action}
              properties={{ size: 'small', buttonType: 'alert' }}
              value={actionName}
            />
          )}
          <Button
            properties={{
              buttonType: 'link',
              title: closeBtnAria,
              tracking: closeBtnTracking,
            }}
            onClick={close}>
            <Icon icon="" />
          </Button>
        </div>
      </div>
    </Section>
  );
}

/*******************************************************************************************************
 * Container
 *******************************************************************************************************/

export default function AlertMessage(props: AlertMsgCmsProps) {
  const [state, setState] = useState<AlertState>({
    message: '',
    type: 'alert',
    visible: false,
  });

  // Actions
  const close = () => setState({ ...state, visible: false });
  const open = ({ message, action, actionName }: AlertState) =>
    setState({ ...state, visible: true, message, action, actionName });

  const ctxState = { close, open };
  return (
    <Ctx.Provider value={ctxState}>
      {state.visible && <Alert {...state} {...props} close={close} />}
      {props.children}
    </Ctx.Provider>
  );
}
