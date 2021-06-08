import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { AuthNavProps } from '../AuthParamList';
import { DefaultLayout } from '../../../layouts/Default';
import { AppButton } from '../../../components/design/AppButton';
import { AppTextInput } from '../../../components/design/AppTextInput';
import { resendOTPEmailGet, signinPost } from '../../../api/auth/requests';
import { AuthContext } from '../AuthProvider';
import { globalStyles } from '../../../theme/globalStyles';
import Logger from '../../../services/logger';
import { secondsToMinutesFormat } from '../../../services/date-time';
import { APIRequestsContext } from '../../../contexts/APIRequestsContext';
import { Logo } from '../../../components/design/Logo';

function LoginEmailVerifyOTPScreen({ route }: AuthNavProps<'LoginEmailVerifyOTP'>) {
  const { loginEmailPassword } = useContext(AuthContext);
  const { apiRequestHandler } = useContext(APIRequestsContext);
  const { email, password } = route.params;
  const [verificationCodeResendTimer, setVerificationCodeResendTimer] = useState(120);

  useEffect(() => {
    const interval = setInterval(() => {
      if (verificationCodeResendTimer > 0) {
        setVerificationCodeResendTimer((c) => {
          if (c > 0) return c - 1;
          return c;
        });
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const loginSchema = Yup.object().shape({
    otp: Yup.string()
      .required()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(6, 'Must be exactly 6 digits')
      .max(6, 'Must be exactly 6 digits'),
  });

  return (
    <DefaultLayout paddingHorizontal={45}>
      <Logo />
      <View style={styles.pageTitleWrapper}>
        <Text style={styles.pageTitle}>Verify Your OTP</Text>
      </View>
      <Formik
        initialValues={{
          otp: '',
        }}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          const signedUp: RequestResponse = await signinPost(
            {
              login: email,
              password: password,
              verificationCode: values.otp,
            },
            apiRequestHandler
          );
          if (signedUp.status === 'SUCCESS' && signedUp.data?.id_token) {
            // TODO handle cases for wrong email password combination
            loginEmailPassword({ email, token: signedUp.data?.id_token, refreshToken: signedUp.data?.refresh_token });
            Logger.info('LOGIN_EMAIL_VERIFY_OTP', {});
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={{ width: '100%' }}>
            <AppTextInput
              autoCorrect={false}
              style={{ input: styles.textInput }}
              value={values.otp}
              onChangeText={handleChange('otp')}
              onBlur={handleBlur('otp')}
              placeholder="Enter your OTP"
              keyboardType="numeric"
              autoCapitalize="none"
              error={touched.otp ? errors.otp : ''}
            />
            <View style={{ paddingHorizontal: 20, marginBottom: 25 }}>
              <Text style={globalStyles.subtext}>You’ll receive a 6 digit OTP on your registered email</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40 }}>
              <AppButton
                title="Resend OTP"
                size="small"
                mode="text"
                disabled={verificationCodeResendTimer > 0}
                onPress={async () => {
                  await resendOTPEmailGet({ email, type: 'login' }, apiRequestHandler);
                }}
              />
              <Text style={{ color: '#625E59' }}>{secondsToMinutesFormat(verificationCodeResendTimer)}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <AppButton
                title="Verify"
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
}

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
  },
  pageTitle: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center'
  },
  pageTitleWrapper: { marginBottom: 25 },
});

export default LoginEmailVerifyOTPScreen;
