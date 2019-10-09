import { h } from 'preact';
import { SvgUse } from '../';

const attributes = {
  width: 512,
  height: 512,
  id: 'trending-badge'
};

export const TrendingBadge = () => (
  <symbol {...attributes}>
    <path d="M377.896 247.32l-15.2-107.775-100.934 40.72 40.006 23.1-37.795 65.46-65.46-37.794-64.49 111.71 36.12 20.853 43.638-75.582 65.462 37.795L337.89 224.22l40.006 23.1" fill="#FFF"/>
  </symbol>
);

export const UseTrendingBadge = ({...props}) => (
  <SvgUse id={attributes.id} viewBox={`0 0 ${attributes.width} ${attributes.height}`} {...props} />
);
