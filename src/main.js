import React from 'react';
import {render} from 'react-dom';

import style from 'main.less';
import fonts from 'common/fonts';

import {BrowserRouter} from 'react-router-dom';

import ThisApp from './this-app/';

if (target!=='production') console.info(`========== Build target: ${target} ===========`); // eslint-disable-line no-console

const RootComponent = ()=>(
  <BrowserRouter>
    <ThisApp />
  </BrowserRouter>
);

const rootContainer = document.getElementById("root-container");
render( <RootComponent /> , rootContainer);
