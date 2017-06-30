import React from 'react';
import {render} from 'react-dom';

import style from 'main.less';
import fonts from 'common/fonts';

import {BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import SimpleNavigation from 'widgets/simple-navigation';

import FontTest from 'modules-style/font-test';
import Typography from 'modules-style/typography-test';
import Elevations from 'modules-style/elevation-test';


const navigationDirective = [
  {to:'/typography', displayText:'typography'},
  {to:'/font-test', displayText:'fonts'},
  {to:'/elevation-test', displayText:'elevations'},
];

const RootComponent = ()=>{
  return (
    <BrowserRouter >
      <div>
        <SimpleNavigation navigations={navigationDirective}/>
        <Switch>
          <Route exact path="/" component={()=>(<div>home</div>)} />
          <Route exact path="/typography" component={Typography} />
          <Route exact path="/font-test" component={FontTest} />
          <Route exact path="/elevation-test" component={Elevations} />
          <Route component={()=><div>NotFound</div>}/>
        </Switch>
      </div>
    </BrowserRouter >
  )
}



const rootContainer = document.getElementById("root-container");
render( <RootComponent /> , rootContainer);
