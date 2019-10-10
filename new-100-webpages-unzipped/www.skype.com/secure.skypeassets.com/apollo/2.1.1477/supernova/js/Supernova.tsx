import React from 'react';
import ReactDOM from 'react-dom';

import resolve, { ResolverType } from './data-resolver';
import runOnDev from './lib/debug/runOnDev';
import MasterPage from './shared-components/master-page/MasterPage';

/*******************************************************************************************************
 * Run only on dev
 *******************************************************************************************************/
if (process.env.NODE_ENV === 'development') {
  runOnDev(function a11yCheck() {
    import('react-a11y').then(a11y => {
      // Rules
      // https://github.com/reactjs/react-a11y/tree/master/docs/rules
      const rules = {
        'aria-role': 'warn',
        'aria-unsupported-elements': 'warn',
        'click-events-have-key-events': 'off',
        'hidden-uses-tabindex': 'warn',
        'img-redundant-alt': ['warn', ['image', 'photo', 'foto', 'bild']],
        'img-uses-alt': 'warn',
        'interactive-supports-focus': 'warn',
        'label-has-for': 'warn',
        'mouse-events-have-key-events': 'warn',
        'no-access-key': 'warn',
        'no-hash-ref': 'warn',
        'no-onchange': 'warn',
        'onclick-uses-role': 'warn',
        'tabindex-no-positive': 'warn',
        'tabindex-uses-button': 'warn',
      };
      a11y.default(React, ReactDOM, { rules });
    });
  });
}

/*******************************************************************************************************
 * Supernova Bootstrap
 *******************************************************************************************************/

const init = (dataSource: ResolverType, rootId: string = 'root') =>
  resolve(dataSource).then(data =>
    ReactDOM.render(<MasterPage {...data} />, document.getElementById(rootId))
  );

export { init };
