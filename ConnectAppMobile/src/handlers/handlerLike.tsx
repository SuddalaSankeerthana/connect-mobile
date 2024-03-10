import {Dispatch, SetStateAction} from 'react';
import {postLikeUpdatetoPostData} from '../utils/postData';
import postUpdateLikeTable from '../utils/postData';
import {getHostName} from '../utils/getHostName';

export const updateLikeStatus = (
  setLikeStatus: Dispatch<SetStateAction<boolean>>,
  status: boolean,
  postId: string,
  userId: string,
) => {
  const networkHost = getHostName();
  setLikeStatus(!status);
  const urlForPosts = `http://${networkHost}:8080/homepage/like?postId=${postId}&likeStatus=${!status}`;
  postLikeUpdatetoPostData(urlForPosts);
  const urlForLikes = `http://${networkHost}:8080/homepage/update-like?status=${!status}`;
  postUpdateLikeTable(urlForLikes, {
    UserId: userId,
    PostId: postId,
  });
};
