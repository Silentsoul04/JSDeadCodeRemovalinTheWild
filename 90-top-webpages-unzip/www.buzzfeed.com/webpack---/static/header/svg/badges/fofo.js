import { h } from 'preact';
import { SvgUse } from '../';

const attributes = {
  width: 1024,
  height: 1024,
  id: 'fofo-badge'
};

export const FofoBadge = () => (
  <symbol {...attributes}>
    <path fill="#fe0" d="M955.3 256C814 11.2 500.9-72.7 256 68.7 11.2 210-72.7 523.1 68.7 768 210 1012.8 523.1 1096.7 768 955.3 1012.8 814 1096.7 500.9 955.3 256z"/>
    <path id="fofo" class="svg-gray" d="M291.8 625.1l61.8 107.1-59 34-61.8-107.1-26.2 15.1-29.5-51.1 26.2-15.1-4.2-7.2c-19.1-33.1-7.3-70.9 27.7-91.1 18.3-10.6 41.3-16.9 59.3-11.5l-2.4 45c-6.1-2.2-11.5-1.7-18 2.1-7.5 4.3-12.2 13.6-7.7 21.5l4.2 7.2 32.1-18.5 29.5 51.1-32 18.5zm229.9-95.6c25.5 44.2 15.3 102.1-41.1 134.6-56 32.3-111.3 12.3-136.8-31.9-25.5-44.2-15.1-101.8 40.9-134.1 56.4-32.6 111.4-12.8 137 31.4zm-60.6 35c-10-17.4-27.9-24.9-46.3-14.3-18 10.4-20.4 29.7-10.4 47.1 10.2 17.7 28.1 25.3 46.1 14.9 18.4-10.7 20.8-30 10.6-47.7zM627 431.6l-29.5-51.1-32.1 18.5-4.2-7.2c-4.5-7.9.2-17.1 7.7-21.5 6.6-3.8 11.9-4.3 18-2.1l2.4-45c-17.9-5.4-41 .9-59.3 11.5-35 20.2-46.8 58.1-27.7 91.1l4.2 7.2-26.2 15.1 29.5 51.1 26.2-15.1 61.8 107.1 59-34L595 450.1l32-18.5zm197.7-77.1c25.5 44.2 15.3 102.1-41.1 134.6-56 32.3-111.3 12.3-136.8-31.9-25.5-44.2-15.1-101.8 40.9-134.1 56.4-32.5 111.5-12.8 137 31.4zm-60.5 35c-10-17.4-27.9-24.9-46.3-14.3-18 10.4-20.4 29.7-10.4 47.1 10.2 17.7 28.1 25.3 46.1 14.9 18.4-10.7 20.8-30 10.6-47.7z"/>
  </symbol>
);

export const UseFofoBadge = ({...props}) => (
  <SvgUse id={attributes.id} viewBox={`0 0 ${attributes.width} ${attributes.height}`} {...props} />
);
