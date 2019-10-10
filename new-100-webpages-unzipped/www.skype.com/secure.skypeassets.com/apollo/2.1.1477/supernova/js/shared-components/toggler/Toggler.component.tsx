import React, { Fragment, useEffect, useState } from 'react';

import dynamicPlaceholder from '../../lib/dynamicPlaceholder/dynamicPlaceholder';

import SharedComponent from '../SharedComponent';

export type TogglerProps = {
  isDataLoading: boolean;
  passed: boolean | undefined;
  afterConditionContent: any;
  defaultContent: any;
  timer?: number;
  fallback?: React.ReactNode;
};

export default function Toggler(props: TogglerProps) {
  const [loading, setLoading] = useState(true);
  const [onOff, setOnOff] = useState(true);
  const {
    afterConditionContent,
    defaultContent,
    passed,
    isDataLoading,
  } = props;
  const components = passed ? afterConditionContent : defaultContent;

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), props.timer);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isDataLoading && !loading) setOnOff(false);
  }, [isDataLoading, loading]);

  return (
    <Fragment>
      {onOff ? (
        dynamicPlaceholder(props.fallback)
      ) : (
        <Fragment>
          {React.isValidElement(components)
            ? components
            : SharedComponent.Map(components)}
        </Fragment>
      )}
    </Fragment>
  );
}

Toggler.defaultProps = {
  timer: 1500,
};
