import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type SetPasscodeParamList = {
  SetPasscode: undefined;
};

export type PasscodeNavProps<T extends keyof SetPasscodeParamList> = {
  navigation: StackNavigationProp<SetPasscodeParamList, T>;
  route: RouteProp<SetPasscodeParamList, T>;
};
