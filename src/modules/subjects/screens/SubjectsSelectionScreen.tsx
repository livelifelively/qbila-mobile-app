import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from "react-native-paper";

import { SubjectsNavProps } from '../SubjectsParamList';
import { DefaultLayout } from '../../../layouts/Default';

function SubjectsSelectionScreen({ navigation }: SubjectsNavProps<'MemberInfo'>) {

  return (
    <DefaultLayout>
      <View>
        <Text>SubjectsSelectionScreen</Text>
      </View>
    </DefaultLayout>
  );
}

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

export default SubjectsSelectionScreen;
