import React from "react";
import { Text, StyleSheet, Button } from "react-native";

import { DefaultLayout } from "../../layouts/Default";
import { HomeNavProps } from "./HomeParamList";

const HomeScreen = ({navigation}: HomeNavProps<"PostDetailsStack">) => {
  return (
    <DefaultLayout>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Post Details"
        onPress={() => {
          navigation.navigate("PostDetailsStack");
        }}
      />
      <Button
        title="Settings"
        onPress={() => {
          navigation.navigate("SettingsStack");
        }}
      />
    </DefaultLayout>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
