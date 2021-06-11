import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SubjectsParamList } from './SubjectsParamList';

import MemberInfoScreen from './screens/MemberInfoScreen';
import SubjectSelectionScreen from './screens/SubjectsSelectionScreen';

const Stack = createStackNavigator<SubjectsParamList>();

export const WelcomeStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="MemberInfo"
    >
      <Stack.Screen name="MemberInfo" component={MemberInfoScreen} />
      <Stack.Screen name="MemberInfo" component={SubjectSelectionScreen} />
    </Stack.Navigator>
  );
};
