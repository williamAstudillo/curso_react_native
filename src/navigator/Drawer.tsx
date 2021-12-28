import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigation} from './StackNavigation';
import {Settings} from '../screens/Settings';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{drawerType: width >= 768 ? 'permanent' : 'front'}}>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'home'}}
        component={StackNavigation}
      />
      <Drawer.Screen
        name="Settings"
        options={{title: 'Settings'}}
        component={Settings}
      />
    </Drawer.Navigator>
  );
};
