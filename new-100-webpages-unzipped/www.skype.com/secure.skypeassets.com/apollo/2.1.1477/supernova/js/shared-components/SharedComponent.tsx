import React, { lazy, Suspense } from 'react';
import DetectOsBrowser, {
  DetectableBrowser,
  DetectableDeviceType,
  DetectableOS,
  DetectableOSVersion,
  Visibility,
} from '../lib/detectOsBrowser/DetectOsBrowser';

import { Widget } from '../types';

/*******************************************************************************************************
 * Types
 *******************************************************************************************************/

type Props = {
  component: Widget;
  className?: string;
  key?: number | string;
};

// Put components you want to be served in initial bundle here
let Components: any = {};
// Put components you want to be loaded from server on-demand here
let LazyComponentPaths: any = {};

/*******************************************************************************************************
 * Default component to be rendered
 *******************************************************************************************************/

const EmptyComponent = (props: any) => (
  <p>
    🐱‍👤 <strong>{props.type || 'Undefined Component Type'}</strong> is not
    available in Supernova
  </p>
);

const FallbackComponent = () => <div className="shared-component-fallback" />;

/*******************************************************************************************************
 * Resolver
 *******************************************************************************************************/

const lazyComponent = (path: any) => {
  const componentPath = LazyComponentPaths[path];
  return componentPath
    ? lazy(() => import(`./${componentPath}.component`))
    : null;
};

function resolve(item: Widget) {
  const ResolvedComponent: any =
    Components[item.type] || lazyComponent(item.type) || EmptyComponent;

  return (
    <Suspense fallback={<FallbackComponent />}>
      <ResolvedComponent {...item} />
    </Suspense>
  );
}

/*******************************************************************************************************
 * Visibility
 *******************************************************************************************************/

const osBrowser = { ...DetectOsBrowser };

function specified(visibility?: Visibility[]): visibility is Visibility[] {
  return !!visibility && visibility.length > 0;
}

function visibleForAll(visibility?: Visibility[]) {
  return !specified(visibility) || visibility.indexOf('all') !== -1;
}

function visibleFor(env: string | undefined, source: string[]) {
  return !!env && source.indexOf(env) !== -1;
}

function visibleForCurEnv(
  env: {
    browser: DetectableBrowser;
    device: DetectableDeviceType;
    os: { os: DetectableOS; osVersion?: DetectableOSVersion };
  },
  visibility: Visibility[] | undefined
) {
  return (
    specified(visibility) &&
    (visibleFor(env.browser, visibility) ||
      visibleFor(env.device, visibility) ||
      visibleFor(env.os.os, visibility) ||
      visibleFor(env.os.osVersion, visibility))
  );
}

function resolveVisible(item: Widget) {
  if (!item) {
    return null;
  }

  item.osBrowser = { ...osBrowser };

  if (
    visibleForAll(item.visibility) ||
    visibleForCurEnv(osBrowser, item.visibility)
  ) {
    return resolve(item);
  } else {
    return null;
  }
}

/*******************************************************************************************************
 * HOC
 *******************************************************************************************************/

const SharedComponent = (props: Props) => resolveVisible(props.component);

/*******************************************************************************************************
 * Map Helper Generator (map array of widgets)
 *******************************************************************************************************/

SharedComponent.Map = (components: any) => {
  const resolveComponents =
    components &&
    Array.isArray(components) &&
    components.map((item: any, key: number) => (
      <SharedComponent key={key} component={item} />
    ));
  return resolveComponents || null;
};

/*******************************************************************************************************
 * Bundle Setup
 *******************************************************************************************************/

// TODO Type
// Singleton
export function setupBundles(essential: any, onDemand: any) {
  Components = essential;
  LazyComponentPaths = onDemand;
}

export default SharedComponent;
