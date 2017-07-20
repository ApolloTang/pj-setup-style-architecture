import React from 'react';
import {Route, Switch, Link, Redirect } from 'react-router-dom';

import FontTest   from 'modules/font-test';
import Typography from 'modules/typography-test';
import Elevations from 'modules/elevation-test';
import GridDemo   from 'modules/grids-demo';
import LayoutDemo from 'modules/layout-demo';
import Tiles      from 'modules/tiles-demo';

const navigationDirective = [
  {to:'/tiles-demo',              displayText:'Tiles'},
  {to:'/typography',              displayText:'typography'},
  {to:'/font-test',               displayText:'fonts'},
  {to:'/elevation-test',          displayText:'elevations'},
  {to:'/grid-demo',               displayText:'grids'},
  {to:'/layout-demo',             displayText:'layout'},
];

const Routes = () => (
  <Switch>
    <Route exact path="/"                       component={()=>(<div>home</div>)} />
    <Route exact path="/tiles-demo"             component={Tiles} />
    <Route exact path="/typography"             component={Typography} />
    <Route exact path="/font-test"              component={FontTest} />
    <Route exact path="/elevation-test"         component={Elevations} />
    <Route exact path="/grid-demo"              component={GridDemo} />
    <Route exact path="/layout-demo"            component={LayoutDemo} />
    <Route                                      component={()=><div>NotFound</div>}/>
  </Switch>
);

export default Routes;
export {navigationDirective};
