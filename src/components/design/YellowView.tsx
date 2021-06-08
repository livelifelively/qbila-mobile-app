import React from 'react';
import { StyleSheet, View } from 'react-native';

interface YellowViewProps {
  style?: Record<string, unknown>;
}

export const YellowView: React.FC<YellowViewProps> = ({ children, style }) => {
  return <View style={{ ...styles.yellowView, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  yellowView: {
    backgroundColor: '#FFB850',
    padding: 15,
    borderRadius: 15,
    width: '100%',
  },
});
