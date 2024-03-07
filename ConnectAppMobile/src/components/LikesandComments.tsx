import {Image, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {styles} from '../styles/HomeScreenBodyStyles';
import LikeButton from './LikeButton';
import {LikesContext} from './LikeContext';

export function LikesAndComments() {
  const likeContext = useContext(LikesContext);
  return (
    <View style={styles.likesAndComment}>
      <LikeButton></LikeButton>
      <View>
        <Text>{likeContext.likesCount}</Text>
      </View>
      <View>
        <Image
          source={require('../assets/commentIcon.png')}
          style={styles.commentIcon}></Image>
      </View>
    </View>
  );
}
