import React from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter, NavLink } from 'react-router-dom';


import style from './style.less';
const ModuleRoot = ({navigations}) => (
  <div className={`simple-navigation ${style['module-style']}`}>
        <ul>
            {
              navigations.map((n,i)=>(
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
);
ModuleRoot.propTypes = {
  navigations: PropTypes.array
};

export default ModuleRoot;


