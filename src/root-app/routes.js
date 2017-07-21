import React from 'react';
import {Route, Switch, Link, Redirect } from 'react-router-dom';

import FontTest   from 'modules/font-test';
import Tiles      from 'modules/tiles-demo';
import Typography from 'modules/typography-test';
import Elevations from 'modules/elevation-test';
import GridDemo   from 'modules/grids-demo';
import LayoutDemo from 'modules/layout-demo';
import SimpleNavigationDemo from 'modules/simple-navigation-demo';

const navigationDirective = [
  {to:'/font-test',               displayText:'fonts'},
  {to:'/typography',              displayText:'typography'},
  {to:'/tiles-demo',              displayText:'Tiles'},
  {to:'/elevation-test',          displayText:'elevations'},
  {to:'/grid-demo',               displayText:'grids'},
  {to:'/layout-demo',             displayText:'layout'},
  {to:'/simple-navigation-demo',  displayText:'Simple Navigation'},
];

const Routes = () => (
  <Switch>
    <Route exact path="/"                       component={()=>(<div>home</div>)} />
    <Route exact path="/font-test"              component={FontTest} />
    <Route exact path="/typography"             component={Typography} />
    <Route exact path="/tiles-demo"             component={Tiles} />
    <Route exact path="/elevation-test"         component={Elevations} />
    <Route exact path="/grid-demo"              component={GridDemo} />
    <Route exact path="/layout-demo"            component={LayoutDemo} />
    <Route exact path="/simple-navigation-demo" component={SimpleNavigationDemo} />
    <Route                                      component={()=><div>NotFound</div>}/>
  </Switch>
);

export default Routes;
export {navigationDirective};
