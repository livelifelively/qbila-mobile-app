import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { DefaultLayout } from '../../../layouts/Default';
import { AuthContext } from '../../auth/AuthProvider';
import { AppButton } from '../../../components/design/AppButton';
import { AppTextInput } from '../../../components/design/AppTextInput';
import { SettingsNavProps } from '../SettingsParamList';

const ChangePasscodeScreen = ({ navigation }: SettingsNavProps<'ProfileSettings'>) => {
  const [passcodeConfirmation, setPasscodeConfirmation] = useState(() => 'ADD_OLD_PASSCODE');
  const passcodeSchema = Yup.object().shape({
    passcode: Yup.string()
      .required()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(4, 'Must be exactly 4 digits')
      .max(4, 'Must be exactly 4 digits'),
    newPasscode: Yup.string()
      .required()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(4, 'Must be exactly 4 digits')
      .max(4, 'Must be exactly 4 digits'),
  });
  const { setPasscode, confirmPasscode } = useContext(AuthContext);

  return (
    <DefaultLayout>
      <Formik
        initialValues={{
          passcode: '',
          newPasscode: '',
        }}
        validationSchema={passcodeSchema}
        onSubmit={async () => {}}
      >
        {({ handleChange, handleBlur, values, errors, touched, setFieldError }) => {
          switch (passcodeConfirmation) {
            case 'ADD_OLD_PASSCODE':
              return (
                <OldPasscode
                  handleBlur={handleBlur}
                  values={values}
                  handleChange={handleChange}
                  errors={errors}
                  touched={touched}
                  setPasscodeConfirmation={setPasscodeConfirmation}
                  confirmPasscode={confirmPasscode}
                  setFieldError={setFieldError}
                />
              );
            case 'ADD_NEW_PASSCODE':
              return (
                <NewPasscode
                  handleBlur={handleBlur}
                  values={values}
                  handleChange={handleChange}
                  setPasscode={setPasscode}
                  errors={errors}
                  touched={touched}
                  navigation={navigation}
                />
              );
          }
        }}
      </Formik>
    </DefaultLayout>
  );
};

function NewPasscode({ values, handleBlur, handleChange, touched, errors, setPasscode, navigation }) {
  return (
    <View style={{ width: '100%' }}>
      <Text style={styles.screenTitle}>Create a New Passcode</Text>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
        <AppTextInput
          autoCorrect={false}
          style={{ input: styles.textInput, wrapper: styles.textInputWrapper }}
          value={values.newPasscode}
          onChangeText={handleChange('newPasscode')}
          onBlur={handleBlur('newPasscode')}
          placeholder="****"
          keyboardType="numeric"
          autoCapitalize="none"
          secureTextEntry={true}
          maxLength={4}
          error={touched.newPasscode ? errors.newPasscode : ''}
        />
      </View>
      <AppButton
        title="Confirm"
        onPress={() => {
          try {
            setPasscode(values.newPasscode);
            navigation.navigate('SecuritySettings');
          } catch (e) {
            console.log(e);
          }
        }}
      />
    </View>
  );
}

function OldPasscode({
  values,
  handleBlur,
  handleChange,
  touched,
  errors,
  setPasscodeConfirmation,
  confirmPasscode,
  setFieldError,
}) {
  return (
    <View style={{ width: '100%' }}>
      <Text style={styles.screenTitle}>Enter your old Passcode</Text>
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
          confirmPasscode(values.passcode).then((res: boolean) => {
            if (!res) setFieldError('passcode', 'Incorrect Passcode');
            else setPasscodeConfirmation('ADD_NEW_PASSCODE');
          });
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

export default ChangePasscodeScreen;
