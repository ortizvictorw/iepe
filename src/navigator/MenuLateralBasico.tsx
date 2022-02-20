import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {SettingsScreen} from '../screens/SettingsScreen';
import {useWindowDimensions} from 'react-native';
import {TransmisionStack} from './TransmisionStack';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator drawerType={width >= 768 ? 'permanent' : 'front'}>
      <Drawer.Screen
        name="TransmisionStack"
        options={{title: 'Home'}}
        component={TransmisionStack}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
