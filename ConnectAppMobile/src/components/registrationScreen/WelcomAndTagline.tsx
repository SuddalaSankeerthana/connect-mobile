import React from 'react';
import {Text} from 'react-native';

import styles from '../../styles/registration.style';

const WelcomeAndTagline = () => {
  return (
    <>
      <Text style={styles.welcome}>Welcome to Onboard</Text>
      <Text style={styles.tagLine}>
        Let's help to meet up your connections.
      </Text>
    </>
  );
};
export default WelcomeAndTagline;
