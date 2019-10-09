import styles from './styles.scss';
import { h, Component } from 'preact';
import cookies from '@buzzfeed/buzzblocks/js/services/cookies';
import { I18n } from '../context';

const editions = [
  { code: 'us', name: 'US' },
  { code: 'uk', name: 'UK' },
  { code: 'au', name: 'Australia' },
  { code: 'br', name: 'Brasil' },
  { code: 'ca', name: 'Canada' },
  { code: 'de', name: 'Deutschland' },
  { code: 'in', name: 'India' },
  { code: 'ja-jp', name: 'Japan' },
  { code: 'mx', name: 'Mexico' },
];

const editionSelectId = 'js-header-edition-select';

export default class EditionSelect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      edition: 'us'
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      edition: cookies.get('country', 'us')
    });
  }

  handleSelectChange(event) {
    cookies.set({
      name: 'country',
      value: event.target.value,
      domain: window.BZFD.Config.env === 'dev' ? 'buzzfeed.io' : 'buzzfeed.com',
      days: 180
    });
    window.location = '/';
  }

  render(props, { edition }) {
    return (
      <I18n.Consumer>
        {i18n =>
          <div className={styles.container}>
            <label for={editionSelectId}>{i18n.edition}</label>
            <select id={editionSelectId} className={styles.select} value={edition} onChange={this.handleSelectChange}>
              {
                editions.map(({ code, name }) => <option data-bfa={`@a:Main-Nav;@d:${name};`} value={code}>{name}</option>)
              }
            </select>
          </div>
        }
      </I18n.Consumer>
    );
  }
}
