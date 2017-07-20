import React from 'react';

// import { ConnectedRouter } from 'connected-react-router';
// import {history} from './createHistory';
// import store from './store';
// import { Provider } from 'react-redux';

import {BrowserRouter} from 'react-router-dom';

import RootApp from 'root-app';

import style from './style';

// const Root = ()=>(
//   <div className={`root ${style['module-style']}`}>
//     <Provider store={store}>
//       <ConnectedRouter history={history}>
//         <RootApp />
//       </ConnectedRouter>
//     </Provider>
//   </div>
// );

const Root = ()=>(
  <div className={`root ${style['module-style']}`}>
    <BrowserRouter>
      <RootApp />
    </BrowserRouter>
  </div>
);

export default Root;

