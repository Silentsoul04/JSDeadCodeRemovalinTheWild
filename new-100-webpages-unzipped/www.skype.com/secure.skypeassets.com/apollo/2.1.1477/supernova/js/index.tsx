import { ResolverType } from './data-resolver';
import runOnDev from './lib/debug/runOnDev';
import withPolyfill from './lib/detectOsBrowser/detectPolyfill';
import * as serviceWorker from './serviceWorker';

/*******************************************************************************************************
 * Global Init
 *******************************************************************************************************/

function init(dataSource: ResolverType, rootId: string = 'root') {
  withPolyfill(() => require('./Supernova').init(dataSource, rootId));
}

/*******************************************************************************************************
 * Auto Init (Dev)
 *******************************************************************************************************/
if (process.env.NODE_ENV === 'development') {
  runOnDev(function autoInitApp() {
    import('./devSkypeSettings').then(settings => {
      settings.init();
      init('file');
      import('./dev-tools/devTools').then(devTools => devTools.init());
    });
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

export { init };
