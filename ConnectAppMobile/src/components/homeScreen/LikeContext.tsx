import React, {Dispatch, SetStateAction} from 'react';
import { createContext } from 'react';

export type LikeContextType = {
  likesCount: number;
  likeStatus: boolean;
  setLikesCount: Dispatch<SetStateAction<number>>;
  setLikeStatus: Dispatch<SetStateAction<boolean>>;
};
// export const LikesContext = React.createContext<LikeContextType>();
export const LikeContext=React.createContext<LikeContextType>();