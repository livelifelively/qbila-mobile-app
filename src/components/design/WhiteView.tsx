import React from 'react';
import { StyleSheet, View } from 'react-native';

interface WhiteViewProps {
  style?: Record<string, unknown>;
}

export const WhiteView: React.FC<WhiteViewProps> = ({ children, style }) => {
  return <View style={{ ...styles.whiteView, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  whiteView: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 15,
    width: '100%',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowColor: '#d7d7d7',
    shadowOffset: { height: 0, width: 0 },
  },
});
