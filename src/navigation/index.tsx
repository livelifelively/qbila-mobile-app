import React, { useContext, useEffect, useRef, useState } from 'react';
import { ColorSchemeName, AppState } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

import { AuthStack } from '../modules/auth/AuthStack';
import { PasscodeAuthStack } from '../modules/passcode-auth/PasscodeAuthStack';
import { SetPasscodeStack } from '../modules/set-passcode/SetPasscodeStack';
import { AppStack } from './AppStack';
import Logger from '../services/logger';
import { AuthContext } from '../modules/auth/AuthProvider';
import ErrorBoundary from '../components/design/ErrorBoundary';
import { GlobalAlertsProvider } from '../contexts/GlobalAlertsContext';
import { OnboardingStack } from '../modules/onboarding/OnboardingStack';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const { softLogout, authState } = useContext(AuthContext);
  const appState = useRef(AppState.currentState);
  const [newlyLaunched, setNewlyLaunched] = useState(() => true);

  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);

    // Soft logout user if navigation is rendered first time.
    // resolves gittery launch due to sudden changes in user state
    const asyncSoftLogout = async () => {
      if (newlyLaunched) {
        Logger.debug('APP_STATE--NEWLY_LAUNCHED', newlyLaunched);
        console.log(authState);
        await softLogout();
        setNewlyLaunched(false);
      }
    };

    asyncSoftLogout();

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
      softLogout();
    };
  }, []);

  const _handleAppStateChange = async (nextAppState) => {
    if (nextAppState === 'inactive') {
      await softLogout();
    }

    appState.current = nextAppState;
    Logger.debug('APP_STATE', appState.current);
  };

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
    case 'LOGGED_IN_WITHOUT_PASSCODE':
      Logger.debug('NAVIGATION__ACTIVE_STACK--SET_PASSCODE_STACK', {});
      return <SetPasscodeStack />;
    case 'SOFT_LOGGED_OUT':
      Logger.debug('NAVIGATION__ACTIVE_STACK--PASSCODE_AUTH_STACK', {});
      return <PasscodeAuthStack />;
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
