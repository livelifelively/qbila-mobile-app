import React from "react";
import { Text, StyleSheet, Button } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { SettingsNavProps } from "../SettingsParamList";

const ChangePasscodeScreen = ({navigation}: SettingsNavProps<"ChangePasscode">) => {
  return (
    <DefaultLayout>
      <Text style={styles.text}>Change Passcode</Text>
      <Button title="Back" onPress={() => {navigation.goBack()}} />
    </DefaultLayout>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ChangePasscodeScreen;
