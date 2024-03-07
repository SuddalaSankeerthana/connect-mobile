import {Image, Text, View} from 'react-native';
import React, {Dispatch, SetStateAction, useContext, useState} from 'react';
import {styles} from '../styles/HomeScreenBodyStyles';
import LikeButton from './LikeButton';
import {LikesContext} from './LikeContext';

export function LikesAndComments() {
  //   {
  //   // likesCount,
  //   // likeStatus,
  //   // setLikesCount,
  //   // setLikeStatus,
  // }: {
  //   // likesCount: number;
  //   // setLikesCount: Dispatch<SetStateAction<number>>;
  //   // setLikeStatus: Dispatch<SetStateAction<boolean>>;
  //   // likeStatus: boolean;
  // }
  const likeContext = useContext(LikesContext);
  return (
    <View style={styles.likesAndComment}>
      <LikeButton
      // setLikeStatus={likeContext?.setLikeStatus}
      // setLikesCount={likeContext.setLikesCount}
      // likesCount={likeContext.likesCount}
      // likeStatus={likeContext.likeStatus}
      ></LikeButton>
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
