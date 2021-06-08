import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type AuthParamList = {
  LoginEmail: undefined;
  LoginPasscode: undefined;
  SignUp: undefined;
  SetPasscode: undefined;
  VerifyEmail: {
    email: string;
  };
  HomeGuest: undefined;
  LoginEmailVerifyOTP: {
    email: string;
    password: string;
  };
};

export type AuthNavProps<T extends keyof AuthParamList> = {
  navigation: StackNavigationProp<AuthParamList, T>;
  route: RouteProp<AuthParamList, T>;
};
