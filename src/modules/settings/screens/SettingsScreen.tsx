import React, { useContext } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

import { DefaultLayout } from '../../../layouts/Default';
import { SettingsNavProps } from '../SettingsParamList';
import { AuthContext } from '../../auth/AuthProvider';
import Topbar from '../../../components/design/Topbar';
import { WhiteView } from '../../../components/design/WhiteView';
import { LockIcon, LogoutIcon, UserIcon } from '../../../icons';
import { GlobalAlertsContext } from '../../../contexts/GlobalAlertsContext';

const SettingsScreen = ({ navigation }: SettingsNavProps<'Settings'>) => {
  const { logout } = useContext(AuthContext);
  const { prompt } = useContext(GlobalAlertsContext);

  return (
    <DefaultLayout>
      <Topbar
        onBackButtonPress={() => {
          navigation.goBack();
        }}
        title="Settings"
      />
      <TouchableOpacity
        style={styles.settingsAction}
        onPress={() => {
          navigation.navigate('ProfileSettings');
        }}
      >
        <WhiteView style={styles.settingsActionWrapper}>
          <View style={styles.settingsActionIcon}>
            <UserIcon />
          </View>
          <View>
            <Text style={styles.settingsActionTitle}>Profile</Text>
          </View>
        </WhiteView>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.settingsAction}
        onPress={() => {
          navigation.navigate('SecuritySettings');
        }}
      >
        <WhiteView style={styles.settingsActionWrapper}>
          <View style={styles.settingsActionIcon}>
            <LockIcon />
          </View>
          <View>
            <Text style={styles.settingsActionTitle}>Security Settings</Text>
          </View>
        </WhiteView>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.settingsAction}
        onPress={() => {
          // logout();
          prompt({
            logId: 'LOGOUT_CONFIRM_REJECT',
            title: 'Do you wish to Log out of your account?',
            ctaType: 'CONFIRM_REJECT',
            ctas: {
              confirm: {
                action: () => {
                  logout();
                },
                label: 'Confirm',
              },
              // eslint-disable-next-line quotes
              reject: { action: () => {}, label: "No, I don't" },
            },
            body: 'NOTE : You’ll only get 3% interest on withdrawal',
          });
        }}
      >
        <WhiteView style={styles.settingsActionWrapper}>
          <View style={styles.settingsActionIcon}>
            <LogoutIcon />
          </View>
          <View>
            <Text style={styles.settingsActionTitle}>Log Out</Text>
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

export default SettingsScreen;
