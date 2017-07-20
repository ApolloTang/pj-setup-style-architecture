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



