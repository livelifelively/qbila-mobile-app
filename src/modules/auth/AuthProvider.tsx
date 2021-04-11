import React, { useState } from "react";
import AsyncStorage from '@react-native-community/async-storage';

type User = null | { username: string, hasPasscode: boolean, };

export const AuthContext = React.createContext<{
  user: User;
  login: () => void;
  logout: () => void;
  signUp: (userAddedPasscode: boolean) => void;
}>({
  user: null,
  login: () => {},
  logout: () => {},
  signUp: (userAddedPasscode: boolean) => {}
});

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => {
          const fakeUser = { username: "bob", hasPasscode: false };
          setUser(fakeUser);
          AsyncStorage.setItem("user", JSON.stringify(fakeUser));
        },
        logout: () => {
          setUser(null);
          AsyncStorage.removeItem("user");
        },
        signUp: (userAddedPasscode: boolean) => {
          // 
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
