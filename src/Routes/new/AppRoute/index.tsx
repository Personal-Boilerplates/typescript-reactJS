import React from 'react';
import { Route } from 'react-router';
import { AppRoutePropsType } from './types';

function AppRoute({ component: Component, ...routeProps }: AppRoutePropsType) {
  const Layout = Component.Layout || React.Fragment;

  return (
    <Route
      {...routeProps}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

export default AppRoute;
