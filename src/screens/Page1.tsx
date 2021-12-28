import React, {useEffect} from 'react';
import {View, Text, Button, Image} from 'react-native';
// import {StackScreenProps} from '@react-navigation/stack';
import {DrawerScreenProps} from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any, any> {}

export const Page1 = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      // title: 'Hola como ta',
      // headerBackTitle: 'atras', // soplo funciona en ios
      // headerLeft: () => (
      //   <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
      // ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(JSON.stringify({hola: '3', como: 10}, null, 3));

  return (
    <View style={{backgroundColor: 'grey'}}>
      <Text>Page1</Text>
      <Image
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        style={{width: 400, height: 400}}
      />
      <Button
        title="go to screen 2"
        onPress={() => navigation.navigate('Page2')}
      />
    </View>
  );
};
// const styles = StyleSheet.create({
//   avatar: {
//     width: 50,
//     height: 50,
//     // backgroundColor: 'red',
//   },
// });
