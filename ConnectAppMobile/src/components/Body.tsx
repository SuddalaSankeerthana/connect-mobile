import {FlatList} from 'react-native';
import {PostItem} from '../components/PostItem';
import React, {useEffect} from 'react';
import {useState} from 'react';

export type PostType = {
  PostId: string;
  UserId?: string;
  Username: string;
  ProfileImageAddress: string;
  Images: [];
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
export function Body() {
  const [data, setData] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'http://localhost:8080/homepage/get-posts',
      ).then(res => {
        return res.json();
      });
      const posts: PostType[] = Object.values(response.posts);
      setData(posts);
      setLoading(false);
    };
    fetchData();
  }, []);
  return <FlatList data={data} renderItem={renderPostDetails} />;
}
