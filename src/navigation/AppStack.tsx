import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { AppTabsParamList, AppStackParamList } from './AppParamList';

import HomeScreen from '../modules/bottom-tabs/HomeScreen';
import SubjectsSelectionScreen from '../modules/bottom-tabs/SubjectsSelectionScreen';
import RewardsScreen from '../modules/bottom-tabs/RewardsScreen';

import { SettingsStack } from '../modules/settings/SettingsStack';
import { HomeIcon, RewardIcon, VaultIcon } from '../icons';
import { View, StyleSheet } from 'react-native';
import Theme from '../theme';

const Tabs = createBottomTabNavigator<AppTabsParamList>();
const Stack = createStackNavigator<AppStackParamList>();

const AppTabs: React.FC = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let backgroundStyles = {};
          if (focused) {
            backgroundStyles = { borderTopWidth: 3, borderTopColor: Theme.colors.primary, marginTop: -5 };
          }

          switch (route.name) {
            case 'Home':
              return (
                <View style={[styles.buttonBackground, backgroundStyles]}>
                  <HomeIcon strokeColor={focused ? Theme.colors.primary : Theme.colors.text} />
                </View>
              );
            case 'Rewards':
              return (
                <View style={[styles.buttonBackground, backgroundStyles]}>
                  <RewardIcon strokeColor={focused ? Theme.colors.primary : Theme.colors.text} />
                </View>
              );
            case 'SubjectsSelection':
              return (
                <View style={[styles.buttonBackground, backgroundStyles]}>
                  <VaultIcon strokeColor={focused ? Theme.colors.primary : Theme.colors.text} />
                </View>
              );

            default:
              break;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="SubjectsSelection" component={SubjectsSelectionScreen} />
      <Tabs.Screen name="Rewards" component={RewardsScreen} />
    </Tabs.Navigator>
  );
};

export const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen name="Landing" component={AppTabs} />
      {/* SETTINGS STACKS */}
      <Stack.Screen name="SettingsStack" component={SettingsStack} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  buttonBackground: { width: 50, height: 45 },
});
