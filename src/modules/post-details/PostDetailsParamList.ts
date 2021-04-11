import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type PostDetailsParamList = {
  PostDetails: undefined;
  Supporters: undefined;
  Critics: undefined;
};

export type PostDetailsNavProps<T extends keyof PostDetailsParamList> = {
  navigation: StackNavigationProp<PostDetailsParamList, T>;
  route: RouteProp<PostDetailsParamList, T>;
};
