import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { DefaultLayout } from '../../../layouts/Default';
import { AuthNavProps } from '../AuthParamList';
import { AppButton } from '../../../components/design/AppButton';
import { AppTextInput } from '../../../components/design/AppTextInput';
import { globalStyles } from '../../../theme/globalStyles';
import { verifyEmailPost } from '../../../api/auth/requests';
import Logger from '../../../services/logger';
import { GlobalAlertsContext } from '../../../contexts/GlobalAlertsContext';
import { APIRequestsContext } from '../../../contexts/APIRequestsContext';
import { Logo } from '../../../components/design/Logo';

const VerifyEmailScreen = ({ navigation, route }: AuthNavProps<'VerifyEmail'>) => {
  const { alert } = useContext(GlobalAlertsContext);
  const { apiRequestHandler } = useContext(APIRequestsContext);
  const { email } = route.params;

  const emailVerificationSchema = Yup.object().shape({
    otp: Yup.string()
      .required()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(6, 'Must be exactly 6 digits')
      .max(6, 'Must be exactly 6 digits'),
    email: Yup.string().email().required(),
  });

  return (
    <DefaultLayout paddingHorizontal={45}>
      <Logo />
      <View style={styles.pageTitleWrapper}>
        <Text style={styles.pageTitle}>Verify Your Email</Text>
      </View>
      <Formik
        initialValues={{
          otp: '',
          email,
        }}
        validationSchema={emailVerificationSchema}
        onSubmit={async (values) => {
          try {
            const signedUp: RequestResponse = await verifyEmailPost(
              {
                otp: values.otp,
                email: values.email,
              },
              apiRequestHandler
            );
            if (signedUp.status === 'SUCCESS') {
              alert({
                logId: 'SIGNUP_SCREEN__SUBMIT--SUCCESS',
                title: 'Email Verified, please login',
                ctas: {
                  acknowledge: {
                    action: () => {
                      navigation.navigate('LoginEmail');
                    },
                    label: 'Okay',
                  },
                },
              });
            }
          } catch (e) {
            Logger.error('VERIFY_EMAIL_SCREEN__SUBMIT--FAILED', { otp: values.otp, email: values.email });
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={{ width: '100%' }}>
            <AppTextInput
              autoCorrect={false}
              style={{ input: styles.textInput, wrapper: styles.textInputWrapper }}
              value={values.otp}
              onChangeText={handleChange('otp')}
              onBlur={handleBlur('otp')}
              keyboardType="number-pad"
              placeholder="Enter your OTP"
              error={touched.otp ? errors.otp : ''}
              maxLength={6}
            />
            <View style={{ marginBottom: 70 }}>
              <Text style={globalStyles.subtext}>You’ll receive a 6 digit OTP on your registered email</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <AppButton
                title="Confirm Email"
                onPress={() => {
                  handleSubmit();
                }}
                size="normal"
                buttonWrapperStyle={{ paddingHorizontal: 50 }}
              />
            </View>
          </View>
        )}
      </Formik>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
  },
  pageTitleWrapper: { marginBottom: 40 },
  textInputWrapper: { marginBottom: 10 },
  textInput: {
    width: '100%',
  },
});

export default VerifyEmailScreen;
