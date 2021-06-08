import React, { ReactNode } from 'react';

import ErrorBoundary from 'react-native-error-boundary';
import Logger from '../../services/logger';

function ErrBoundary({ children, errorScope }: { children: ReactNode; errorScope: ErrorBoundaryErrorScope }) {
  const handleError = (error: Error) => {
    Logger.error(`COMPONENT_ERROR__${errorScope}`, JSON.stringify(error));
  };

  return <ErrorBoundary onError={handleError}>{children}</ErrorBoundary>;
}

export default ErrBoundary;
