import React from 'react';
import {Text} from 'react-native';
import SigIn from './SignIn';
const SigInContent = ({navigation}: any) => {
  return (
    <>
      <Text style={{color: '#000000'}}> Already have an account? </Text>
      <SigIn navigation={navigation}></SigIn>
    </>
  );
};
export default SigInContent;
