import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

interface TouchOpacityButtonProps {
  onPress: () => void;
  textStyles?: Record<string, unknown>;
  wrapperStyles?: Record<string, unknown>;
  title: string;
  disabled?: boolean;
}

export const TouchOpacityButton: React.FC<TouchOpacityButtonProps> = ({
  title,
  onPress,
  wrapperStyles,
  textStyles,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.touchableOpacity, styles.buttonWrapper, wrapperStyles]}
      disabled={disabled}
    >
      <Text style={[styles.textStyles, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyles: {
    // textAlign: 'center',
    // width: '100%',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  buttonWrapper: {
    paddingHorizontal: 49,
    paddingVertical: 10,
    borderRadius: 15,
  },
  touchableOpacity: {
    shadowColor: '#a3a3a3', // IOS
    shadowOffset: { height: 0, width: 1 }, // IOS
    shadowOpacity: 0.3,
    shadowRadius: 5, //IOS
    // backgroundColor: Theme.colors.primary,
    elevation: 2, // Android
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
  },
});
