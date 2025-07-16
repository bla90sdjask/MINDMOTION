import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importação das telas
import Login from './Screens/Login';
import Cadastrar from './Screens/Cadastrar';
import Cadastrar2 from './Screens/Cadastrar2';
import Cadastrar3 from './Screens/Cadastrar3';
import Home from './Screens/Home';
import face1 from './Screens/face1';
import face2 from './Screens/face2'
import face3 from './Screens/face3'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
        <Stack.Screen name="Cadastrar2" component={Cadastrar2} />
        <Stack.Screen name="Cadastrar3" component={Cadastrar3} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="face1" component={face1} />
        <Stack.Screen name="face2" component={face2} />
        <Stack.Screen name="face3" component={face3} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
