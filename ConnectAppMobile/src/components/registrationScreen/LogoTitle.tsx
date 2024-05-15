import React from 'react';
import {Text, View, Image} from 'react-native';

import styles from '../../styles/registration.style';

const LogoAndTitle = (): React.JSX.Element => {
  return (
    <View style={styles.logoAndTitleContainer}>
      <Image
        testID="logo"
        source={require('../../images/png/logo2.png')}
        style={styles.logo}></Image>
      <Text style={styles.title}>CONNECT</Text>
    </View>
  );
};

export default LogoAndTitle;
