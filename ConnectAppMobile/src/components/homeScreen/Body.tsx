import {FlatList, Text, View} from 'react-native';
import {PostItem} from './PostItem';
import React, {useContext, useEffect, useState} from 'react';
import {fetchData} from '../../utils/fetchData';
import {useIsFocused} from '@react-navigation/native'; 

import {PostContext} from './PostContext';
import {CurrentUserContext} from '../CurrentContext';
export type PostType = {
  PostId: string;
  UserId?: string;
  Username: string;
  ProfileImageAddress: string;
  Images: any;
  Caption: string;
  LikesCount: number;
  LikeStatus: Boolean;
};
const renderPostDetails = ({item}: {item: PostType}) => {
  return (
    <PostContext.Provider value={item}>
      <PostItem
        PostId={item.PostId}
        ProfileImageAddress={item.ProfileImageAddress}
        Username={item.Username}
        Images={item.Images}
        Caption={item.Caption}
        LikesCount={item.LikesCount}
        LikeStatus={item.LikeStatus}
      />
    </PostContext.Provider>
  );
};

export const useFetchData = () => {
  const userContext = useContext(CurrentUserContext);
  const [data, setData] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused(); 

  useEffect(() => {
    if (isFocused) {

      (async () => {
        const posts = await fetchData(userContext.user.userId);
        setData(posts);
        setLoading(false);
      })();
    }
  }, [isFocused, userContext.user.userId]);
  return {data, loading};
};
export function Body() {
  const {data, loading} = useFetchData();
  return <FlatList data={data} renderItem={renderPostDetails} testID="data" />;
}
