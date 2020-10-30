import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import Scanner from './screens/Scanner';
import Generator from './screens/Generator';
import Display from './screens/Display';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Scan" component={Scanner} />
        <Stack.Screen name="Generate" component={Generator} />
        <Stack.Screen name="Data" component={Display} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
