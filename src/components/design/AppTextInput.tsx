/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Theme from '../../theme';

import { globalStyles } from '../../theme/globalStyles';
import { InlineErrorText } from './InlineErrorText';

interface AppTextInputProps {
  onChangeText: (text: string) => void;
  placeholder?: string;
  style?: {
    input?: Record<string, unknown> | undefined;
    wrapper?: Record<string, unknown> | undefined;
  };
  size?: 'normal' | 'large';
  keyboardType?:
    | 'default'
    | 'numeric'
    | 'email-address'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'phone-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search'
    | 'visible-password';
  value: string;
  autoCorrect?: boolean;
  maxLength?: number;
  autoCapitalize?: 'sentences' | 'none' | 'words' | 'characters' | undefined;
  secureTextEntry?: boolean;
  onBlur?: (e: any) => void;
  error?: string;
}

export const AppTextInput: React.FC<AppTextInputProps> = ({
  onChangeText,
  placeholder,
  style = {},
  value = '',
  autoCorrect = false,
  maxLength,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  secureTextEntry = false,
  onBlur,
  error = '',
}) => {
  const errorStyle =
    error.length > 0
      ? {
          borderColor: globalStyles.errorText.color,
          borderTopColor: globalStyles.errorText.color,
          borderLeftColor: globalStyles.errorText.color,
          borderRightColor: globalStyles.errorText.color,
          borderBottomColor: globalStyles.errorText.color,
        }
      : {};

  const [isFocused, setIsFocused] = useState<boolean>(() => false)

  const onFocus = () => {
    setIsFocused(true);
  }

  const onTextInputBlur = (e: any) => {
    setIsFocused(false);
    onBlur && onBlur(e)
  }

  return (
    <View style={[styles.appTextInputWrapper, style.wrapper]}>
      <TextInput
        autoCorrect={autoCorrect}
        value={value}
        style={[styles.appTextInput, style.input, errorStyle, isFocused ? styles.focusedTextInput : {}]}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        maxLength={maxLength}
        placeholderTextColor={Theme.colors.placeholderColor}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        onBlur={onTextInputBlur}
        onFocus={onFocus}
      />
      <InlineErrorText error={error} />
    </View>
  );
};

const styles = StyleSheet.create({
  appTextInput: {
    padding: 15,
    paddingVertical: 15,
    backgroundColor: Theme.colors.textInputBackground,
    fontSize: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Theme.colors.textInputBorderColor,
  },
  appTextInputWrapper: {
    width: '100%',
    marginBottom: 10
  },
  focusedTextInput: {
    borderColor: Theme.colors.primary
  }
});
