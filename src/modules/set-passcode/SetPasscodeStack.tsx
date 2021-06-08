import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SetPasscodeParamList } from './SetPasscodeParamList';

import SetPasscodeScreen from './screens/SetPasscodeScreen';

// interface SetPasscodeStackProps {}

const Stack = createStackNavigator<SetPasscodeParamList>();

export const SetPasscodeStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="SetPasscode"
    >
      <Stack.Screen name="SetPasscode" component={SetPasscodeScreen} />
    </Stack.Navigator>
  );
};
