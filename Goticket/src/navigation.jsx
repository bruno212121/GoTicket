import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './components/Template/Search';
import MainScreen from './components/Template/Main';
import BusScreen from './components/Template/Bus';


const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="Details" component={MainScreen} />
        <Stack.Screen name="Bus" component={BusScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
