import React, {useContext} from "react";
import { Text, StyleSheet, Button } from "react-native";

import { AuthContext } from "../AuthProvider";
import { AuthNavProps } from "../AuthParamList";
import { DefaultLayout } from "../../../layouts/Default";

function LoginEmailScreen({ navigation }: AuthNavProps<"LoginEmail">) {
  const { login } = useContext(AuthContext);
  return (
    <DefaultLayout>
      <Text>Login with email screen</Text>
      <Button
        title="Sign In"
        onPress={() => {
          login();
        }}
      />
      <Button
        title="Sign Up"
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      />
      <Button
        title="Forgot Password?"
        onPress={() => {
          // login();
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

export default LoginEmailScreen;
