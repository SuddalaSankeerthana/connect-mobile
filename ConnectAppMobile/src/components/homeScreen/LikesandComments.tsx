import {Image, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';
import {styles} from '../../styles/HomeScreenBodyStyles';
import Comment from './comment/Comment';
import { PostType } from './Body';
import { LikeContext } from './LikeContext';
import LikeButton from './LikeButton';

export function LikesAndComments({
  likes_count,
  post
}: {
  likes_count: number;
  post: PostType;
}) {
  const likeContext = useContext(LikeContext);
  return (
    <View style={styles.likesAndComment}>
      <LikeButton></LikeButton>
      <View style={styles.likeCount}>
        <Text >{likeContext.likesCount}</Text>
      </View>
      <View>
        <Comment  post={post}/>
      </View>
    </View>
  );
}


