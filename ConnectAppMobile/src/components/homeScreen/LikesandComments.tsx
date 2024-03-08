import {Image, Text, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';
import {styles} from '../../styles/HomeScreenBodyStyles';

export function LikesAndComments({likes_count}: {likes_count: number}) {
  return (
    <View style={styles.likesAndComment}>
      <View style={styles.heartIcon}>
        <FontAwesomeIcon icon={farHeart} size={27} />
      </View>
      <View>
        <Text>{likes_count}</Text>
      </View>
      <View>
        <Image
          source={require('../../assets/commentIcon.png')}
          style={styles.commentIcon}></Image>
      </View>
    </View>
  );
}
