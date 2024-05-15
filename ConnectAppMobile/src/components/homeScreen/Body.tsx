import {FlatList, Text, View} from 'react-native';
import {PostItem} from './PostItem';
import React, {useContext, useEffect} from 'react';
import {useState} from 'react';
import {fetchData} from '../../utils/fetchData';

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

export const useFecthData = () => {
  const userContext = useContext(CurrentUserContext);
  const [data, setData] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const posts = await fetchData(userContext.user.userId);
      setData(posts);
      console.log(posts);
    })();
  }, []);
  return {data, loading};
};
export function Body() {
  const {data, loading} = useFecthData();
  return <FlatList data={data} renderItem={renderPostDetails} testID="data" />;
}
