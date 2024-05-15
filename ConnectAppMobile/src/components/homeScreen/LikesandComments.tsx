import {Image, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {styles} from '../../styles/HomeScreenBodyStyles';
import LikeButton from './LikeButton';
import { LikeContext } from './LikeContext';

export function LikesAndComments() {
  const likeContext = useContext(LikeContext);
  return (
    <View style={styles.likesAndComment}>
      <LikeButton></LikeButton>
      <View>
        <Text>{likeContext.likesCount}</Text>
      </View>
      <View>
        <Image
          source={require('../../assets/commentIcon.png')}
          style={styles.commentIcon}></Image>
      </View>
    </View>
  );
}
