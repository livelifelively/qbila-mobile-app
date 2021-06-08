import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type PasscodeAuthParamList = {
  LoginPasscode: undefined;
};

export type PasscodeAuthNavProps<T extends keyof PasscodeAuthParamList> = {
  navigation: StackNavigationProp<PasscodeAuthParamList, T>;
  route: RouteProp<PasscodeAuthParamList, T>;
};
