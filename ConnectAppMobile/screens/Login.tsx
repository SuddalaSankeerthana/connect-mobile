import React from 'react';
import {Button, Text, View} from 'react-native';

const LoginScreen = ({navigation}: any) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <Text> Login screen</Text>
      <Button
        title="Login"
        onPress={() => {
          console.log('login clicked');
          navigation.navigate('Home');
        }}></Button>
      <Button
        title="Register"
        onPress={() => {
          console.log('Register button clicked');
          navigation.navigate('Registration');
        }}></Button>
    </View>
  );
};
export default LoginScreen;
