import React from 'react';
import {render} from 'react-dom';

import style from 'main.less';
import fonts from 'common/fonts';

import FontTest from './font-test';
const rootContainer = document.getElementById("root-container");
render( <FontTest />, rootContainer);
