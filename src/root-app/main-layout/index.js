import React from 'react';

import style from './style.less';

const Layout = ({Navigation, Routes}) => (
  <div className={`main-layout ${style['module-style']}`}>
    <div className="menu">{Navigation}</div>
    <div className="workspace">{Routes}</div>
  </div>
);


export default Layout;
