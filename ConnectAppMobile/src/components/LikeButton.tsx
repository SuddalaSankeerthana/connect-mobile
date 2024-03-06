import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {Dispatch, SetStateAction, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';
import {faHeart as faSHeart} from '@fortawesome/free-solid-svg-icons';

const LikeButton = ({
  setLikesCount,
  likesCount,
  like_status,
}: {
  setLikesCount: Dispatch<SetStateAction<number>>;
  likesCount: number;
  like_status: boolean;
}) => {
  const [likeStatus, setLikeStatus] = useState(like_status);
  return (
    <TouchableOpacity
      onPress={() => {
        setLikeStatus(!likeStatus);
        likeStatus
          ? setLikesCount(likesCount - 1)
          : setLikesCount(likesCount + 1);
      }}>
      {likeStatus ? (
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
