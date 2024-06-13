import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Home from '../screens/Home';
export type RootNavigationProps = {
  Splash: undefined;
  Login: undefined;
  Signup: undefined;
  Home: undefined;
};
const Stack = createStackNavigator<RootNavigationProps>();
// const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Login" component={Login} options={{
          headerShown:false
        }} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} options={{
          headerShown:false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
