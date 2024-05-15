import React from 'react';
import {Text, View} from 'react-native';

import SigIn from './SignIn';
import styles from '../../styles/registration.style';

const SignInContent = ({navigation}: any) => {
  return (
    <View style={styles.signIncontent}>
      <Text style={styles.alredyHaveAccount}> Already have an account? </Text>
      <SigIn navigation={navigation}></SigIn>
    </View>
  );
};
export default SignInContent;
