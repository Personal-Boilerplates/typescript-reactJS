import React from 'react';
import { RouteProps } from 'react-router-dom';

export type AppRoutePropsType = RouteProps & {
  isPrivate?: boolean;
};

export type AppRouteType = React.FC<AppRoutePropsType>;
