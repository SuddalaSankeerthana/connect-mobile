import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const SigIn = ({navigation}: any) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Text style={{color: '#43A5EB'}}>Sign in</Text>
    </TouchableOpacity>
  );
};

export default SigIn;
