import React from 'react';
import {Route, Switch, Link, Redirect } from 'react-router-dom';

import MainLayout from './main-layout/';
import SimpleNavigation from 'widgets/simple-navigation';
import Routes from './routes';
import {navigationDirective} from './routes';


import styles from './styles.less';
class ThisApp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="this-app">
        <MainLayout
          Navigation={ <SimpleNavigation navigations={navigationDirective} /> }
          Routes={ <Routes />}
        />
      </div>
    );
  }
};

export default ThisApp;

