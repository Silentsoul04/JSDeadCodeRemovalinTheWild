/** @jsx h */
import { h, render } from 'preact';
import Header from './header';
import { headerContainerId } from './app-server';

let container = document.querySelector(`#${headerContainerId}`);
render(<Header {...window.BZFD.__HEADER_STATE__} />, container, container.firstElementChild);

delete window.BZFD.__HEADER_STATE__;
