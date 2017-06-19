import React from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/App';
import FrontPage from './components/FrontPage';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={FrontPage}/>
    </Route>
  </Router>
);

export default Routes;
