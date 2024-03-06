import {Image, View} from 'react-native';
import {styles} from '../../styles/HomeScreenBodyStyles';

import React from 'react';

export function Comment() {
  return (
    <>
      <View>
        <Image
          source={require('../../assets/commentIcon.png')}
          style={styles.commentIcon}></Image>
      </View>
    </>
  );
}
