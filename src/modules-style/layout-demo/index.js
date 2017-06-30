if (process && process.env && process.env.CONSOLE_LOG) {
  console.info('log from file: src/modules/font-test/index.js'); // eslint-disable-line no-console
}

import React, {Component} from 'react';

import style from './style';

class ModuleRoot extends Component {
  render() {
    return (
      <div className={`layout-demo ${style['module-style']}`}>
        <div className="layout"><span></span></div>
      </div>
    );
  }
};

export default ModuleRoot;



