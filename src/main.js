import React from 'react';
import {render} from 'react-dom';

import style from 'main.less';
import fonts from 'common/fonts';

import {BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import SimpleNavigation from 'widgets/simple-navigation';

import FontTest from 'modules-style/font-test';
import Typography from 'modules-style/typography-test';
import Elevations from 'modules-style/elevation-test';
import GridDemo from 'modules-style/grids-demo';
import LayoutDemo from 'modules-style/layout-demo';
import Tiles from 'modules-style/tiles-demo';


const navigationDirective = [
  {to:'/tiles-demo', displayText:'Tiles'},
  {to:'/typography', displayText:'typography'},
  {to:'/font-test', displayText:'fonts'},
  {to:'/elevation-test', displayText:'elevations'},
  {to:'/grid-demo', displayText:'grids'},
  {to:'/layout-demo', displayText:'layout'},
];

const RootComponent = ()=>{
  return (
    <BrowserRouter >
      <div>
        <SimpleNavigation navigations={navigationDirective}/>
        <Switch>
          <Route exact path="/" component={()=>(<div>home</div>)} />
          <Route exact path="/tiles-demo" component={Tiles} />
          <Route exact path="/typography" component={Typography} />
          <Route exact path="/font-test" component={FontTest} />
          <Route exact path="/elevation-test" component={Elevations} />
          <Route exact path="/grid-demo" component={GridDemo} />
          <Route exact path="/layout-demo" component={LayoutDemo} />
          <Route component={()=><div>NotFound</div>}/>
        </Switch>
      </div>
    </BrowserRouter >
  )
}



const rootContainer = document.getElementById("root-container");
render( <RootComponent /> , rootContainer);
