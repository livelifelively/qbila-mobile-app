import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import Logger from '../../services/logger';

export const AuthContext = React.createContext<{
  user: User;
  authState: AuthState;
  loginEmailPassword: (user: { email: string; token: string; refreshToken: string }) => void;
  loginPasscode: (passcode: string) => void;
  logout: () => void;
  signUp: () => void;
  softLogout: () => void;
  setPasscode: (passcode: string) => void;
  userOnboard: () => void;
  confirmPasscode: (passcode: string) => boolean | Promise<boolean>;
  refreshAuthToken: (refreshTokenData: { id_token: string; refresh_token: string }) => void;
}>({
  user: null,
  authState: 'NEW_USER',
  loginEmailPassword: (user: { email: string; token: string; refreshToken: string }) => {},
  loginPasscode: (passcode: string) => {},
  logout: () => {},
  signUp: () => {},
  softLogout: () => {},
  setPasscode: (passcode: string) => {},
  userOnboard: () => {},
  confirmPasscode: (passcode: string) => {
    return false;
  },
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
          const userAuthState: AuthState = 'LOGGED_IN_WITHOUT_PASSCODE';

          setUser(userUpdated);
          setAuthState(userAuthState);

          await AsyncStorage.setItem('user', JSON.stringify(userUpdated));
          await AsyncStorage.setItem('authState', userAuthState);

          Logger.debug('AUTH_PROVIDER__LOGIN_EMAIL', userUpdated);
        },
        loginPasscode: async (passcode) => {
          Logger.debug('AUTH_PROVIDER__LOGIN_PASSCODE--USER_INPUT_RECIEVED', '');
          const userDataObjectFromStorage = await getUserFromAsyncStorage();
          let userAuthState: AuthState;

          if (userDataObjectFromStorage && userDataObjectFromStorage.passcode === passcode) {
            userDataObjectFromStorage.userAuthenticated = true;
            userAuthState = 'LOGGED_IN';

            setUser(userDataObjectFromStorage);
            setAuthState(userAuthState);

            await AsyncStorage.setItem('user', JSON.stringify(userDataObjectFromStorage));
            await AsyncStorage.setItem('authState', userAuthState);

            Logger.info('AUTH_PROVIDER__LOGIN_PASSCODE--USER_PASSCODE_MATCH_SUCCESS', userDataObjectFromStorage);
            return;
          } else if (!userDataObjectFromStorage || !userDataObjectFromStorage.passcode) {
            userAuthState = 'LOGGED_OUT';

            setUser(userDataObjectFromStorage);
            setAuthState(userAuthState);

            await AsyncStorage.setItem('user', JSON.stringify(userDataObjectFromStorage));
            await AsyncStorage.setItem('authState', userAuthState);
          }
          Logger.debug('AUTH_PROVIDER__LOGIN_PASSCODE--USER_PASSCODE_MATCH_FAILED', user);
          throw Error('LOGIN_PASSCODE_FAILED');
        },
        logout: async () => {
          const userAuthState: AuthState = 'LOGGED_OUT';

          setUser(null);
          setAuthState(userAuthState);

          await AsyncStorage.removeItem('user');
          await AsyncStorage.setItem('authState', userAuthState);

          Logger.debug('AUTH_PROVIDER__LOGOUT--USER_REMOVED', user);
        },
        signUp: () => {
          //
        },
        softLogout: async () => {
          let userDataObjectFromStorage = await getUserFromAsyncStorage();
          const authStateFromStorage = await AsyncStorage.getItem('authState');

          if (userDataObjectFromStorage && authStateFromStorage === 'LOGGED_IN') {
            userDataObjectFromStorage = { ...userDataObjectFromStorage, userAuthenticated: false };
            const userAuthState: AuthState = 'SOFT_LOGGED_OUT';

            setUser(userDataObjectFromStorage);
            setAuthState(userAuthState);

            await AsyncStorage.setItem('user', JSON.stringify(userDataObjectFromStorage));
            await AsyncStorage.setItem('authState', userAuthState);

            Logger.debug('AUTH_PROVIDER__LOGOUT-SOFT', user);
          }
        },
        setPasscode: async (passcode) => {
          Logger.debug('AUTH_PROVIDER__SET_PASSCODE--USER_INPUT_RECIEVED', passcode);

          let userObject;
          if (user && user.email && user.token) {
            // set user passcode, and authorize
            userObject = {
              ...user,
              passcode,
              userAuthenticated: true,
            };
            const userAuthState: AuthState = 'LOGGED_IN';

            setUser(userObject);
            setAuthState(userAuthState);

            await AsyncStorage.setItem('user', JSON.stringify(userObject));
            await AsyncStorage.setItem('authState', userAuthState);

            Logger.debug('AUTH_PROVIDER__SET_PASSCODE--SUCCESS', userObject);
          } else {
            Logger.debug('AUTH_PROVIDER__SET_PASSCODE--FAILED', userObject);
          }
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
        confirmPasscode: async (passcode: string) => {
          const userDataStringFromStorage = await AsyncStorage.getItem('user');
          let userDataObjectFromStorage;

          if (userDataStringFromStorage) {
            userDataObjectFromStorage = JSON.parse(userDataStringFromStorage);
            if (!userDataObjectFromStorage.passcode) {
              setAuthState('LOGGED_OUT');
              await AsyncStorage.setItem('authState', 'LOGGED_OUT');
            } else if (userDataObjectFromStorage.passcode === passcode) {
              setAuthState('LOGGED_IN');
              await AsyncStorage.setItem('authState', 'LOGGED_IN');
              Logger.debug('AUTH_PROVIDER__CONFIRM-PASSCODE--SUCCESS', {});
              return true;
            }
          }
          return false;
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
