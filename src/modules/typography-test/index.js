if (process && process.env && process.env.CONSOLE_LOG) {
  console.info('log from file: src/modules/font-test/index.js'); // eslint-disable-line no-console
}

import React, {Component} from 'react';

import style from './style';

class ModuleRoot extends Component {
  render() {
    return (
      <div className={`typography-test ${style['module-style']}`}>
        <div>
          <div className="text__size_relative-nagative1">text__size_relative(-1)</div>
          <div className="text__size_relative-0">text__size_relative(0)</div>
          <div className="text__size_relative-1">text__size_relative(1)</div>
          <div className="text__size_relative-2">text__size_relative(2)</div>
          <div className="text__size_relative-3">text__size_relative(3)</div>
          <div className="text__size_relative-4">text__size_relative(4)</div>
        </div>
        <hr />
        <div>
          <div className="text__size_headline">text__size_headline</div>
          <div className="text__size_display-1">text__size_display-1</div>
          <div className="text__size_display-2">text__size_display-2</div>
        </div>
      </div>
    );
  }
};

export default ModuleRoot;



