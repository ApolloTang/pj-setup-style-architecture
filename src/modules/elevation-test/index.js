
if (process && process.env && process.env.CONSOLE_LOG) {
  console.info('log from file: src/modules/font-test/index.js'); // eslint-disable-line no-console
}

import _ from 'lodash';
import React, {Component} from 'react';

import style from './style';

class ModuleRoot extends Component {
  render() {
    return (
      <div className={`elevation-test ${style['module-style']}`}>
        {
          [2,3,4,6,8,16,24].map( (elev, index) => (
            <div key={_.uniqueId()} className={`cell elev-${elev}`}>
              <span className="badge-blue">elev-{elev}</span>
            </div>
          ))
        }
      </div>
    );
  }
};

export default ModuleRoot;



