import {Platform} from 'react-native';
import {REPL_MODE_SLOPPY} from 'repl';
import {Alert} from 'react-native';
import {LoginRouteProps} from '../types/LoginRouteProps';
import {CurrentUserContext} from '../components/homeScreen/LikeContext';
export const handleLogin = async (
  userData: LoginRouteProps,
  navigation: any,
  userContext: CurrentUserContext,
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
    userContext.setUser({
      userId: response.user.UserId,
      userName: response.user.Username,
      profile: response.user.ProfileImageAddress,
      email: response.user.Email,
    });
    console.log(userContext.user);
    if (response.message === 'Loggged in successfully') {
      Alert.alert('Login successfully!');
      console.log('s', response.user);
      navigation.navigate('Home');
    } else {
      Alert.alert('Something went wrong');
    }
  } catch (error) {
    console.error('Error registering user:', error);
    Alert.alert('Failed to login');
  }
  return true;
};
