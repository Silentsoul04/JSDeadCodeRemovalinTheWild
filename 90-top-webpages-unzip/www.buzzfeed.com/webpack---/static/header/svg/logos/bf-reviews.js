import { h } from 'preact';
import { SvgUse } from '../';

const attributes = {
  width: 92,
  height: 18,
  id: 'bf-reviews-logo'
};

export const BuzzFeedReviewsLogo = () => (
  <symbol {...attributes}>
    <path d="M27.36 8.72c1.16 0 1.73-.4 1.73-1.17s-.57-1.2-1.73-1.2h-4v2.27zM21.93 5h5.47c1.91 0 3.14.75 3.14 2.46a2.13 2.13 0 0 1-1.91 2.24l1.91 3.3h-1.6L27 9.88h-3.78V13h-1.46z"/>
    <path d="M12.35 8.64l-.52-3.59L8.42 6.4l1.35.77L8.5 9.36 6.29 8.1l-2.17 3.72 1.21.7L6.8 10l2.21 1.26 1.98-3.39 1.36.77z"/>
    <path d="M32.56 4.96h7.62v1.33h-6.1v2.03h5.07v1.24h-5.11v2.26h6.25v1.21h-7.73V4.96z"/>
    <path d="M41.59 4.96h1.62l3.52 6.67 3.53-6.67h1.5l-4.25 8.14h-1.66l-4.26-8.14z"/>
    <path d="M53.44 13.03h1.48V4.96h-1.48v8.07z"/>
    <path d="M57.32 4.96h7.62v1.33h-6.09v2.03h5.04v1.24h-5.08v2.26h6.25v1.21h-7.74V4.96z"/>
    <path d="M66.41 4.96h1.6l2.65 6.22 2.57-6.22h1.52l2.57 6.22 2.69-6.22h1.49l-3.47 8.08h-1.49l-2.61-6.26-2.59 6.26h-1.46l-3.47-8.08z"/>
    <path d="M82.33 10.86l1.37-.34C84 11.39 85 12 87 12s2.91-.4 2.91-1.15-1.14-1-3-1.24-4.12-.51-4.12-2.43c0-1.51 1.43-2.39 4.1-2.39s3.92 1 4.31 1.88l-1.37.49c-.3-.7-1.2-1.17-3-1.17s-2.61.36-2.61 1 1 1 2.78 1.19 4.42.51 4.42 2.5c0 1.34-1.06 2.44-4.34 2.44s-4.38-1.09-4.76-2.31"/>
    <path d="M8.31 2a7.08 7.08 0 0 0-7.15 7 7.08 7.08 0 0 0 7.11 7 7.08 7.08 0 0 0 7.14-7 7.1 7.1 0 0 0-7.1-7m0 15.24A8.26 8.26 0 0 1 0 9 8.26 8.26 0 0 1 8.31.8a8.26 8.26 0 0 1 8.3 8.2 8.27 8.27 0 0 1-8.31 8.2"/>
  </symbol>
);

export const UseBuzzFeedReviewsLogo = ({...props}) => (
  <SvgUse {...attributes} viewBox={`0 0 ${attributes.width} ${attributes.height}`} {...props} />
);
