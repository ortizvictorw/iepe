import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Platform} from 'react-native';

import {TransmisionStack} from './TransmisionStack';
import {colores} from '../theme/appTheme';
import {TopTabNavigator} from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import {Posts} from '../screens/Posts';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Posts':
              iconName = 'images-outline';
              break;

            case 'Muro':
              iconName = 'newspaper-outline';
              break;

            case 'TransmisionStack':
              iconName = 'radio-outline';
              break;
          }

          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <BottomTabAndroid.Screen
        name="Posts"
        options={{title: '+ Posts'}}
        component={Posts}
      />
      <BottomTabAndroid.Screen
        name="Muro"
        options={{title: 'Muro'}}
        component={TopTabNavigator}
      />
      <BottomTabAndroid.Screen
        name="TransmisionStack"
        options={{title: 'Transmision'}}
        component={TransmisionStack}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        activeTintColor: colores.primary,
        style: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        labelStyle: {
          fontSize: 15,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Posts':
              iconName = 'bandage-outline';
              break;

            case 'Videos':
              iconName = 'basketball-outline';
              break;

            case 'StackNavigator':
              iconName = 'bookmarks-outline';
              break;
          }

          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      {/* <Tab.Screen name="Posts" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }} >T1</Text> }} component={ Posts } /> */}
      <BottomTabIOS.Screen
        name="Posts"
        options={{title: 'Tab1'}}
        component={Posts}
      />
      <BottomTabIOS.Screen
        name="Videos"
        options={{title: 'Tab2'}}
        component={TopTabNavigator}
      />
      <BottomTabIOS.Screen
        name="TransmisionStack"
        options={{title: 'Stack'}}
        component={TransmisionStack}
      />
    </BottomTabIOS.Navigator>
  );
};
