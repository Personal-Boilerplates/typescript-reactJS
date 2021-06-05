import React, { ReactNode } from 'react';
import { Switch } from 'react-router-dom';
import AppRoute from './AppRoute';
import * as pagesObj from 'pages';
import { PageFC } from 'infra/types/customReactTypes';

const routeList: ReactNode[] = [];

function loadRoutes(previousRoutes: string, pages: Record<string, PageFC>) {
  Object.entries(pages)?.map(([pageName, pageComponent], i) => {
    const { path, subPages, mainPath: mP, ...routeRest } =
      pageComponent?.route || {};
    const mainPath =
      previousRoutes +
      (mP || (typeof path === 'string' && path) || `/${pageName}`);

    let pathArray = [mainPath];
    if (typeof path === 'string' && path !== mainPath) {
      pathArray.push(path);
    } else if (Array.isArray(path)) {
      pathArray = [...pathArray, ...path];
    }

    routeList.push(
      <AppRoute
        {...routeRest}
        path={pathArray}
        key={i}
        component={pageComponent}
      />
    );

    if (subPages) {
      loadRoutes(mainPath, subPages);
    }
  });
}
loadRoutes('', pagesObj);

const Routes: React.FC = () => {
  return <Switch>{routeList}</Switch>;
};

export default Routes;
