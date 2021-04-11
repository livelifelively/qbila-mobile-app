import React from "react";
import { Text, StyleSheet, Button } from "react-native";

import { AuthNavProps } from "../AuthParamList";
import { DefaultLayout } from "../../../layouts/Default";

function SignupScreen({ navigation, route }: AuthNavProps<"SignUp">) {
  return (
    <DefaultLayout>
      <Text style={styles.text}>route name: {route.name}</Text>
      <Button
        title="Sign In"
        onPress={() => {
          navigation.navigate("LoginEmail");
          // navigation.goBack()
        }}
      />
      <Button
        title="Sign Up"
        onPress={() => {
          navigation.navigate("VerifyEmail");
          // navigation.goBack()
        }}
      />
    </DefaultLayout>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SignupScreen;