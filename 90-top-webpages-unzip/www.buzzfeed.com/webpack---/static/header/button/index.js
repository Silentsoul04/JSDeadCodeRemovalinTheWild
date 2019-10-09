import { h, Component } from 'preact';
import { trackNavClick } from '../tracking/google';

export class Button extends Component {
  clickHandler({ onClick, label, location }) {
    return evt => {
      trackNavClick({ label, location });
      return onClick(evt);
    };
  }

  render({ onClick, children, label, location, ...props }) {
    return (
      <button onClick={this.clickHandler({ onClick, label, location })} type="button" {...props}>{children}</button>
    );
  }
}
