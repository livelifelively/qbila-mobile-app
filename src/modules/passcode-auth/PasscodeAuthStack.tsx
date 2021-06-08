import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { PasscodeAuthParamList } from './PasscodeAuthParamList';

import LoginPasscodeScreen from './screens/LoginPasscodeScreen';

const Stack = createStackNavigator<PasscodeAuthParamList>();

export const PasscodeAuthStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="LoginPasscode"
    >
      <Stack.Screen name="LoginPasscode" component={LoginPasscodeScreen} />
    </Stack.Navigator>
  );
};
