import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/Home';
import RegistrationScreen from './src/screens/Registration';
import UploadScreen from './src/screens/Upload';
import LoginScreen from './screens/Login';

type AppStackParamList = {
  Home: undefined;
  Upload: undefined;
  Login: undefined;
  Registration: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Upload"
          component={UploadScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default AppStack
