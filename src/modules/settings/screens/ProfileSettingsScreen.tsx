import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { DefaultLayout } from '../../../layouts/Default';
import { SettingsNavProps } from '../SettingsParamList';
import Topbar from '../../../components/design/Topbar';
import { WhiteTouchableOpacity } from '../../../components/design/WhiteTouchableOpacity';
import { PencilIcon } from '../../../icons';

const ProfileSettingsScreen = ({ navigation }: SettingsNavProps<'ProfileSettings'>) => {
  return (
    <DefaultLayout>
      <Topbar
        onBackButtonPress={() => {
          navigation.goBack();
        }}
        title="Profile Settings"
      />
      <View
        style={{
          height: 104,
          width: 104,
          backgroundColor: 'black',
          borderRadius: 104,
          marginBottom: 50,
          marginTop: 70,
        }}
      ></View>
      <View style={styles.profileItemsWrapper}>
        <View style={styles.profileItem}>
          <Text style={styles.profileItemTitle}>Name</Text>
          <View style={styles.profileItemValue}>
            <Text>Jon Snow</Text>
            <WhiteTouchableOpacity
              onPress={() => {}}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderRadius: 8,
              }}
            >
              <View style={{ width: 19, height: 19 }}>
                <PencilIcon />
              </View>
            </WhiteTouchableOpacity>
          </View>
        </View>
        <View style={styles.profileItem}>
          <Text style={styles.profileItemTitle}>Phone No</Text>
          <View style={styles.profileItemValue}>
            <Text>9856846848</Text>
            <WhiteTouchableOpacity
              onPress={() => {}}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderRadius: 8,
              }}
            >
              <View style={{ width: 19, height: 19 }}>
                <PencilIcon />
              </View>
            </WhiteTouchableOpacity>
          </View>
        </View>
        <View style={styles.profileItem}>
          <Text style={styles.profileItemTitle}>Email</Text>
          <View style={[styles.profileItemValue]}>
            <Text>Jonsnow@gmail.com</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row-reverse' }}>
          <WhiteTouchableOpacity
            onPress={() => {}}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 8,
              width: 130,
            }}
          >
            <Text style={{ color: '#F7931A', textAlign: 'center' }}>Change Email</Text>
          </WhiteTouchableOpacity>
        </View>
      </View>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  profileItemsWrapper: { width: '100%' },
  profileItemButton: {
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowColor: '#a3a3a3',
    shadowOffset: { height: 0, width: 0 },
  },
  profileItem: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileItemTitle: { fontFamily: 'Poppins-Medium' },
  profileItemValue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
  },
});

export default ProfileSettingsScreen;
