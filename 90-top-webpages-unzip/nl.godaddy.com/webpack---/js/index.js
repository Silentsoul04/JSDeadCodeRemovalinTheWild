//
// (Explicit Dependencies) Import UXCore2 components.
//
import Accordion from '@ux/accordion';
import Alert from '@ux/alert';
import Button from '@ux/button';
import ButtonSet from '@ux/button-set';
import Checkbox from '@ux/checkbox';
import CheckboxGroup from '@ux/checkbox-group';
import Collapsible from '@ux/collapsible';
import Component from '@ux/component';
import Criteria from '@ux/criteria';
import Dropdown from '@ux/dropdown';
import Fieldset from '@ux/fieldset';
import Form from '@ux/form';
import FormElement from '@ux/form-element';
import FormGroup from '@ux/form-group';
import Growl from '@ux/growl';
import Icon from '@ux/icon';
import MessageOverlay from '@ux/message-overlay';
import Modal from '@ux/modal';
import Pagination from '@ux/pagination';
import Password from '@ux/password';
import Pivots from '@ux/pivot';
import ProgressBar from '@ux/progress-bar';
import ProgressSteps from '@ux/progress-steps';
import QuantitySelector from '@ux/quantity-selector';
import Radio from '@ux/radio';
import RadioGroup from '@ux/radio-group';
import Remaining from '@ux/remaining';
import Search from '@ux/search';
import Spinner from '@ux/spinner';
import Stars from '@ux/stars';
import Table from '@ux/table';
import Tabs from '@ux/tabs';
import TelephoneInput from '@ux/telephone-input';
import Toggle from '@ux/toggle';
import Tooltip from '@ux/tooltip';
import request from '@godaddy/request';
import trfq from 'react-trfq';
import * as utils from '@ux/util';
import * as styles from '@ux/inline-styles';
import * as containers from '@ux/containers';

//
// (Implicit Dependencies) Import other UXCore2 components.
// These components still need to be exported because they are
// useful. We do not take them as explicit dependencies to avoid
// duplication with other explicit depdendencies that depend on them.
//
import * as NamespaceComponent from '@ux/namespace-component';
import Transition from '@ux/transition';

//
// Motivation (crobbins): Webpack loaders are circular reference rabbit holes. Based on
// anecdotal research any loader (such as `versions-loader.js`) will only execute if
// the target file exists – EVEN IF – the contents of that file are entirely ignored.
// This fact combined with that for (at least some) backwards compatibility it is prudent
// to continue exposing this deep version list through Node.js for isomorphic / universal
// purposes leads to the current implementation:
//
// - If no loader specified for "versions.static.js" in ANY `webpack.config.js` building this
//   then we will expose the versions created **at publish-time**.
// - If the `versions-loader.js` is provided (and mapped to /versions\.static\.js$/ then the
//   **build-time** versions in `node_modules/@ux/**/package.json` will be exposed statically.
//
import versions from './versions.static.js';

// Babel7 doesn't attach __esModule onto `import *`s even if they are actually es modules.
// For now, manually attach them for compatibility
[utils, styles, containers, NamespaceComponent].forEach(function (thing) {
  Object.defineProperty(thing, '__esModule', {
    value: true
  });
});

//
// Also export Components to allow other applications depend directly on
// UXCore2. This cannot be done dynamically by destructuring the components as
// this would violate the assumption of statically defined imports/exports.
//
// Note: do NOT export as default, it will prevent `{ [Component] }` like imports.
//
export {
  Accordion,
  Alert,
  Button,
  ButtonSet,
  Checkbox,
  CheckboxGroup,
  Collapsible,
  Component,
  containers,
  Criteria,
  Dropdown,
  Fieldset,
  Form,
  FormElement,
  FormGroup,
  Growl,
  Icon,
  MessageOverlay,
  Modal,
  NamespaceComponent,
  Pagination,
  Password,
  Pivots,
  ProgressBar,
  ProgressSteps,
  QuantitySelector,
  Radio,
  RadioGroup,
  Remaining,
  Search,
  Spinner,
  Stars,
  Table,
  Tabs,
  TelephoneInput,
  Toggle,
  Tooltip,
  Transition,
  request,
  styles,
  trfq,
  utils,
  versions
};



// WEBPACK FOOTER //
// ./js/index.js