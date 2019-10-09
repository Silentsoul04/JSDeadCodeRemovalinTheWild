
import { h } from 'preact';
import { SvgUse } from '..';

const attributes = {
  width: 1217,
  height: 150,
  id: 'bfn-brand-logo'
};

const tagLineAttributes = {
  width: 495,
  height: 116,
  id: 'bfn-tagline'
};

export const BuzzFeedNewsBrandLogo = () => (
  <symbol {...attributes}>
    <path d="M8.5 138.3c3.1-2.9 4.7-7.1 4.4-11.3V27.3c.3-4.2-1.3-8.4-4.4-11.3L0 7.1v-.9h62.4c38.5 0 49.7 12.3 49.7 32.8v1c0 16.4-12.7 31.1-42.9 34.4 35 1.3 49.4 13.1 49.4 35v1.1c0 26.1-19.2 37.6-55.7 37.6H0v-.9l8.5-8.9zm37-65.7h13.3c14.8 0 20.4-4.6 20.4-29.4v-2.7c0-24.8-5.7-29.4-20.4-29.4H45.5v61.5zM84 112.8V108c0-25.2-7-30.8-26-30.8H45.5v59c0 5.2 1.9 7.3 10.2 7.3H58c19 0 26-5.5 26-30.7zM127.3 63c0-7-.8-9-4.4-12.3l-5.5-4.8V45h40.2v72.8c0 10.2 3.7 14.8 13.4 14.8 4.3-.3 8.6-1.4 12.5-3.3V63c0-5.4-.8-6.8-4.4-10l-8.5-7.1V45h42.9v87.8c0 4.8.8 6.5 4.4 10l4.6 4.4v.9h-37.4l-.8-14c-7.7 10.2-18.2 15.8-29.6 15.8-16.9 0-27.5-10.5-27.5-29.4l.1-57.5zm154.5-13.4h-16.4c-7.3 0-9.2.9-13.4 7.7l-21.5 35h-.9V45h80.7v12.9l-52.7 85.7h15.3c7.3 0 9.2-.9 13.4-7.7l22.7-37h.9v49.2h-80.7v-12.9l52.6-85.6zm92.4 0h-16.4c-7.3 0-9.2.9-13.4 7.7l-21.5 35h-.9V45h80.7v12.9L350 143.6h15.3c7.3 0 9.2-.9 13.4-7.7L401.4 99h.9v49.2h-80.7v-12.9l52.6-85.7zm44.8 88.7c3.1-2.9 4.7-7.1 4.4-11.3V27.3c.3-4.2-1.3-8.4-4.4-11.3l-8.5-8.8v-1h108.1v46.5h-.9l-23-33.3c-5.2-7.3-7.5-8.5-16.4-8.5H456v63.6h16.6c3.9 0 6.1-1.1 8.8-5.2l17.1-24.8h.9v64.6h-.9l-17.1-24.8c-2.7-4-5-5.2-8.8-5.2H456v48.1c0 3.7 1.1 5.9 5.5 8.8l16.6 11.3v.9h-67.6v-.9l8.5-9zM551.9 150c-26.5 0-44.4-20.6-44.4-51.7v-.6c0-31.1 21.5-54.5 44.8-54.5 23.2 0 37.6 13.6 37.6 35.9v7.7h-52.7c.8 30.9 13.3 44.2 30.6 44.2 8.2-.1 16.2-2.3 23.2-6.5h.9v6.3c-9.3 11.2-25 19.2-40 19.2zm-14.6-67.8h27.1V68.6c0-16.6-3.9-21.2-12.1-21.2-10.9 0-15 10.2-15 32.3v2.5zM637.8 150c-26.5 0-44.4-20.6-44.4-51.7v-.6c0-31.1 21.5-54.5 44.8-54.5s37.6 13.6 37.6 35.9v7.7h-52.7c.8 30.9 13.3 44.2 30.6 44.2 8.2-.1 16.2-2.3 23.2-6.5h.9v6.3c-9.3 11.2-25 19.2-40 19.2zm-14.7-67.8h27.1V68.6c0-16.6-3.9-21.2-12.1-21.2-10.9 0-15 10.2-15 32.3v2.5zm56.2 14c0-34 22.9-53 49.7-53 6.5.1 12.9 1.3 19 3.7V28.6c0-5.4-.9-6.7-4.4-8.7l-14.9-8.8v-.9L777.2 0h.9v128.6c0 5.2.9 7.7 4.4 11.3l7.7 7.3v.9h-40.5l-.8-14.4c-7.1 10.2-18.7 16.2-31.1 16.2-22.9 0-38.5-19.6-38.5-52.9v-.8zm54 36.3c5.1-.2 10.2-1.4 14.8-3.7V82.2c0-25.4-7.9-34.8-19-34.8-12.1 0-19.6 10.2-19.6 36.9V87c.1 32.1 10.3 45.5 23.8 45.5zm83.9-120.9l-4.8-4.4v-1H857l59 97.8V54.5c0-7-1.7-11.8-5.9-19l-17-28.4v-.9h42.2v.9L924 37.6c-2.4 5.4-3.5 11.1-3.3 16.9v93.6h-17.5L834.4 33.9c-6.2-10.5-10.9-16.4-17.2-22.3zM974.3 150c-26.5 0-44.4-20.6-44.4-51.7v-.6c0-31.1 21.5-54.5 44.8-54.5 23.2 0 37.6 13.6 37.6 35.9v7.7h-52.7c.8 30.9 13.3 44.2 30.6 44.2 8.2-.1 16.2-2.4 23.2-6.5h.9v6.3c-9.4 11.2-25.1 19.2-40 19.2zm-14.8-67.8h27.1V68.6c0-16.6-3.9-21.2-12.1-21.2-10.9 0-15 10.2-15 32.3v2.5zm48.8-34.5l-1.9-1.9v-.9h49v.9l-4.2 4.8c-2.9 2.8-3.9 7.1-2.5 10.9l15 54 12.7-46.6-6.8-23V45h31.1l20.8 71.3 8.5-29.4c1.3-4.3 1.3-8.9 0-13.3l-8.1-27.6v-.9h33.3v.9l-3.7 4.8c-6.7 8.7-12.7 20.8-17.1 36.1l-17.7 61.3h-17.1l-21-71.3-19.2 71.3h-17.1l-22.1-77c-3.9-13.4-6.5-18.2-11.9-23.5zm139.3 58.8h.9l15.5 25c6.8 11.3 11.3 14.2 19.7 14.2 7.9 0 14.4-5 14.4-12.3 0-6.1-2.4-10.7-10.5-16.6l-19.7-14.2c-12.1-8.7-17.5-18.2-17.5-28.6v-.6c0-16.9 12.9-30.4 33.2-30.4 10.2.1 20.2 1.3 30 3.7v36.9h-.9l-13.1-21.3c-7.1-11.6-11.4-15-18.1-15-8.8 0-14.2 5.2-14.2 11.9 0 6.1 2.5 10.2 10.2 15.1l18.4 12.1c15.5 10.2 21 19.7 21 31.5v.9c0 18.6-15 30.9-35 30.9-11.6-.2-23-1.5-34.2-4l-.1-39.2z"/>
    <path fill="#e32" d="M830.4 150c-12.9.1-23.5-10.3-23.6-23.2-.1-12.9 10.3-23.5 23.2-23.6 12.9-.1 23.5 10.3 23.6 23.2v.2c.3 12.6-9.7 23-22.3 23.4h-.9z"/>
  </symbol>
);

export const BuzzFeedNewsTagline = () => (
  <symbol {...tagLineAttributes}>
    <path d="M149.741 49.276l-7.572-14.879h-5.744v14.879h-11.488V4.9h22.193c9.922 0 15.405 6.526 15.405 14.879 0 7.831-4.7 11.747-8.878 13.313l9.139 16.184H149.74h.001zm1.306-29.758c0-2.871-2.611-4.699-5.483-4.699h-9.139v9.398h9.139c2.872.26 5.483-1.567 5.483-4.7v.001zm18.015 29.758V4.9h32.636v9.92H180.55v6.786h20.626v9.92H180.55v7.57h21.148v9.919h-32.636v.261zm39.163 0V4.9h22.193c9.922 0 15.405 6.787 15.405 14.879 0 8.092-5.483 14.618-15.405 14.618h-10.705v14.879h-11.488zm25.848-29.758c0-3.133-2.35-4.699-5.221-4.699h-9.139v9.398h9.139c3.133.26 5.221-1.567 5.221-4.7v.001zm14.622 7.57c0-13.574 10.182-22.971 23.759-22.971s23.76 9.397 23.76 22.971-10.183 22.971-23.76 22.971c-13.577 0-23.76-9.397-23.76-22.971h.001zm35.769 0c0-7.309-4.7-12.79-12.01-12.79s-12.01 5.481-12.01 12.79c0 7.309 4.7 12.79 12.01 12.79s12.01-5.481 12.01-12.79zm42.297 22.188l-7.572-14.879h-5.744v14.879h-11.488V4.9h22.193c9.921 0 15.404 6.526 15.404 14.879 0 7.831-4.7 11.747-8.877 13.313l9.138 16.184h-13.054zm1.305-29.758c0-2.871-2.61-4.699-5.483-4.699h-9.138v9.398h9.138c2.872.26 5.483-1.567 5.483-4.7v.001zm27.154 29.758V14.819h-12.533v-9.92h36.292v9.92h-12.271v34.457H355.22zm29.242 0V4.9h11.488v44.376h-11.488zm49.607 0l-18.798-25.581v25.581h-11.488V4.9h11.749l18.015 24.537V4.9h11.488v44.376h-10.966zm16.71-22.188c0-14.096 10.705-22.971 24.02-22.971 9.922 0 15.927 5.22 19.06 10.702l-9.66 4.96c-1.567-2.871-4.961-5.743-9.4-5.743-7.31 0-12.271 5.482-12.271 12.79 0 7.31 5.222 12.792 12.271 12.792 3.133 0 6.528-1.305 8.094-2.61v-3.394h-9.921v-9.92h21.41v17.75c-4.7 5.222-11.228 8.615-19.583 8.615-13.054 0-24.02-8.875-24.02-22.971zm-313.31 83.792V76.424h-12.532v-9.92h36.292v9.92h-12.271v34.456H137.469zm25.588-22.188c0-13.573 10.182-22.97 23.759-22.97s23.76 9.397 23.76 22.97c0 13.574-10.183 22.972-23.76 22.972-13.577 0-23.76-9.398-23.76-22.972h.001zm35.77 0c0-7.309-4.7-12.79-12.011-12.79-7.31 0-12.01 5.481-12.01 12.79 0 7.31 4.7 12.791 12.01 12.791s12.01-5.743 12.01-12.79l.001-.001zm46.734 22.188V92.87l-16.97-26.365h12.793l9.66 16.446 9.4-16.446h13.054l-16.71 26.365v18.011h-11.227v-.001zm26.37-22.188c0-13.573 10.183-22.97 23.76-22.97 13.577 0 23.76 9.397 23.76 22.97 0 13.574-10.183 22.972-23.76 22.972-13.577 0-23.76-9.398-23.76-22.972zm36.031 0c0-7.309-4.7-12.79-12.01-12.79s-12.01 5.481-12.01 12.79c0 7.31 4.7 12.791 12.01 12.791 7.05 0 12.01-5.743 12.01-12.79v-.001zm17.232 4.177V66.504h11.75v26.104c0 5.22 3.132 9.136 9.399 9.136 6.005 0 9.399-3.915 9.399-9.136V66.504h11.488v26.365c0 10.964-6.789 18.795-20.887 18.795-14.36 0-21.149-7.831-21.149-18.795zM.195 109.957L63.64.067l9.043 5.22L9.238 115.178l-9.043-5.221z" fill-rule="nonzero" fill="#000"/>
  </symbol>
);

export const UseBuzzFeedNewsBrandLogo = ({...props}) => (
  <SvgUse id={attributes.id} viewBox={`0 0 ${attributes.width} ${attributes.height}`} {...props} />
);

export const UseBuzzFeedNewsTagline = ({...props}) => (
  <SvgUse id={tagLineAttributes.id} viewBox={`0 0 ${tagLineAttributes.width} ${tagLineAttributes.height}`} {...props} />
);
