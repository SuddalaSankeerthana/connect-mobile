import React, {Dispatch, SetStateAction} from 'react';

import {PostType} from './Body';

export type LikeContextType = {
  likesCount: number;
  likeStatus: boolean;
  setLikesCount: Dispatch<SetStateAction<number>>;
  setLikeStatus: Dispatch<SetStateAction<boolean>>;
};
export type User = {
  UserId: string;
};
export const CurrentUserContext = React.createContext<User>({UserId: '3'});
export const LikeContext = React.createContext<LikeContextType>();
export const PostContext = React.createContext<PostType>();
