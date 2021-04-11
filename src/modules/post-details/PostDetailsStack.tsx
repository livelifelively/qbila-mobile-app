import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { PostDetailsParamList } from "./PostDetailsParamList";

import SupportersScreen from "./screens/SupportersScreen";
import PostDetailsScreen from "./screens/PostDetailsScreen";
import CriticsScreen from "./screens/CriticsScreen";

interface PostDetailsStackProps {}

const Stack = createStackNavigator<PostDetailsParamList>();

export const PostDetailsStack: React.FC<PostDetailsStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null
      }}
      initialRouteName="PostDetails"
    >
      <Stack.Screen name="PostDetails" component={PostDetailsScreen} />
      <Stack.Screen name="Supporters" component={SupportersScreen} />
      <Stack.Screen name="Critics" component={CriticsScreen} />
    </Stack.Navigator>
  );
};
