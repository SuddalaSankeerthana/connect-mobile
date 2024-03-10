import React from 'react';
import {PostType} from './Body';

export const PostContext = React.createContext<PostType>({
  PostId: '',
  UserId: '',
  Username: '',
  ProfileImageAddress: '',
  Images: [],
  Caption: '',
  LikesCount: 0,
  LikeStatus: false,
});
