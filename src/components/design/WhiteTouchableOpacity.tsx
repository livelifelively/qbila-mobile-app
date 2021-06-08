import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface WhiteTouchableOpacityProps {
  onPress?: () => void;
  style?: Record<string, unknown>;
}

export const WhiteTouchableOpacity: React.FC<WhiteTouchableOpacityProps> = ({ children, onPress, style = {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={[styles.touchableOpacity, style]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    shadowColor: '#a3a3a3', // IOS
    shadowOffset: { height: 0, width: 1 }, // IOS
    shadowOpacity: 0.3,
    shadowRadius: 5, //IOS
    backgroundColor: '#fff',
    elevation: 2, // Android
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
