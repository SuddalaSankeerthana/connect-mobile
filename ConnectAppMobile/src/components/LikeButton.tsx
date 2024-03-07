import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {Dispatch, SetStateAction, useContext, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';
import {faHeart as faSHeart} from '@fortawesome/free-solid-svg-icons';
import {LikesContext} from './LikeContext';

const LikeButton = () =>
  //   {
  //   // setLikesCount,
  //   // likesCount,
  //   // likeStatus,
  //   // setLikeStatus,
  // }: {

  //   // setLikesCount: Dispatch<SetStateAction<number>>;
  //   // setLikeStatus: Dispatch<SetStateAction<boolean>>;
  //   // likesCount: number;
  //   // likeStatus: boolean;
  // }
  {
    const likeContext = useContext(LikesContext);
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
            style={{color: 'red', borderColor: 'black'}}></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon icon={farHeart} size={27} />
        )}
      </TouchableOpacity>
    );
  };
export default LikeButton;
