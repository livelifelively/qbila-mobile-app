import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import { AuthProvider } from './src/modules/auth/AuthProvider';
import { APIRequestsProvider } from './src/contexts/APIRequestsContext';
import Theme from './src/theme';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider theme={Theme}>
          <APIRequestsProvider>
            <AuthProvider>
              <Navigation colorScheme={colorScheme} />
            </AuthProvider>
          </APIRequestsProvider>
        </PaperProvider>
      </SafeAreaProvider>
    );
  }
}
