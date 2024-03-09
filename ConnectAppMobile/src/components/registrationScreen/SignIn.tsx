import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from '../../styles/registration.style';

const SignIn = ({navigation}: any) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Text style={styles.signInText}>Sign in</Text>
    </TouchableOpacity>
  );
};

export default SignIn;
