import React, {useContext, useEffect, useState} from 'react';
import { ColorSchemeName, View, ActivityIndicator } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

import { AuthContext } from "../modules/auth/AuthProvider";
import { AuthStack } from "../modules/auth/AuthStack";
import { AppStack } from "./AppStack";
import AsyncStorage from '@react-native-community/async-storage';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const { user, login } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    AsyncStorage.getItem('user')
      .then((userString) => {
        if (userString) {
          login()
        }
        setLoading(false)
      })
      .catch((err) => {
        // TODO better logging.
        console.log(err)
      })
  }, [])

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}