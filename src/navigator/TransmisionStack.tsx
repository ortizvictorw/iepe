import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {TransmisionScreen} from '../screens/TransmisionScreen';
import {CheckListScreen} from '../screens/CheckListScreen';
import {InformeScreen} from '../screens/InformeScreen';

export type RootStackParams = {
  TransmisionScreen: undefined;
  CheckListScreen: undefined;
  InformeScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const TransmisionStack = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Pagina2Screen"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="TransmisionScreen"
        options={{title: 'Transmisión'}}
        component={TransmisionScreen}
      />
      <Stack.Screen
        name="CheckListScreen"
        options={{title: 'CheckList'}}
        component={CheckListScreen}
      />
      <Stack.Screen
        name="InformeScreen"
        options={{title: 'Informe'}}
        component={InformeScreen}
      />
    </Stack.Navigator>
  );
};
