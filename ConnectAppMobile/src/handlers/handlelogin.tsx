import {Platform} from 'react-native';

import {Alert} from 'react-native';
import {LoginRouteProps} from '../types/LoginRouteProps';
import {CurrentUserContextType} from '../components/CurrentContext';

export const handleLogin = async (
  userData: LoginRouteProps,
  navigation: any,
  userContext: CurrentUserContextType,
) => {
  try {
    const url =
      Platform.OS == 'android'
        ? 'http://10.0.2.2:8080/auth/login'
        : 'http://localhost:8080/auth/login';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    }).then(res => {
      return res.json();
    });
    if (response.message === 'Logged in Successfully!') {
      userContext.setUser({
        userId: response.user.UserId,
        userName: response.user.Username,
        profile: response.user.ProfileImageAddress,
        email: response.user.Email,
      });
      Alert.alert('Logged in successfully!');
      navigation.navigate('Home');
    } else if (response.message === 'Invalid Email') {
      Alert.alert('Invalid Email!');
    } else if (response.message === 'Invalid Password') {
      Alert.alert('Invalid Password!');
    } else {
      Alert.alert('Something went wrong');
    }
  }  catch (error) {
    console.error('Error registering user:', error);
    Alert.alert('Failed to login');
  }
  return true;
};
