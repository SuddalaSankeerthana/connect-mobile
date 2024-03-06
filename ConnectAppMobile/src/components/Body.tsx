import { FlatList} from 'react-native';
import {PostDetails, PostsData} from '../seeder/PostDetails';
import { PostItem } from '../components/PostItem';
import React from 'react';

const renderPostDetails = ({item}: {item: PostDetails}) => {
  return (
    <PostItem
      id={item.id}
      profile_pic={item.profile_pic}
      name={item.name}
      images={item.images}
      description={item.description}
      likes_count={item.likes_count}
    />
  );
};
export function Body() {
  return (
    <>
        <FlatList data={PostsData} renderItem={renderPostDetails} />
    </>
  );
}
