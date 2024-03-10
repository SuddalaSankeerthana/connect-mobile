import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/screens/Home';
import RegistrationScreen from './src/screens/Registration';
import UploadScreen from './src/screens/Upload';
import LoginScreen from './src/screens/Login';
import {UserDetails} from './src/types/User';
import {CurrentUserContext} from './src/components/homeScreen/LikeContext';

type AppStackParamList = {
  Home: undefined;
  Upload: undefined;
  Login: undefined;
  Registration: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

function AppStack() {
  const [user, setUser] = useState<UserDetails>({
    userId: '3',
    userName: 'ss',
    profile:
      'https://i.pinimg.com/originals/d8/2b/ca/d82bca57dcaa9ceb4c827e3d6ab9fcfe.jpg',
    email: '',
  });
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
