import { h, Component } from 'preact';
import { trackNavClick } from '../tracking/google';
import { Config } from '../context';

export class Link extends Component {
  clickHandler({ onClick, label, location }) {
    return evt => {
      trackNavClick({ label, location });
      return onClick(evt);
    };
  }

  render({ href, children, label, location, onClick = () => {}, ...props }) {
    return (
      <Config.Consumer>
        {config => {
          const url = href.match(/^https?:/) ? href : `${config.bf_url}${href}`;
          return <a href={url} onClick={this.clickHandler({ onClick, label, location })} {...props}>{children}</a>;
        }}
      </Config.Consumer>
    );
  }
}
