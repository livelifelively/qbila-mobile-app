import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type SubjectsParamList = {
  MemberInfo: undefined;
  SubjectsSelection: undefined;
};

export type SubjectsNavProps<T extends keyof SubjectsParamList> = {
  navigation: StackNavigationProp<SubjectsParamList, T>;
  route: RouteProp<SubjectsParamList, T>;
};
