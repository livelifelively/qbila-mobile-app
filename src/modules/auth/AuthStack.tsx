import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthParamList } from "./AuthParamList";

import LoginEmailScreen from "./screens/LoginEmailScreen";
import LoginPasscodeScreen from "./screens/LoginPasscodeScreen";
import SignupScreen from "./screens/SignupScreen";
import SetPasscodeScreen from "./screens/SetPasscodeScreen";
import VerifyEmailScreen from "./screens/VerifyEmailScreen";

interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamList>();

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null
      }}
      initialRouteName="LoginEmail"
    >
      <Stack.Screen options={{ headerTitle: "Sign In" }} name="LoginEmail" component={LoginEmailScreen} />
      <Stack.Screen options={{ headerTitle: "Sign In" }} name="LoginPasscode" component={LoginPasscodeScreen} />
      <Stack.Screen options={{ headerTitle: "Sign Up" }} name="SignUp" component={SignupScreen} />
      <Stack.Screen options={{ headerTitle: "Set Passcode" }} name="SetPasscode" component={SetPasscodeScreen} />
      <Stack.Screen options={{ headerTitle: "Verify Email" }} name="VerifyEmail" component={VerifyEmailScreen} />
    </Stack.Navigator>
  );
};
