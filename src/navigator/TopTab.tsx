import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Chat} from '../screens/Chat';
import {Albums} from '../screens/Albums';
import {Contact} from '../screens/Contact';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text} from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTab = () => {
  const {top} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{paddingTop: top}}
      // eslint-disable-next-line react-native/no-inline-styles
      sceneContainerStyle={{backgroundColor: 'white'}}
      //   screenOptions={{
      //     tabBarPressColor: 'blue',
      //     tabBarShowIcon: true, // habilitar icons
      //     tabBarIndicatorStyle: {
      //       backgroundColor: 'red',
      //     },
      //     tabBarStyle: {
      //       shadowColor: 'transparent',
      //       elevation: 0, // ios
      //     },
      //   }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          // tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Chat':
              iconName = 'Ch';
              break;
            case 'Contact':
              iconName = 'Co';
              break;
            case 'Albums':
              iconName = 'Al';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
        tabBarPressColor: 'blue',
        tabBarShowIcon: true, // habilitar icons
        tabBarIndicatorStyle: {
          backgroundColor: 'red',
        },
        tabBarStyle: {
          shadowColor: 'transparent',
          elevation: 0, // ios
        },
      })}>
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Contact" component={Contact} />
      <Tab.Screen name="Albums" component={Albums} />
    </Tab.Navigator>
  );
};
