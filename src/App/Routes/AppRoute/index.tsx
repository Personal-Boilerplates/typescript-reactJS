import React from 'react';
import * as T from './types';
import useAuthContext from 'shared/hooks/useAuthContext';
import { Redirect, Route } from 'react-router-dom';

const AppRoute: T.AppRouteType = ({ isPrivate, component, ...rest }) => {
  const { authorized } = useAuthContext()?.session;

  if (
    (isPrivate && !authorized) ||
    (typeof component !== 'function' && !React.isValidElement(component))
  ) {
    return <Redirect to="/" />;
  }

  return <Route {...{ ...rest, component }} />;
};

export default AppRoute;
