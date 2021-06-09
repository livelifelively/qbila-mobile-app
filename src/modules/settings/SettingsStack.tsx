import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SettingsParamList } from './SettingsParamList';

import SettingsScreen from './screens/SettingsScreen';
import ProfileSettingsScreen from './screens/ProfileSettingsScreen';

const Stack = createStackNavigator<SettingsParamList>();

export const SettingsStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="Settings"
    >
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="ProfileSettings" component={ProfileSettingsScreen} />
    </Stack.Navigator>
  );
};
