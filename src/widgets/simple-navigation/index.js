import React from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter, NavLink } from 'react-router-dom';

import style from './style.less';

const ModuleRoot = (props) => {
  return (
    <div className={`simple-navigation ${style['module-style']}`}>
      <div className={(props.direction==='horizotal')?'horizotal':'vertical'}>
        <ul>
          {
            props.navigations.map((n,i)=>(
              <li key={i}>
                <NavLink
                  exact
                  to={n.to}
                  activeClassName="is-active" >
                  {n.displayText}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};
ModuleRoot.propTypes = {
  navigations: PropTypes.array
};

export default ModuleRoot;


