import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import Logger from '../../services/logger';

export const AuthContext = React.createContext<{
  user: User;
  authState: AuthState;
  loginEmailPassword: (user: { email: string; token: string; refreshToken: string }) => void;
  logout: () => void;
  reset: () => void;
  signUp: () => void;
  userOnboard: () => void;
  refreshAuthToken: (refreshTokenData: { id_token: string; refresh_token: string }) => void;
}>({
  user: null,
  authState: 'NEW_USER',
  loginEmailPassword: (user: { email: string; token: string; refreshToken: string }) => {},
  logout: () => {},
  reset: () => {},
  signUp: () => {},
  userOnboard: () => {},
  refreshAuthToken: (refreshTokenData: { id_token: string; refresh_token: string }) => {},
});

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>(() => null);
  const [authState, setAuthState] = useState<AuthState>(() => 'NEW_USER');

  const getUserFromAsyncStorage = async () => {
    const userDataStringFromStorage = await AsyncStorage.getItem('user');
    let userDataObjectFromStorage = null;

    if (userDataStringFromStorage) userDataObjectFromStorage = JSON.parse(userDataStringFromStorage);
    return userDataObjectFromStorage;
  };

  // Load User state from AsyncStorage
  useEffect(() => {
    async function initiateUserFromStorage() {
      const userFromStorage = await getUserFromAsyncStorage();
      setUser(userFromStorage);
    }
    async function initializeAuthStateFromStorage() {
      const authStateFromStorage = await AsyncStorage.getItem('authState');
      setAuthState(authStateFromStorage);
    }

    initiateUserFromStorage();
    initializeAuthStateFromStorage();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        authState,
        loginEmailPassword: async (userAuth) => {
          const userUpdated = { ...userAuth, passcode: '', userAuthenticated: false };
          const userAuthState: AuthState = 'LOGGED_IN';

          setUser(userUpdated);
          setAuthState(userAuthState);

          await AsyncStorage.setItem('user', JSON.stringify(userUpdated));
          await AsyncStorage.setItem('authState', userAuthState);

          Logger.debug('AUTH_PROVIDER__LOGIN_EMAIL', userUpdated);
        },
        logout: async () => {
          const userAuthState: AuthState = 'LOGGED_OUT';

          setUser(null);
          setAuthState(userAuthState);

          await AsyncStorage.removeItem('user');
          await AsyncStorage.setItem('authState', userAuthState);

          Logger.debug('AUTH_PROVIDER__LOGOUT--USER_REMOVED', user);
        },
        reset: async () => {
          const userAuthState: AuthState = 'NEW_USER';

          setUser(null);
          setAuthState(userAuthState);

          await AsyncStorage.removeItem('user');
          await AsyncStorage.setItem('authState', userAuthState);

          Logger.debug('AUTH_PROVIDER__LOGOUT--USER_RESET', user);
        },
        signUp: () => {
          //
        },
        userOnboard: async () => {
          const userUpdated = { onboarded: true };
          const userAuthState: AuthState = 'ONBOARDED_NEW_USER';

          setUser(userUpdated);
          setAuthState(userAuthState);

          await AsyncStorage.setItem('authState', userAuthState);
          await AsyncStorage.setItem('user', JSON.stringify(userUpdated));

          Logger.debug('AUTH_PROVIDER__USER_ONBOARD--SUCCESS', userUpdated);
        },
        refreshAuthToken: async (refreshTokenData: { id_token: string; refresh_token: string }) => {
          const userDataObject = {
            ...user,
            token: refreshTokenData.id_token,
            refreshToken: refreshTokenData.refresh_token,
          };

          setUser(userDataObject);

          await AsyncStorage.setItem('user', JSON.stringify(userDataObject));
          await AsyncStorage.setItem('authState', 'LOGGED_IN');

          Logger.debug('AUTH_PROVIDER__REFRESH_TOKEN--SUCCESS', {});
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
