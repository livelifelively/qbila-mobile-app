import React from "react";
import { Text, StyleSheet, Button } from "react-native";

import { DefaultLayout } from "../../../layouts/Default";
import { PostDetailsNavProps } from "../PostDetailsParamList";

const PostDetailsScreen = ({navigation}: PostDetailsNavProps<"PostDetails">) => {
  return (
    <DefaultLayout>
      <Text style={styles.text}>PostDetails</Text>
      <Button
        title="Supporters"
        onPress={() => {
          navigation.navigate("Supporters");
        }}
      />
      <Button
        title="Critics"
        onPress={() => {
          navigation.navigate("Critics");
        }}
      />
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

export default PostDetailsScreen;
