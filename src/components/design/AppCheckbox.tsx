import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Checkbox } from 'react-native-paper';

interface AppCheckboxProps {
  value: boolean;
  onPress: () => void;
}

export const AppCheckbox: React.FC<AppCheckboxProps> = ({ children, value, onPress }) => {
  return (
    <View style={styles.appCheckboxWrapper}>
      <View>
        <View style={[styles.appCheckbox, { borderColor: value ? '#fff' : '#44CBB3' }]}></View>
        <Checkbox status={value ? 'checked' : 'unchecked'} onPress={onPress} color="#44CBB3" uncheckedColor="#44CBB3" />
      </View>
      <View style={{ width: '85%', marginLeft: 10 }}>{children}</View>
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
});
