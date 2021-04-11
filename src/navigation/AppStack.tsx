import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AppStackParamList } from "./AppParamList";

import HomeScreen from "../modules/home/HomeScreen";

import { PostDetailsStack } from "../modules/post-details/PostDetailsStack";
import { SettingsStack } from "../modules/settings/SettingsStack";

interface AppStackProps {}

const Stack = createStackNavigator<AppStackParamList>();

export const AppStack: React.FC<AppStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      {/* POST DETAILS STACK */}
      <Stack.Screen name="PostDetailsStack" component={PostDetailsStack} />
      {/* SETTINGS STACK */}
      <Stack.Screen name="SettingsStack" component={SettingsStack} />
    </Stack.Navigator>
  );
};
