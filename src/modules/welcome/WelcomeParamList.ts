import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type WelcomeParamList = {
  MemberInfo: undefined;
  SubjectsSelection: undefined;
};

export type WelcomeNavProps<T extends keyof WelcomeParamList> = {
  navigation: StackNavigationProp<WelcomeParamList, T>;
  route: RouteProp<WelcomeParamList, T>;
};
