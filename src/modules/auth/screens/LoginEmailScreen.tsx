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

function LoginEmailScreen({ navigation }: AuthNavProps<'LoginEmail'>) {
  const { apiRequestHandler } = useContext(APIRequestsContext);

  const loginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
  });

  return (
    <DefaultLayout backgroundColor="#FCFCFC" paddingHorizontal={45}>
      <View style={{ width: '100%' }}>
        <View
          style={{
            height: 65,
            width: '100%',
            backgroundColor: '#EBEBEB',
            marginTop: 100,
            marginBottom: 65,
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 24 }}>logo</Text>
        </View>
        <View style={{ marginBottom: 40 }}>
          <Text style={{ fontSize: 24, fontFamily: 'Poppins-Medium', textAlign: 'center' }}>Sign In</Text>
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
                style={{ input: styles.textInput, wrapper: styles.textInputWrapper }}
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
                style={{ input: styles.textInput, wrapper: styles.textInputWrapper }}
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 30,
        }}
      >
        <Text style={{ fontFamily: 'Poppins-Bold' }}>Don’t have an account,</Text>
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
  textInputWrapper: { marginBottom: 10 },
  textInput: {
    width: '100%',
    backgroundColor: '#F7F7F7',
    padding: 18,
  },
});

export default LoginEmailScreen;
