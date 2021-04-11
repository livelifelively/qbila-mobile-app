import React from "react";
import { Text, StyleSheet, Button } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { SettingsNavProps } from "../SettingsParamList";

const SecuritySettingsScreen = ({navigation}: SettingsNavProps<"SecuritySettings">) => {
  return (
    <DefaultLayout>
      <Text style={styles.text}>Security Settings</Text>
      <Button title="2 Factor Authentication" onPress={() => {navigation.navigate("TwoFactorAuthentication")}} />
      <Button title="Change Passcode" onPress={() => {navigation.navigate("ChangePasscode")}} />
      <Button title="Back" onPress={() => {navigation.goBack()}} />
    </DefaultLayout>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SecuritySettingsScreen;
