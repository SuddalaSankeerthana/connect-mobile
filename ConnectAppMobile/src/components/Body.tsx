import {FlatList} from 'react-native';
import {PostItem} from '../components/PostItem';
import React, {useEffect} from 'react';
import {useState} from 'react';
import { fetchData } from '../utils/fetchData';

export type PostType = {
  PostId: string;
  UserId?: string;
  Username: string;
  ProfileImageAddress: string;
  Images: any;
  Caption: string;
  LikesCount: number;
};
const renderPostDetails = ({item}: {item: PostType}) => {
  return (
    <PostItem
      PostId={item.PostId}
      ProfileImageAddress={item.ProfileImageAddress}
      Username={item.Username}
      Images={item.Images}
      Caption={item.Caption}
      LikesCount={item.LikesCount}
    />
  );
};

export const useFecthData = () => {
  const [data, setData] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {(async()=>{
   const posts= await fetchData()
    setData(posts)})()}
    , []);
  return {data, loading};
};
export function Body() {
  const {data, loading} = useFecthData();
  return <FlatList data={data} renderItem={renderPostDetails} testID="data"/>;
}
