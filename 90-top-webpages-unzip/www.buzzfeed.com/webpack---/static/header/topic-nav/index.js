import { h } from 'preact';
import styles from './styles.scss';
import { Link } from '../link';
import { TopicFlyout } from '../topic-flyout';
import { Flyout, FlyoutToggle } from '../flyout';
import { breakpointLarge } from '../../sass/variables.scss';
import { UseCaretIcon } from '../svg/icons/caret';
import { withTheme } from '../withTheme';
import { I18n } from '../context';

function enableFlyout() {
  const { matches } = window.matchMedia(`(min-width:${breakpointLarge})`);
  return !!matches;
}

const TopicLink = withTheme(({ theme, flyout = null, ...props }) => {
  if (flyout) {
    return (
      <Flyout width={420} enabled={enableFlyout} location={'topicBar'} label={props.label}>
        <FlyoutToggle>
          <Link location={'topicBar'} className={`${styles.link} ${theme.link}`} {...props}>
            {props.emoji} {props.children}
            <UseCaretIcon className={styles.downCaret} aria-hidden={true} />
          </Link>
        </FlyoutToggle>
        <TopicFlyout location={props.label} {...flyout} />
      </Flyout>
    );
  }
  return <Link location={'topicBar'} className={`${styles.link} ${theme.link} ${props.mobileOnly ? styles.mdHide : ''}`} {...props} />;
});

export const ThemedTopicNav = withTheme(({ theme, topics, brand }) => {
  const allTopics = brand === 'news' ? [ { url: '/', name: 'BuzzFeed' } ].concat(topics) : topics;

  return (
    <I18n.Consumer>
      { i18n =>
        <nav className={`${theme.topicNavWrapper} ${styles.wrapper}`} aria-label={i18n.trending_topics}>
          <ul className={styles.topicNav}>
            {
              allTopics.map(({ url, name, label, ...data }) => (
                <li className={styles.topicNavItem}>
                  <TopicLink href={url} label={label || name} {...data}>{name}</TopicLink>
                </li>
              ))
            }
          </ul>
        </nav>
      }
    </I18n.Consumer>
  );
});
