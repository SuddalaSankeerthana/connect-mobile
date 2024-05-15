import React from 'react';
import {Image} from 'react-native';

import styles from '../../styles/registration.style';

const BackGroundImage = () => {
  return (
    <Image
      style={styles.backGroundImage}
      testID="backgground-image"
      source={require('../../images/png/shape.png')}></Image>
  );
};

export default BackGroundImage;
