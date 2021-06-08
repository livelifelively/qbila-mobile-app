import React, { useContext } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { DefaultLayout } from '../../../layouts/Default';
import { SettingsNavProps } from '../SettingsParamList';
import { AppButton } from '../../../components/design/AppButton';
import Topbar from '../../../components/design/Topbar';
import { Title } from 'react-native-paper';
import { AppTextInput } from '../../../components/design/AppTextInput';
import { YellowCopyIcon } from '../../../icons';
import { twoFactorAuthenticationVefificationPost } from '../../../api/auth/requests';
import { GlobalAlertsContext } from '../../../contexts/GlobalAlertsContext';
import { APIRequestsContext } from '../../../contexts/APIRequestsContext';

const TwoFactorAuthenticationScreen = ({ navigation }: SettingsNavProps<'TwoFactorAuthentication'>) => {
  const { toast } = useContext(GlobalAlertsContext);
  const { apiRequestHandler } = useContext(APIRequestsContext);

  const twoFactorAuthenticationSchema = Yup.object().shape({
    verificationCode: Yup.string()
      .required()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(6, 'Must be exactly 6 digits')
      .max(6, 'Must be exactly 6 digits'),
  });

  return (
    <DefaultLayout backgroundColor="#ffffff">
      <Topbar
        onBackButtonPress={() => {
          navigation.goBack();
        }}
        title="TwoFactorAuthentication"
      />
      <View style={styles.twoFactorAuthQRCode}></View>
      <Title style={styles.component}>Scan the QR Code</Title>
      <Title style={styles.component}>OR</Title>
      <Title style={styles.component}>Copy this Key</Title>
      <View
        style={{
          marginBottom: 25,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#FAFAFA',
          width: '100%',
          alignItems: 'center',
          paddingHorizontal: 15,
          borderRadius: 15,
          paddingVertical: 20,
        }}
      >
        <View>
          <Text style={{ color: '#625E59', fontSize: 12 }}>3F8QCEXUrRQcjoyp2J8ng71xre3vd33dcer</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            toast({
              logId: 'TWO_FACTOR_AUTH_ADDRESS',
              title: 'Copied!',
            });
          }}
          style={{ marginRight: 10 }}
        >
          <YellowCopyIcon />
        </TouchableOpacity>
      </View>
      <Formik
        initialValues={{
          verificationCode: '',
          email: '',
        }}
        validationSchema={twoFactorAuthenticationSchema}
        onSubmit={async (values) => {
          const signedUp: RequestResponse = await twoFactorAuthenticationVefificationPost(
            {
              verificationCode: values.verificationCode,
              email: values.email,
            },
            apiRequestHandler
          );
          if (signedUp.status === 'SUCCESS') {
            // navigation.navigate('SetPasscode')
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={{ width: '100%' }}>
            <AppTextInput
              autoCorrect={false}
              style={{ input: styles.textInput, wrapper: styles.textInputWrapper }}
              value={values.verificationCode}
              onChangeText={handleChange('verificationCode')}
              onBlur={handleBlur('verificationCode')}
              placeholder="Enter your Verification Code"
              error={touched.verificationCode ? errors.verificationCode : ''}
            />
            <AppButton
              title="Enable"
              onPress={() => {
                handleSubmit();
              }}
              size="normal"
              buttonWrapperStyle={{ paddingHorizontal: 50 }}
            />
          </View>
        )}
      </Formik>
      <View>
        <Text>Step 1 : Install an authenticator app such as Google authenticator or Authy.</Text>
      </View>
      <View>
        <Text>Step 2 : Scan this QR code or copy the key phrase to add 2FA.</Text>
      </View>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  twoFactorAuthQRCode: {
    width: 175,
    height: 175,
    marginBottom: 50,
    backgroundColor: '#000',
  },
  component: {
    marginBottom: 25,
  },
  textInputWrapper: { marginBottom: 10 },
  textInput: {
    width: '100%',
    backgroundColor: '#F7F7F7',
    padding: 18,
  },
});

export default TwoFactorAuthenticationScreen;
