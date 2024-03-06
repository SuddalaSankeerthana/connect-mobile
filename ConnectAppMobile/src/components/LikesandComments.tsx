import {Image, Text, View} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {styles} from '../styles/HomeScreenBodyStyles';
import LikeButton from './LikeButton';

export function LikesAndComments({
  likes_count,
  like_status,
}: {
  likes_count: number;
  like_status: boolean;
}) {
  const [likesCount, setLikesCount] = useState(likes_count);
  return (
    <View style={styles.likesAndComment}>
      <LikeButton
        setLikesCount={setLikesCount}
        likesCount={likesCount}
        like_status={like_status}></LikeButton>
      <View>
        <Text>{likesCount}</Text>
      </View>
      <View>
        <Image
          source={require('../assets/commentIcon.png')}
          style={styles.commentIcon}></Image>
      </View>
    </View>
  );
}