import React from 'react';
import { Text, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return <Text style={styles.text}>Splash</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default SplashScreen;
