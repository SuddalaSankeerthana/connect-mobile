import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {Dispatch, SetStateAction, useContext, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';
import {faHeart as faSHeart} from '@fortawesome/free-solid-svg-icons';
import { LikeContext } from './LikeContext';

const LikeButton = () => {
  const likeContext = useContext(LikeContext);
  return (
    <TouchableOpacity
      onPress={() => {
        likeContext.setLikeStatus(!likeContext.likeStatus);
        likeContext.likeStatus
          ? likeContext.setLikesCount(likeContext.likesCount - 1)
          : likeContext.setLikesCount(likeContext.likesCount + 1);
      }}>
      {likeContext.likeStatus ? (
        <FontAwesomeIcon
          icon={faSHeart}
          size={27}
          testID="liked-button"
          style={{color: 'red', borderColor: 'black'}}></FontAwesomeIcon>
      ) : (
        <FontAwesomeIcon testID="not-liked-button" icon={farHeart} size={27} />
      )}
    </TouchableOpacity>
  );
};
export default LikeButton;
