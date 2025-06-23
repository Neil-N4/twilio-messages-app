import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/login';
import SignupScreen from './screens/signup';
import ChatsScreen from './screens/chats';
import MessageScreen from './screens/MessageScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Chats" component={ChatsScreen} />
        <Stack.Screen name="Message" component={MessageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}