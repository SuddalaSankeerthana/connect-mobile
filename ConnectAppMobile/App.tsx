import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import RegistrationScreen from './screens/Registration';
import UploadScreen from './screens/Upload';
import {SafeAreaView} from 'react-native-safe-area-context';

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
  );
}
export default AppStack;
