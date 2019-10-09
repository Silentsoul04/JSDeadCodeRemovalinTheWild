import React from 'react';
import PropTypes from 'prop-types';
import { NamespaceConsumer, NamespaceShape, withNamespace } from '@ux/namespace-component';
import { eventdist } from '@ux/component';

class Expander extends NamespaceConsumer {

  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      maxHeight: 0,
      hasOverflow: false
    };

    this.setDimensions = this.setDimensions.bind(this);
    this.element = React.createRef();
  }

  componentDidMount() {
    this.setDimensions();
    eventdist.on('resize', this.setDimensions);
  }

  componentDidUpdate() {
    // after children render, recalculate dimensions
    this.setDimensions();
  }

  componentWillUnmount() {
    eventdist.off('resize', this.setDimensions);
  }

  setDimensions() {
    const offsetTop = this.element.current.offsetTop + 42; // 42 = meaning of life
    const maxHeight = window.innerHeight - offsetTop - 150;
    const height = this.element.current.clientHeight;
    const hasOverflow = height > maxHeight;

    if (this.state.hasOverflow !== hasOverflow && maxHeight !== height) {
      this.setState({ hasOverflow });
      this.props.onOverflow && this.props.onOverflow(hasOverflow);
    }

    if (this.state.maxHeight !== maxHeight) {
      this.setState({ maxHeight });
    }
  }

  render() {
    const { hasOverflow, maxHeight } = this.state;
    let expanderElement = (
      <div ref={ this.element }>
        {this.props.children}
      </div>
    );

    if (hasOverflow) {
      expanderElement =  (
        <div ref={ this.element } className={ this.namespace('hc-expander') } style={{ maxHeight }}>
          {this.props.children}
        </div>
      );
    }

    return expanderElement;
  }
}

Expander.propTypes = {
  ...NamespaceShape,
  children: PropTypes.node,
  onOverflow: PropTypes.func
};

export default withNamespace(Expander);
