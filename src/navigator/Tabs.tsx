import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {Tabs1} from '../screens/Tabs1';
import {StackNavigation} from './StackNavigation';

import {Platform} from 'react-native';
import {TopTab} from './TopTab';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndorid />;
};

const BottomTabAndoid = createMaterialBottomTabNavigator();

const TabsAndorid = () => {
  return (
    <BottomTabAndoid.Navigator
      sceneAnimationEnabled={true}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          // tabBarIcon: ({focused, color, size}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1':
              iconName = 'basketball-outline';
              break;
            case 'Tab2':
              iconName = 'basketball-outline';
              break;
            case 'Stack':
              iconName = 'basketball-outline';
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <BottomTabAndoid.Screen name="Tab1" component={Tabs1} />
      <BottomTabAndoid.Screen name="Tab2" component={TopTab} />
      <BottomTabAndoid.Screen name="Stack" component={StackNavigation} />
    </BottomTabAndoid.Navigator>
  );
};

const BootomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    // <Tab.Navigator
    //   // eslint-disable-next-line react-native/no-inline-styles
    //   sceneContainerStyle={{
    //     backgroundColor: 'grey',
    //   }}
    //   // screenOptions={{
    //   //   tabBarActiveTintColor: 'blue',
    //   //   tabBarStyle: {borderTopColor: 'red'},
    //   // }}
    //   screenOptions={{
    //     tabBarIcon: () => {
    //       let iconName: string = '';
    //     },
    //   }}>
    <BootomTabIOS.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          // tabBarIcon: ({focused, color, size}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1':
              iconName = 'body-outline';
              break;
            case 'Tab2':
              iconName = 'T2';
              break;
            case 'Stack':
              iconName = 'St';
              break;
          }
          return <Icon name={iconName} size={100} color={color} />;
        },
      })}>
      {/* <Tab.Screen
        name="Tab1"
        options={{
          title: 'Tab1',
          tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }}
        component={Tabs1}
      /> */}
      <BootomTabIOS.Screen name="Tab1" component={Tabs1} />
      <BootomTabIOS.Screen name="Tab2" component={TopTab} />
      <BootomTabIOS.Screen name="Stack" component={StackNavigation} />
    </BootomTabIOS.Navigator>
  );
};
