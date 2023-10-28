import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './components/template/Search';
import MainScreen from './components/template/Main';
import BusScreen from './components/template/Bus';
import Profile from './components/template/Profile';
import LoginScreen from './components/template/Login';
import RegisterScreen from './components/template/Register';



const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen name="Home" component={Main}  />
        <Stack.Screen name="Search" component={MainScreen} />
        <Stack.Screen name="Bus" component={BusScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
