import { h, Component } from 'preact';
import styles from './styles.scss';
import Portal from 'preact-portal';
import { trackNavImpression } from '../tracking/google';

const FLYOUT_CLASS = 'js-main-nav-flyout';

export const FlyoutToggle = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export class FlyoutContainer extends Component {
  shouldComponentUpdate() { return false; }
  render() {
    return (
      <div className={FLYOUT_CLASS} />
    );
  }
}

export class Flyout extends Component {
  constructor() {
    super();
    this.state = {
      hovered: false,
      enabled: true,
      showFallback: true,
      impressionTracked: false
    };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
  }

  static defaultProps = {
    enabled: () => true
  }

  componentDidMount() {
    this.setState({
      showFallback: false
    });
  }

  getOffset() {
    // Center align the flyout against the toggle
    // But make sure it fits within the bounds of the screen
    const dimensions = this.toggle.getBoundingClientRect();
    const toggleWidth = dimensions.width;
    const toggleOffset = dimensions.x || dimensions.left;
    let leftOffset = (toggleOffset + (toggleWidth / 2)) - (this.props.width / 2);
    let isCentered = true;

    // right hand side
    if (leftOffset + this.props.width > document.body.clientWidth) {
      isCentered = false;
      leftOffset = document.body.clientWidth - this.props.width;
    }
    // left hand side
    if (leftOffset < 0) {
      isCentered = false;
      leftOffset = 0;
    }

    return { leftOffset, isCentered };
  }

  onMouseEnter() {
    this.toggleFlyout({ forceVisible: true });
  }

  onMouseLeave() {
    this.toggleFlyout({ forceVisible: false });
  }

  onTouchStart(ev) {
    if (this.props.enabled()) {
      ev.preventDefault();
      this.toggleFlyout({ delay: 0 });
    }
  }

  toggleFlyout({ forceVisible = !this.state.hovered, delay = 300 } = {}) {
    if (forceVisible) {
      clearTimeout(this.willHideFlyout);
      if (!this.state.impressionTracked) {
        trackNavImpression({ label: this.props.label, location: this.props.location });
      }
      let { leftOffset, isCentered } = this.getOffset();
      this.setState({
        ...this.state,
        hovered: true,
        // Calculating the below properties here rather than on CDM so it works after browser resize
        leftOffset,
        enabled: this.props.enabled(),
        showArrow: isCentered
      });
    } else {
      this.willHideFlyout = setTimeout(() =>
        this.setState({
          ...this.state,
          hovered: false,
          impressionTracked: true
        }),
      delay);
    }
  }

  render({children, width = 200, ...props}, state) {
    const flyoutToggle = children.filter(child => child.nodeName === FlyoutToggle);
    const flyoutContent = children.filter(child => child.nodeName !== FlyoutToggle);
    let inlineStyles = {
      width: `${width}px`,
    };
    if (state.leftOffset) {
      inlineStyles.left = state.leftOffset;
    }

    let flyoutInner = (
      <div className={styles.flyoutInner} style={inlineStyles} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        { state.showArrow && <span className={styles.arrow} /> }
        {flyoutContent}
      </div>
    );

    return (
      <div className={styles.flyout} onTouchStart={this.onTouchStart} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} {...props}>
        <div ref={toggle => this.toggle = toggle}>{ flyoutToggle }</div>
        { state.showFallback && <div style={'display: none'}>{flyoutInner}</div> }
        { state.enabled && state.hovered && <Portal into={`.${FLYOUT_CLASS}`}>{flyoutInner}</Portal> }
      </div>
    );
  }
}
