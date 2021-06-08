import React from 'react';
import { StyleSheet } from 'react-native';

import { DefaultLayout } from '../../layouts/Default';
import { VaultNavProps } from './TabsParamList';
import Topbar from '../../components/design/Topbar';

const VaultScreen = ({ navigation }: VaultNavProps<'VaultCreationStack'>) => {
  return (
    <DefaultLayout>
      <Topbar showBackButton={false} title="Vault" />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  vaultActions: {
    flexDirection: 'row',
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  vaultActionsSubtext: {
    color: '#625E59',
    textAlign: 'center',
    fontSize: 12,
  },
  vaultActionsButtons: {
    marginBottom: 10,
    marginHorizontal: 13,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowColor: '#a3a3a3',
    shadowOffset: { height: 0, width: 0 },
  },
});

export default VaultScreen;
