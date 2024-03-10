import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';
import {faHeart as faSHeart} from '@fortawesome/free-solid-svg-icons';
import {LikeContext, PostContext, CurrentUserContext} from './LikeContext';
import {updateLikeStatus} from '../../handlers/handlerLike';

const LikeButton = () => {
  const likeContext = useContext(LikeContext);
  const postContext = useContext(PostContext);
  const currentUser = useContext(CurrentUserContext);
  return (
    <TouchableOpacity
      onPress={() => {
        likeContext.likeStatus
          ? likeContext.setLikesCount(likeContext.likesCount - 1)
          : likeContext.setLikesCount(likeContext.likesCount + 1);
        updateLikeStatus(
          likeContext.setLikeStatus,
          likeContext.likeStatus,
          postContext.PostId,
          currentUser.user.userId,
        );
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
