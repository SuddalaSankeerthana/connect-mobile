import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/screens/Home';
import RegistrationScreen from './src/screens/Registration';
import UploadScreen from './src/screens/Upload';
import LoginScreen from './src/screens/Login';
import {UserDetails} from './src/types/User';
import {CurrentUserContext} from './src/components/CurrentContext';

type AppStackParamList = {
  Home: undefined;
  Upload: undefined;
  Login: undefined;
  Registration: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

function AppStack() {
  const [user, setUser] = useState<UserDetails>({});
  return (
    <CurrentUserContext.Provider value={{user: user, setUser: setUser}}>
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
    </CurrentUserContext.Provider>
  );
}
export default AppStack;
