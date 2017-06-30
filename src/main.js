import React from 'react';
import {render} from 'react-dom';

import style from 'main.less';
import fonts from 'common/fonts';

import FontTest from 'modules/font-test';
import Typography from 'modules/typography-test';

const rootContainer = document.getElementById("root-container");
render( <Typography />, rootContainer);
