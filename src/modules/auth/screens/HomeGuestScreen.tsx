import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import { AuthNavProps } from '../AuthParamList';
import { DefaultLayout } from '../../../layouts/Default';
import { AppButton } from '../../../components/design/AppButton';
import { AuthContext } from '../AuthProvider';

function HomeGuestScreen({ navigation }: AuthNavProps<'HomeGuest'>) {
  const {reset} = useContext(AuthContext)

  return (
    <DefaultLayout>
      <View style={{ ...styles.authButtonsWrapper, ...styles.components }}>
        <AppButton
          title="Sign In"
          onPress={() => {
            navigation.navigate('LoginEmail');
          }}
          size="large"
          buttonWrapperStyle={styles.authButtons}
        />
        <AppButton
          title="Sign Up"
          onPress={() => {
            navigation.navigate('SignUp');
          }}
          mode="outlined"
          size="large"
          buttonWrapperStyle={styles.authButtons}
        />
        <AppButton
          title="Reset"
          onPress={() => {
            reset();
          }}
          mode="outlined"
        />
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

export default HomeGuestScreen;
