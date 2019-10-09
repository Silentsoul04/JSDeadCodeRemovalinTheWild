import * as components from './index';

window.ux = window.ux || {};

//
// Expose components in ux scope.
//
Object.keys(components).forEach(component => {
  window.ux[component] = components[component];
});



// WEBPACK FOOTER //
// ./js/build.js