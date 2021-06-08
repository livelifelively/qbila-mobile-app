import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type OnboardingParamList = {
  Onboarding: undefined;
};

export type OnboardingNavProps<T extends keyof OnboardingParamList> = {
  navigation: StackNavigationProp<OnboardingParamList, T>;
  route: RouteProp<OnboardingParamList, T>;
};
