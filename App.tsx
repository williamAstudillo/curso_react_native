import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigation} from './src/navigator/StackNavigation';
// import {MyDrawer} from './src/navigator/Drawer';
import {MyDrawer2} from './src/navigator/Drawer2';
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <Appstate>
        <MyDrawer2 />
      </Appstate>
    </NavigationContainer>
  );
};

const Appstate = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
