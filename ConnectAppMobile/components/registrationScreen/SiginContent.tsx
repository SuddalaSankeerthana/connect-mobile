import React from 'react';
import {Text} from 'react-native';
import SigIn from './SignIn';
import styles from '../../styles/registration.style';
const SigInContent = ({navigation}: any) => {
  return (
    <>
      <Text style={styles.alredyHaveAccount}> Already have an account? </Text>
      <SigIn navigation={navigation}></SigIn>
    </>
  );
};
export default SigInContent;
