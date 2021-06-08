import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthParamList } from './AuthParamList';

import HomeGuestScreen from './screens/HomeGuestScreen';
import LoginEmailScreen from './screens/LoginEmailScreen';
import SignupScreen from './screens/SignupScreen';
import VerifyEmailScreen from './screens/VerifyEmailScreen';
import LoginEmailVerifyOTPScreen from './screens/LoginEmailVerifyOTPScreen';

// interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamList>();

export const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="HomeGuest"
    >
      <Stack.Screen name="HomeGuest" component={HomeGuestScreen} />
      <Stack.Screen name="LoginEmail" component={LoginEmailScreen} />
      <Stack.Screen name="LoginEmailVerifyOTP" component={LoginEmailVerifyOTPScreen} />
      <Stack.Screen name="SignUp" component={SignupScreen} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} />
    </Stack.Navigator>
  );
};
