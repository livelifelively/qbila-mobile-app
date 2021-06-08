import * as React from 'react';

/**
 * Throw error from within component to render error component ui
 * @param errorDetails details of error occurred in component
 */
export default function useComponentError(errorDetails: { hasError: boolean; message: string; id: string }) {
  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    if (errorDetails.hasError) {
      throw Error(`${errorDetails.id}: ${errorDetails.message}`);
    }
  }, [errorDetails]);
}
