if (process && process.env && process.env.CONSOLE_LOG) {
  console.info('log from file: src/modules/font-test/index.js'); // eslint-disable-line no-console
}

import React, {Component} from 'react';

import style from './style';

class ModuleRoot extends Component {
  render() {
    return (
      <div className={`typography-test ${style['module-style']}`}>

        <div className="row">
          <div className="cell grid-1"></div>
          <div className="cell grid-1"></div>
          <div className="cell grid-1"></div>
          <div className="cell grid-1"></div>
          <div className="cell grid-1"></div>
          <div className="cell grid-1"></div>
          <div className="cell grid-1"></div>
          <div className="cell grid-1"></div>
          <div className="cell grid-1"></div>
          <div className="cell grid-1"></div>
          <div className="cell grid-1"></div>
          <div className="cell grid-1"></div>
        </div>

        <div className="row">
          <div className="cell grid-2"></div>
          <div className="cell grid-2"></div>
          <div className="cell grid-2"></div>
          <div className="cell grid-2"></div>
          <div className="cell grid-2"></div>
          <div className="cell grid-2"></div>
        </div>

        <div className="row">
          <div className="cell grid-3"></div>
          <div className="cell grid-3"></div>
          <div className="cell grid-3"></div>
          <div className="cell grid-3"></div>
        </div>

        <div className="row">
          <div className="cell grid-4"></div>
          <div className="cell grid-4"></div>
          <div className="cell grid-4"></div>
        </div>

        <div className="row">
          <div className="cell grid-6"></div>
          <div className="cell grid-6"></div>
        </div>

      </div>
    );
  }
};

export default ModuleRoot;



