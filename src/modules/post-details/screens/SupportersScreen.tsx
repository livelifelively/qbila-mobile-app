import React from "react";
import { Text, StyleSheet, Button } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { PostDetailsNavProps } from "../PostDetailsParamList";

const DepositScreen = ({navigation}: PostDetailsNavProps<"Supporters">) => {
  return (
    <DefaultLayout>
      <Text style={styles.text}>Supporters</Text>
      <Button
        title="Back"
        onPress={() => {
          navigation.goBack();
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

export default DepositScreen;
