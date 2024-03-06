import React from 'react';
import {Button, Text, View} from 'react-native';

const RegistrationScreen = ({navigation}: any) => {
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Registration screen</Text>
      <Button
        title="Sign-In"
        onPress={() => navigation.navigate('Login')}></Button>
      <Button
        title="Register"
        onPress={() => navigation.navigate('Home')}></Button>
    </View>
  );
};
export default RegistrationScreen;
