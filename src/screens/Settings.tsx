import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';

export const Settings = () => {
  const context = useContext(AuthContext);

  return (
    <View>
      <Text>Settings</Text>
      <Text>{JSON.stringify(context.authState, null, 2)}</Text>
      <Button onPress={context.signIn} title="signIn" />
    </View>
  );
};
