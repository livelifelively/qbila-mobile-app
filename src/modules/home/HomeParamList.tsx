// VaultNavProps
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type HomeParamList = {
  PostDetailsStack: undefined;
  SettingsStack: undefined
};

export type HomeNavProps<T extends keyof HomeParamList> = {
  navigation: StackNavigationProp<HomeParamList, T>
  route: RouteProp<HomeParamList, T>
}
