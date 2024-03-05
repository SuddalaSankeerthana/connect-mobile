import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

const RegisterButton = ({navigation}: any) => {
  return (
    <TouchableOpacity
      style={{paddingTop: '12%', paddingBottom: '5%'}}
      onPress={() => {
        console.log('Register button clicked');
        navigation.navigate('Home');
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#43A5EB',
          width: 350,
          height: 60,
          borderRadius: 8,
          paddingLeft: '5%',
          paddingRight: 10,
        }}>
        <Text style={{color: 'white', fontWeight: '600', fontSize: 18}}>
          Register
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RegisterButton;
