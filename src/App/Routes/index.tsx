import React from 'react';
import { Switch } from 'react-router-dom';

import * as pages from 'pages';
import AppRoute from './AppRoute';
import NotFound from './FallBackPages/NotFound';

const Routes = () => {
  return (
    <Switch>
      <AppRoute path="/" exact component={pages.Home} />
      <AppRoute path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
