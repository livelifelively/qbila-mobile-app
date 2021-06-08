import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SettingsParamList } from './SettingsParamList';

import SettingsScreen from './screens/SettingsScreen';
import ProfileSettingsScreen from './screens/ProfileSettingsScreen';
import SecuritySettingsScreen from './screens/SecuritySettingsScreen';
import TwoFactorAuthenticationScreen from './screens/TwoFactorAuthenticationScreen';
import ChangePasscodeScreen from './screens/ChangePasscodeScreen';

// interface SettingsStackProps {}

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
      <Stack.Screen name="SecuritySettings" component={SecuritySettingsScreen} />
      <Stack.Screen name="TwoFactorAuthentication" component={TwoFactorAuthenticationScreen} />
      <Stack.Screen name="ChangePasscode" component={ChangePasscodeScreen} />
    </Stack.Navigator>
  );
};
