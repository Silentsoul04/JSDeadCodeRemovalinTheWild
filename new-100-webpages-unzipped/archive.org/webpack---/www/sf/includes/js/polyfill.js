// ( was '@babel/polyfill' - see https://babeljs.io/blog/2019/03/19/7.4.0 )
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// additional polyfills, esp. for MSIE11
import 'core-js/features/array/from';
import 'core-js/features/object/assign';
import 'core-js/features/promise';

import '@evanminto/element.details';
import 'element-scroll-polyfill';

// NOTE: we _also_ include following file directly to the browser (ie: dont try to babel/pack it)
// and this gets us Web Components polyfill if/as needed (esp. for MSIE11)
//   https://github.com/webcomponents/polyfills/tree/master/packages/webcomponentsjs
// But right now we have to _not_ load it for A/V pages due to it fatal-ing jwplayer...
// `git grep -C5 POLLYFAIL`