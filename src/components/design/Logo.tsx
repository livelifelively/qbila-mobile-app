import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import Theme from '../../theme';

interface LogoProps {
  size?: boolean;
  onPress?: () => void;
}

// #TODO #FIXME use comfortaa font for logo
export const Logo: React.FC<LogoProps> = ({ size, onPress }) => {
  return (
    <View style={styles.logo}>
      <Text style={styles.logoText}>Qbila</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    marginTop: 30,
    marginBottom: 60,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logoText: {
    textAlign: 'center',
    fontSize: 50,
    color: Theme.colors.primary,
    fontFamily: 'Comfortaa-Regular'
  },
});