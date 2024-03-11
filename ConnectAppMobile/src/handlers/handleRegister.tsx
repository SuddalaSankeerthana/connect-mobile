import {Alert, Platform} from 'react-native';
import {RegisterRouteProps} from '../types/RegisterRouteProps';
import {CurrentUserContextType} from '../components/CurrentContext';
import {getHostName} from '../utils/getHostName';
export const handleRegister = async (
  userData: RegisterRouteProps,
  navigation: any,
  currentUser: CurrentUserContextType,
  changedImage: string,
) => {
  try {
    const networkHost = getHostName();
    const url = `'http://${networkHost}:8080/auth/register'`;

    const user: RegisterRouteProps = {
      username: userData.username,
      email: userData.email,
      password: userData.password,
      profileImageAddress: [changedImage],
    };
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then(res => {
      return res.json();
    });
    console.log(response.message);
    // console.log(response.message);
    console.log(response.user);
    if ((response.message = 'User registered successfully')) {
      currentUser.setUser({
        userId: response.user.UserId,
        userName: response.user.Username,
        profile: response.user.ProfileImageAddress,
        email: response.user.Email,
      });
      navigation.navigate('Home');
      Alert.alert('User registered successfully!');
    } else if (response.message === 'Email adrress already exists') {
      Alert.alert('User already exists with this email!');
    } else if (response.message === 'Failed to create user!') {
      Alert.alert('Ops.. Failed to create user!');
    } else {
      Alert.alert('Something went wrong');
    }
  } catch (error) {
    console.error('Error registering user:', error);
    Alert.alert('Failed to register user. Please try again later.');
  }
  return true;
};
