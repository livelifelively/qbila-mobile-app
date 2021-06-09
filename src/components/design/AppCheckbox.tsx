import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Checkbox, Text } from 'react-native-paper';
import Theme from '../../theme';
import { globalStyles } from '../../theme/globalStyles';

interface AppCheckboxProps {
  value: boolean;
  onPress: () => void;
  error?: string
}

export const AppCheckbox: React.FC<AppCheckboxProps> = ({ children, value, onPress, error }) => {
  return (
    <View style={{marginBottom: 20, position: 'relative'}}>
      <View style={styles.appCheckboxWrapper}>
        <View>
          <View style={[styles.appCheckbox, { borderColor: value ? Theme.colors.checkboxColorSecondary : Theme.colors.checkboxColorPrimary }]}></View>
          <Checkbox status={value ? 'checked' : 'unchecked'} onPress={onPress} color={Theme.colors.checkboxColorPrimary} uncheckedColor={Theme.colors.checkboxColorPrimary} />
        </View>
        <View style={{ width: '85%', marginLeft: 10 }}>{children}</View>
      </View>
      <Text style={[globalStyles.errorText, styles.errorText]}>{error}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  appCheckbox: {
    borderWidth: 1,
    borderRadius: 5,
    width: 20,
    height: 20,
    position: 'absolute',
    top: 8,
    left: 8,
  },
  appCheckboxWrapper: {
    width: '100%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  errorText: {
    position: 'absolute',
    bottom: -15,
    left: 8
  }
});
