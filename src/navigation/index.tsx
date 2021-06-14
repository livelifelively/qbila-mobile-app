import React, { useContext, useEffect, useState } from 'react';
import { ColorSchemeName } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

import { AuthStack } from '../modules/auth/AuthStack';
import { AppStack } from './AppStack';
import Logger from '../services/logger';
import { AuthContext } from '../modules/auth/AuthProvider';
import ErrorBoundary from '../components/design/ErrorBoundary';
import { GlobalAlertsProvider } from '../contexts/GlobalAlertsContext';
import { OnboardingStack } from '../modules/onboarding/OnboardingStack';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const { authState } = useContext(AuthContext);
  const [newlyLaunched, setNewlyLaunched] = useState(() => true);

  useEffect(() => {
    Logger.debug('APP_STATE--NEWLY_LAUNCHED', newlyLaunched);
    setNewlyLaunched(false);
  }, []);

  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <ErrorBoundary errorScope="ROOT">
        <GlobalAlertsProvider>{!newlyLaunched && <ActiveStack authState={authState} />}</GlobalAlertsProvider>
      </ErrorBoundary>
    </NavigationContainer>
  );
}

function ActiveStack({ authState }: { authState: AuthState }) {
  switch (authState) {
    case 'LOGGED_IN':
      Logger.debug('NAVIGATION__ACTIVE_STACK--APP_STACK', {});
      return <AppStack />;
    case 'ONBOARDED_NEW_USER':
    case 'LOGGED_OUT':
      Logger.debug('NAVIGATION__ACTIVE_STACK--AUTH_STACK', {});
      return <AuthStack />;
    case 'NEW_USER':
    default:
      Logger.debug('NAVIGATION__ACTIVE_STACK--ONBOARDING_STACK', {});
      return <OnboardingStack />;
  }
}
