import React from 'react';

import AuthProvider from './AuthProvider';

const Contexts: React.FC = ({ children, ...rest }) => {
  return <AuthProvider {...rest}>{children}</AuthProvider>;
};

export default Contexts;
