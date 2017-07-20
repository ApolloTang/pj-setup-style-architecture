import React from 'react';
import {render} from 'react-dom';

import style from 'main.less';
import fonts from 'common/styles/fonts';

if (target!=='production') {
  console.info(`========== Build target: ${target} ===========`); // eslint-disable-line no-console
}

import RootComponent from 'root-infarstructure';
const rootContainer = document.getElementById("root-container");
render( <RootComponent /> , rootContainer);
