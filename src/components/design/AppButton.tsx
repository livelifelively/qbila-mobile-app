import React from 'react';
import { StyleSheet } from 'react-native';

import Theme from '../../theme';
import { TouchOpacityButton } from './TouchOpacityButton';

interface AppButtonProps {
  onPress: () => void;
  title: string;
  mode?: 'text' | 'outlined' | 'contained';
  buttonTextStyle?: Record<string, unknown>;
  buttonWrapperStyle?: Record<string, unknown>;
  size?: 'normal' | 'large' | 'small';
  color?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export const AppButton: React.FC<AppButtonProps> = ({
  onPress,
  title,
  mode = 'contained',
  buttonWrapperStyle = {},
  buttonTextStyle = {},
  size = 'normal',
  color = Theme.colors.primary,
  disabled = false,
}) => {
  const { buttonStyle, textStyle } = extendStylesByParams(
    { size, mode, color },
    { ...styles.appButtonContainer, ...buttonWrapperStyle },
    { ...styles.appButtonText, ...buttonTextStyle },
    disabled
  );

  if (mode === 'text') {
    return (
      <TouchOpacityButton
        title={title}
        onPress={onPress}
        wrapperStyles={{
          ...buttonStyle,
          backgroundColor: 'transparent',
          paddingHorizontal: 0,
          paddingVertical: 0,
          padding: 0,
        }}
        textStyles={textStyle}
        disabled={disabled}
      />
    );
  } else if (mode === 'outlined') {
    return (
      <TouchOpacityButton
        title={title}
        onPress={onPress}
        wrapperStyles={{ ...buttonStyle, borderColor: color, backgroundColor: Theme.colors.outlineButtonBackground }}
        textStyles={textStyle}
      />
    );
  } else if (mode === 'contained') {
    return (
      <TouchOpacityButton
        title={title}
        onPress={onPress}
        wrapperStyles={{ ...buttonStyle, borderColor: color, backgroundColor: color }}
        textStyles={textStyle}
      />
    );
  }
};

const extendStylesByParams = (
  { mode = '', size = '', color = '' },
  baseButtonStyle = {},
  baseTextStyle = {},
  disabled = false
) => {
  const { buttonModeStyle, textModeStyle } = extendStylesByMode({ mode, color, disabled });
  const { buttonSizeStyle, textSizeStyle } = extendStylesBySize(size);
  return {
    buttonStyle: { ...baseButtonStyle, ...buttonModeStyle, ...buttonSizeStyle },
    textStyle: { ...baseTextStyle, ...textModeStyle, ...textSizeStyle },
  };
};

const extendStylesByMode = ({ mode = '', color = '', disabled = false }) => {
  let buttonModeStyle = {};
  let textModeStyle = {};

  switch (mode) {
    case 'outlined':
      textModeStyle = {
        ...textModeStyle,
        color: disabled ? Theme.colors.disabled : Theme.colors.outlineButtonText,
      };
      buttonModeStyle = {
        ...buttonModeStyle,
        borderColor: color,
      };
      break;

    case 'text':
      textModeStyle = {
        ...textModeStyle,
        color: disabled ? Theme.colors.disabled : Theme.colors.textButton,
        padding: 0,
      };
      buttonModeStyle = {
        ...buttonModeStyle,
        padding: 0,
        borderWidth: 0,
      };
      break;

    case 'contained':
      textModeStyle = {
        ...textModeStyle,
        color: disabled ? Theme.colors.disabled : Theme.colors.primaryButtonText,
      };
      break;

    default:
      break;
  }

  return { buttonModeStyle, textModeStyle };
};

const extendStylesBySize = (size = '') => {
  let textStyle = {};
  let buttonStyle = {};

  switch (size) {
    case 'large':
      textStyle = {
        fontSize: 18,
        lineHeight: 20,
      };
      buttonStyle = {
        paddingVertical: 20,
      };
      break;
    case 'small':
      textStyle = {
        fontSize: 12,
        lineHeight: 14,
      };
      break;
    case 'normal':
      textStyle = {
        fontSize: 14,
        lineHeight: 16,
      };
      break;
    default:
      break;
  }
  return {
    buttonSizeStyle: buttonStyle,
    textSizeStyle: textStyle,
  };
};

const styles = StyleSheet.create({
  appButtonContainer: {
    borderRadius: 10,
    borderWidth: 2,
    margin: 5,
    elevation: 0,
  },
  appButtonText: {
    fontSize: 18,
    color: Theme.colors.text,
    fontWeight: '600',
    alignSelf: 'center',
  },
});
