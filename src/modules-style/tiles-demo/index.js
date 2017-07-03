if (process && process.env && process.env.CONSOLE_LOG) {
  console.info('log from file: src/modules/font-test/index.js'); // eslint-disable-line no-console
}

import React, {Component} from 'react';

import style from './style';

class ModuleRoot extends Component {
  render() {
    return (
      <div className={`tiles-demo ${style['module-style']}`}>
        <div className={`tiles`}>
          <div className="tile"><div className="tileContent">1</div></div>
          <div className="tile"><div className="tileContent">2</div></div>
          <div className="tile"><div className="tileContent">3</div></div>
          <div className="tile"><div className="tileContent">4</div></div>
          <div className="tile"><div className="tileContent">5</div></div>
          <div className="tile"><div className="tileContent">6</div></div>
          <div className="tile"><div className="tileContent">7</div></div>
          <div className="tile"><div className="tileContent">8</div></div>
          <div className="tile"><div className="tileContent">9</div></div>
          <div className="tile"><div className="tileContent">10</div></div>
          <div className="tile"><div className="tileContent">1</div></div>
          <div className="tile"><div className="tileContent">2</div></div>
          <div className="tile"><div className="tileContent">3</div></div>
          <div className="tile"><div className="tileContent">4</div></div>
          <div className="tile"><div className="tileContent">5</div></div>
          <div className="tile"><div className="tileContent">6</div></div>
          <div className="tile"><div className="tileContent">7</div></div>
          <div className="tile"><div className="tileContent">8</div></div>
          <div className="tile"><div className="tileContent">9</div></div>
          <div className="tile"><div className="tileContent">10</div></div>
        </div>
      </div>
    );
  }
};

export default ModuleRoot;



