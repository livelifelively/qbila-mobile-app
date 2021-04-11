import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type SettingsParamList = {
  Settings: undefined;
  ProfileSettings: undefined;
  SecuritySettings: undefined;
  TwoFactorAuthentication: undefined;
  ChangePasscode: undefined;
};

export type SettingsNavProps<T extends keyof SettingsParamList> = {
  navigation: StackNavigationProp<SettingsParamList, T>;
  route: RouteProp<SettingsParamList, T>;
};
