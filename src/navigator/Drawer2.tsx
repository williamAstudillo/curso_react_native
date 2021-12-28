import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Settings} from '../screens/Settings';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {Tabs} from './Tabs';

const Drawer = createDrawerNavigator();

export const MyDrawer2 = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{drawerType: width >= 768 ? 'permanent' : 'front'}}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="StackNavigator" component={Tabs} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};
const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatar_container}>
        <Image style={styles.avatar} source={require('../assets/avatar.png')} />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('StackNavigator')}>
          <Text>Navegacion </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Text>Ajustes </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
  },
  avatar_container: {
    alignItems: 'center',
  },
});
