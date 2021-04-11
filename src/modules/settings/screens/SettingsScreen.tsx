import React, { useContext } from "react";
import { Text, StyleSheet, Button } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { SettingsNavProps } from "../SettingsParamList";
import { AuthContext } from "../../auth/AuthProvider";

const SettingsScreen = ({navigation}: SettingsNavProps<"Settings">) => {
  const {logout} = useContext(AuthContext);

  return (
    <DefaultLayout>
      <Text style={styles.text}>Settings</Text>
      <Button title="Security Settings" onPress={() => {navigation.navigate("SecuritySettings")}} />
      <Button title="Profile Settings" onPress={() => {navigation.navigate("ProfileSettings")}} />
      <Button title="Log Out" onPress={() => {logout()}} />
      <Button title="Back" onPress={() => {navigation.goBack()}} />
    </DefaultLayout>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SettingsScreen;
