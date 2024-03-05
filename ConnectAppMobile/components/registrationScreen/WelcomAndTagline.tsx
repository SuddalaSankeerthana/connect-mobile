import React from 'react';
import {Text} from 'react-native';
const WelcomeAndTagline = () => {
  return (
    <>
      <Text
        style={{
          fontSize: 18,
          color: 'black',
          fontFamily: 'bold',
          fontWeight: '700',
          marginTop: '5%',
        }}>
        Welcome to Onboard
      </Text>
      <Text
        style={{
          textAlign: 'center',
          width: 203,
          height: 40,
          color: '#000000CC',
        }}>
        Let's help to meet up your connections.
      </Text>
    </>
  );
};
export default WelcomeAndTagline;
