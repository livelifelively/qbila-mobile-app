import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const AppText: React.FC = ({ children }) => {
  return <Text style={styles.textStyles}>{children}</Text>;
};

const styles = StyleSheet.create({
  textStyles: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
});
