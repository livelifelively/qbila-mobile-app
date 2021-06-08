// VaultNavProps
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type VaultParamList = {
  VaultCreationStack: Record<string, unknown>;
  VaultHistoryStack: undefined;
  VaultActiveDepositsStack: undefined;
};

export type VaultNavProps<T extends keyof VaultParamList> = {
  navigation: StackNavigationProp<VaultParamList, T>;
  route: RouteProp<VaultParamList, T>;
};

export type HomeParamList = {
  Home: undefined;
  WalletStack: Record<string, unknown>;
  SettingsStack: undefined;
};

export type HomeNavProps<T extends keyof HomeParamList> = {
  navigation: StackNavigationProp<HomeParamList, T>;
  route: RouteProp<HomeParamList, T>;
};

export type RewardsParamList = {
  InviteFriends: undefined;
};

export type RewardsNavProps<T extends keyof RewardsParamList> = {
  navigation: StackNavigationProp<RewardsParamList, T>;
  route: RouteProp<RewardsParamList, T>;
};
