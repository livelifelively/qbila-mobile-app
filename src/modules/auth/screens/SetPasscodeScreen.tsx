import React, { useContext } from "react";
import { Text, StyleSheet, Button } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { AuthNavProps } from "../AuthParamList";
import { AuthContext } from "../AuthProvider";

const SetPasscodeScreen = ({navigation, route}: AuthNavProps<"SetPasscode">) => {
  const {login} = useContext(AuthContext)

  return (
    <DefaultLayout>
      <Text style={styles.text}>SetPasscode</Text>
      <Button
        title="Confirm"
        onPress={() => {
          // Set passcode: true, SignUp: true, User and go home
          login()
        }}
      />
      <Button
        title="Skip"
        onPress={() => {
          // Set passcode: false, SignUp: true, User and go home
          login()
        }}
      />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SetPasscodeScreen;
