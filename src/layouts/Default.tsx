import React from "react";
import { View, StyleSheet } from "react-native";

interface DefaultLayoutProps {}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});