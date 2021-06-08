import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { OnboardingParamList } from './OnboardingParamList';

import OnboardingScreen from './screens/OnboardingScreen';

const Stack = createStackNavigator<OnboardingParamList>();

export const OnboardingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="Onboarding"
    >
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    </Stack.Navigator>
  );
};
