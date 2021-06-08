import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { DefaultLayout } from '../../../layouts/Default';
import { AuthContext } from '../../auth/AuthProvider';
import { AppButton } from '../../../components/design/AppButton';
import { AppTextInput } from '../../../components/design/AppTextInput';

const SetPasscodeScreen = () => {
  const [passcodeConfirmation, setPasscodeConfirmation] = useState(() => 'TO_ADD_PASSCODE');
  const passcodeSchema = Yup.object().shape({
    passcode: Yup.string()
      .required()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(4, 'Must be exactly 4 digits')
      .max(4, 'Must be exactly 4 digits'),
    confirmPasscode: Yup.string()
      .required()
      .oneOf([Yup.ref('passcode'), null], 'Passcodes must match'),
  });
  const { setPasscode } = useContext(AuthContext);

  return (
    <DefaultLayout>
      <Formik
        initialValues={{
          passcode: '',
        }}
        validationSchema={passcodeSchema}
        onSubmit={async (values) => {
          try {
            setPasscode(values.passcode);
          } catch (e) {
            console.log(e);
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => {
          switch (passcodeConfirmation) {
            case 'TO_ADD_PASSCODE':
              return (
                <AddPasscode
                  handleBlur={handleBlur}
                  values={values}
                  handleChange={handleChange}
                  errors={errors}
                  touched={touched}
                  setPasscodeConfirmation={setPasscodeConfirmation}
                />
              );
            case 'PASSCODE_ADDED':
              return (
                <ConfirmPasscode
                  handleBlur={handleBlur}
                  values={values}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  errors={errors}
                  touched={touched}
                  setPasscodeConfirmation={setPasscodeConfirmation}
                />
              );
          }
        }}
      </Formik>
    </DefaultLayout>
  );
};

function ConfirmPasscode({ values, handleBlur, handleChange, touched, handleSubmit, errors, setPasscodeConfirmation }) {
  return (
    <View style={{ width: '100%' }}>
      <Text style={styles.screenTitle}>Confirm your Passcode</Text>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
        <AppTextInput
          autoCorrect={false}
          style={{ input: styles.textInput, wrapper: styles.textInputWrapper }}
          value={values.confirmPasscode}
          onChangeText={handleChange('confirmPasscode')}
          onBlur={handleBlur('confirmPasscode')}
          placeholder="****"
          keyboardType="numeric"
          autoCapitalize="none"
          secureTextEntry={true}
          maxLength={4}
          error={touched.confirmPasscode ? errors.confirmPasscode : ''}
        />
      </View>
      <AppButton
        title="Confirm"
        onPress={() => {
          handleSubmit();
        }}
      />
    </View>
  );
}

function AddPasscode({ values, handleBlur, handleChange, touched, errors, setPasscodeConfirmation }) {
  return (
    <View style={{ width: '100%' }}>
      <Text style={styles.screenTitle}>Setup a Passcode</Text>
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
        onPress={() => {
          setPasscodeConfirmation('PASSCODE_ADDED');
        }}
      />
    </View>
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

export default SetPasscodeScreen;
