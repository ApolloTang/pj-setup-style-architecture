import _ from 'lodash';
import React from 'react';
import SimpleNavigation from 'widgets/simple-navigation';

const navigationDirective = [
  {to:'/font-test',               displayText:'fonts'},
  // {to:'/typography',              displayText:'typography'},
  {to:'/tiles-demo',              displayText:'Tiles'},
  {to:'/elevation-test',          displayText:'elevations'},
  {to:'/grid-demo',               displayText:'grids'},
  {to:'/layout-demo',             displayText:'layout'},
  {to:'/simple-navigation-demo',  displayText:'Simple Navigation'},
];

import style from './style';
class ModuleRoot extends React.Component {
  render() {
    return (
      <div className={`simple-navigation-demo ${style['module-style']}`}>
        <SimpleNavigation
          navigations={navigationDirective} />
        <SimpleNavigation
          navigations={navigationDirective}
          direction="horizontal"
        />
      </div>
    );
  }
};

export default ModuleRoot;



