import MobileDetect from 'mobile-detect';
import React from 'react';
import ReactDOM from 'react-dom';
import {App as AppDesktop} from './components/App/App@desktop';
import {App as AppMobile} from './components/App/App@mobile';

import './index.scss';

const md = new MobileDetect(window.navigator.userAgent);

ReactDOM.render(
  md.mobile() ? <AppMobile /> : <AppDesktop />,
  document.getElementById('root') as HTMLElement,
);
