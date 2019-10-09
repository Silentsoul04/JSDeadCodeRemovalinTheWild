import React from 'react';
import { Code } from 'react-content-loader';
import { NamespaceConsumer, withNamespace } from '@ux/namespace-component';
class Placeholder extends NamespaceConsumer {
  render() {
    return (
      <div className={ this.namespace('hc-item card ux-card p-a-1 p-t-2') }>
        <Code height={ '105' } width={ '285' }/>
      </div>);
  }
}

export default withNamespace(Placeholder);
