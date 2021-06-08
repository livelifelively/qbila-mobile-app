import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { AuthNavProps } from '../AuthParamList';
import { DefaultLayout } from '../../../layouts/Default';
import { AppButton } from '../../../components/design/AppButton';
import { AppTextInput } from '../../../components/design/AppTextInput';
import { signinOTPPost } from '../../../api/auth/requests';
import { APIRequestsContext } from '../../../contexts/APIRequestsContext';
import { Logo } from '../../../components/design/Logo';

function LoginEmailScreen({ navigation }: AuthNavProps<'LoginEmail'>) {
  const { apiRequestHandler } = useContext(APIRequestsContext);

  const loginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
  });

  return (
    <DefaultLayout paddingHorizontal={45}>
      <View style={{ width: '100%' }}>
        <Logo />
        <View style={styles.pageTitleWrapper}>
          <Text style={styles.pageTitle}>Sign In</Text>
        </View>
        <Formik
          initialValues={{
            email: '',
            password: '',
            termsAndConditions: false,
          }}
          validationSchema={loginSchema}
          onSubmit={async (values) => {
            const signedUp: RequestResponse = await signinOTPPost(
              {
                login: values.email,
                password: values.password,
              },
              apiRequestHandler
            );
            if (signedUp.status === 'SUCCESS') {
              navigation.navigate('LoginEmailVerifyOTP', {
                email: values.email,
                password: values.password,
              });
            }
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={{ width: '100%' }}>
              <AppTextInput
                autoCorrect={false}
                style={{ input: styles.textInput }}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                error={touched.email ? errors.email : ''}
              />
              <AppTextInput
                autoCorrect={false}
                style={{ input: styles.textInput }}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                placeholder="Password"
                autoCapitalize="none"
                secureTextEntry={true}
                error={touched.password ? errors.password : ''}
              />
              <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
                <AppButton
                  title="Sign In"
                  onPress={() => {
                    handleSubmit();
                  }}
                  size="normal"
                  buttonWrapperStyle={{ width: 150 }}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <Text style={{ fontFamily: 'Poppins-Bold' }}>Have an account, </Text>
        <AppButton
          title="Sign Up"
          mode="text"
          buttonTextStyle={{ fontFamily: 'Poppins-Bold' }}
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
      </View>
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

export default LoginEmailScreen;
