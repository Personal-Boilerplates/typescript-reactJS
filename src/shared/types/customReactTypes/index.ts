import React from 'react';

export type PageFC<T = Record<string, unknown>> = React.FC<T> & {
  Layout?: string;
  route: {
    path: string;
    subPages?: Record<string, PageFC>;
  };
};
