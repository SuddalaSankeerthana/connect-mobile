import React, {Dispatch, SetStateAction} from 'react';

import {PostType} from './Body';

export type LikeContextType = {
  likesCount: number;
  likeStatus: boolean;
  setLikesCount: Dispatch<SetStateAction<number>>;
  setLikeStatus: Dispatch<SetStateAction<boolean>>;
};
export type UserDetails = {
  userId: string;
  userName: string;
  email: string;
  profile: string;
};
export type CurrentUserContext = {
  user: UserDetails;
  setUser: Dispatch<SetStateAction<UserDetails>>;
};
export type User = {
  UserId: string;
};
export const CurrentUserContext = React.createContext<CurrentUserContext>({
  user: {
    userId: '',
    userName: '',
    email: '',
    profile: '',
  },
  setUser: () => {},
});
export const LikeContext = React.createContext<LikeContextType>({
  likesCount: 0,
  likeStatus: false,
  setLikesCount: () => {},
  setLikeStatus: () => {},
});
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
