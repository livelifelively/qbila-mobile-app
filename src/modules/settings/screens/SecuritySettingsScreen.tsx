import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { DefaultLayout } from '../../../layouts/Default';
import { SettingsNavProps } from '../SettingsParamList';
import Topbar from '../../../components/design/Topbar';
import { WhiteView } from '../../../components/design/WhiteView';
import { LockIcon, MobilePasscodeIcon } from '../../../icons';

const SecuritySettingsScreen = ({ navigation }: SettingsNavProps<'SecuritySettings'>) => {
  return (
    <DefaultLayout>
      <Topbar
        onBackButtonPress={() => {
          navigation.goBack();
        }}
        title="Security Settings"
      />
      <TouchableOpacity
        style={styles.settingsAction}
        onPress={() => {
          navigation.navigate('TwoFactorAuthentication');
        }}
      >
        <WhiteView style={styles.settingsActionWrapper}>
          <View style={styles.settingsActionIcon}>
            <LockIcon />
          </View>
          <View>
            <Text style={styles.settingsActionTitle}>2 Factor Authentication</Text>
          </View>
        </WhiteView>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.settingsAction}
        onPress={() => {
          navigation.navigate('ChangePasscode');
        }}
      >
        <WhiteView style={styles.settingsActionWrapper}>
          <View style={styles.settingsActionIcon}>
            <MobilePasscodeIcon />
          </View>
          <View>
            <Text style={styles.settingsActionTitle}>Change Passcode</Text>
          </View>
        </WhiteView>
      </TouchableOpacity>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  settingsAction: {
    width: '100%',
    marginBottom: 20,
  },
  settingsActionTitle: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
  },
  settingsActionWrapper: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsActionIcon: {
    width: 25,
    height: 25,
    marginRight: 20,
  },
});

export default SecuritySettingsScreen;
