import React, { useContext } from 'react';
import { Text } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { View, StyleSheet } from 'react-native';

import { AuthContext } from '../../auth/AuthProvider';
import { PasscodeAuthNavProps } from '../PasscodeAuthParamList';
import { DefaultLayout } from '../../../layouts/Default';
import { AppButton } from '../../../components/design/AppButton';
import { AppTextInput } from '../../../components/design/AppTextInput';

function LoginPasscodeScreen({ navigation }: PasscodeAuthNavProps<'LoginPasscode'>) {
  const { loginPasscode } = useContext(AuthContext);
  const passcodeSchema = Yup.object().shape({
    passcode: Yup.string()
      .required()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(4, 'Must be exactly 4 digits')
      .max(4, 'Must be exactly 4 digits'),
  });

  return (
    <DefaultLayout>
      <Formik
        initialValues={{
          passcode: '',
        }}
        validationSchema={passcodeSchema}
        onSubmit={async (values) => {}}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldError }) => (
          <View style={{ width: '100%' }}>
            <Text style={styles.screenTitle}>Enter your Passcode</Text>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
              <AppTextInput
                autoCorrect={false}
                style={{ input: styles.textInput, wrapper: styles.textInputWrapper }}
                value={values.passcode}
                onChangeText={handleChange('passcode')}
                onBlur={handleBlur('passcode')}
                keyboardType="numeric"
                autoCapitalize="none"
                placeholder="****"
                maxLength={4}
                secureTextEntry={true}
                error={touched.passcode ? errors.passcode : ''}
              />
            </View>
            <AppButton
              title="Submit"
              onPress={async () => {
                try {
                  await loginPasscode(values.passcode);
                } catch (e) {
                  if (e.message === 'LOGIN_PASSCODE_FAILED') setFieldError('passcode', 'Incorrect Passcode');
                  else setFieldError('passcode', e.message);
                }
              }}
            />
          </View>
        )}
      </Formik>
    </DefaultLayout>
  );
}

const styles = StyleSheet.create({
  screenTitle: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    marginBottom: 40,
  },
  textInputWrapper: { marginBottom: 70, width: 200 },
  textInput: {
    width: '100%',
    backgroundColor: 'transparent',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#c4c4c4',
    borderRadius: 0,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    fontSize: 35,
  },
});
export default LoginPasscodeScreen;
