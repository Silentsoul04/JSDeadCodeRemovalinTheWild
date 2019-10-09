import { h } from 'preact';
import { SvgUse } from '../';

const attributes = {
  id: 'hamburger',
  width: 16,
  height: 12
};

export const HamburgerIcon = () => (
  <symbol {...attributes}>
    <g fill-rule="nonzero">
      <path d="M0 0h16v2H0zM0 5h16v2H0zM0 10h16v2H0z"/>
    </g>
  </symbol>
);

export const UseHamburgerIcon = ({...props}) => (
  <SvgUse id={attributes.id} viewBox={`0 0 ${attributes.width} ${attributes.height}`} {...props} />
);
