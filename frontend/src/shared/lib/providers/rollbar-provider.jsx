import { ErrorBoundary, Provider } from '@rollbar/react';

export const RollbarProvider = ({ children }) => {
  const rollbarConfig = {
    accessToken: 'aa58c0bc402b4afba2910d47ac9d47ba',
    environment: 'production',
  };

  return (
    <Provider config={rollbarConfig}>
      <ErrorBoundary>{children}</ErrorBoundary>
    </Provider>
  );
};
