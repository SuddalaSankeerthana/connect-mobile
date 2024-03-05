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
        onPress={() => navigation.navigate('Home')}></Button>
      <Button
        title="Register"
        onPress={() => navigation.navigate('Registration')}></Button>
    </View>
  );
};
export default LoginScreen;
