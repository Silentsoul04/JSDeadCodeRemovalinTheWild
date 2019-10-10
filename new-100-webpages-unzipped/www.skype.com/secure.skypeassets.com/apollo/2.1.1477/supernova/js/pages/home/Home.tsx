import React from 'react';
import getClassNames from '../../lib/getClassNames/getClassNames';
// Import components you want to be served in initial bundle here
import Button from '../../shared-components/button/Button.component';
// Import components you want to be served in initial bundle her
import Column from '../../shared-components/grid/Column.component';
import Row from '../../shared-components/grid/Row.component';
import Section from '../../shared-components/grid/Section.component';
import Icon from '../../shared-components/icon/Icon.component';
import IconContent from '../../shared-components/iconContent/IconContent.component';
import Image from '../../shared-components/image/Image.component';
import SharedComponent, {
  setupBundles,
} from '../../shared-components/SharedComponent';
import SkypeCredits from '../../shared-components/skypeCredits/SkypeCredits.component';
import Subscriptions from '../../shared-components/subscriptions/Subscriptions.component';
import Text from '../../shared-components/text/Text.component';
import TextIcon from '../../shared-components/textIcon/TextIcon.component';
import Toggler from '../../shared-components/toggler/Toggler.component';
import UserBadge from '../../shared-components/userBadge/UserBadge.component';
import Wrapper from '../../shared-components/wrapper/Wrapper.component';
import { Page } from '../../types';
import './styles/home.scss';

type DataType = {
  data: Page;
};

// Put components you want to be served in initial bundle here
const Components = {
  Button,
  Column,
  Icon,
  IconContent,
  Image,
  Row,
  Section,
  SkypeCredits,
  Subscriptions,
  Text,
  TextIcon,
  Toggler,
  UserBadge,
  Wrapper,
};

// Put components you want to be loaded from server on-demand here
const LazyComponentPaths = {
  ButtonDropdown: 'buttonDropdown/buttonDropdown',
  CallerId: 'caller-id/CallerId',
  Carousel: 'carousel/Carousel',
  CarouselItem: 'carouselItem/CarouselItem',
  Device: 'device/Device',
  DropdownButton: 'dropdownButton/DropdownButton',
  ExportContacts: 'export-contacts/ExportContacts',
  LanguageSelector: 'languageSelector/Languageselector',
  ManagerAdminSettings: 'manager-admin-settings/ManagerAdminSettings',
  ManagerSettings: 'manager-settings/ManagerSettings',
  PromoBanner: 'promoBanner/PromoBanner',
  SkypeNumber: 'skype-number/SkypeNumber',
  Tabs: 'tabs/Tabs',
  TextFlag: 'text-flag/TextFlag',
};

// Setup bundling for particular page
setupBundles(Components, LazyComponentPaths);

const Home = ({ data }: DataType) => (
  <div className={getClassNames('home', `sn-exp-${data.title}`)}>
    {data &&
      data.content.map((component: any, i: number) => (
        <SharedComponent key={i} component={component} />
      ))}
  </div>
);

export default Home;
