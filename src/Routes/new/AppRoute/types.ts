import { RouteProps } from 'react-router';
import { PageFC } from 'infra/types/customReactTypes';

export type AppRoutePropsType = RouteProps & {
  component: PageFC;
};
