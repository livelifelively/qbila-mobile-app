import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { capitalize } from 'lodash';

import { globalStyles } from '../../theme/globalStyles';

interface InlineErrorTextProps {
  error: string;
}

export const InlineErrorText: React.FC<InlineErrorTextProps> = ({ error }) => {
  return (
    <View style={styles.inlineErrorTextWrapper}>
      <Text style={styles.inlineErrorText}>{capitalize(error)}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  inlineErrorText: {
    ...globalStyles.errorText,
  },
  inlineErrorTextWrapper: {
    height: 12,
  },
});
