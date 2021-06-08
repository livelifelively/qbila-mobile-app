import React from 'react';
import { StyleSheet } from 'react-native';

import { DefaultLayout } from '../../layouts/Default';
import { HomeNavProps } from './TabsParamList';
import Topbar from '../../components/design/Topbar';

const HomeScreen = ({ navigation }: HomeNavProps<'Home'>) => {
  return (
    <DefaultLayout>
      <Topbar
        showBackButton={false}
        title=""
        showSettingsButton={true}
        onSettingsButtonPress={() => navigation.navigate('SettingsStack')}
      />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  authButtons: {
    width: '100%',
  },
  authButtonsWrapper: {
    width: '100%',
  },
  components: {
    marginBottom: 15,
  },
});

export default HomeScreen;
