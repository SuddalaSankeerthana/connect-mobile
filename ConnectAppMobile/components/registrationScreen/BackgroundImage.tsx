import React from 'react';
import {Image} from 'react-native';
const BackGroundImage = () => {
  return (
    <Image
      style={{
        marginBottom: 'auto',
        marginEnd: 'auto',
        left: '-2%',
        top: '-2%',
      }}
      source={require('../../images/png/shape.png')}></Image>
  );
};

export default BackGroundImage;
