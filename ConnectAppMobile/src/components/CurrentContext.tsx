import React, {Dispatch, SetStateAction} from 'react';

export type UserDetails = {
  userId: string;
  userName: string;
  email: string;
  profile: string;
};
export type CurrentUserContextType = {
  user: UserDetails;
  setUser: Dispatch<SetStateAction<UserDetails>>;
};

export const CurrentUserContext = React.createContext<CurrentUserContextType>({
  user: {
    userId: '',
    userName: '',
    email: '',
    profile: '',
  },
  setUser: () => {},
});
