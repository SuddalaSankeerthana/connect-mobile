import {Dispatch, SetStateAction} from 'react';
import handleSubmit, {postLikeUpdatetoPostData} from '../utils/postData';
import postUpdateLikeTable from '../utils/postData';

export const updateLikeStatus = (
  setLikeStatus: Dispatch<SetStateAction<boolean>>,
  status: boolean,
  postId: string,
  userId: string,
) => {
  console.log('Status', status);
  setLikeStatus(!status);
  const urlForPosts = `http://localhost:8080/homepage/like?postId=${postId}&likeStatus=${!status}`;
  postLikeUpdatetoPostData(urlForPosts);
  const urlForLikes = `http://localhost:8080/homepage/update-like?status=${!status}`;
  postUpdateLikeTable(urlForLikes, {
    UserId: userId,
    PostId: postId,
  });
};
