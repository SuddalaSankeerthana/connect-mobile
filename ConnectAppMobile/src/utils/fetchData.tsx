import {Platform} from 'react-native';
import {PostType} from '../components/homeScreen/Body';

export const fetchData = async () => {
  let posts: PostType[] = [];
  if (Platform.OS === 'ios') {
    const response = await fetch(
      'http://localhost:8080/homepage/get-posts',
    ).then(res => {
      return res.json();
    });
    posts = Object.values(response.posts);
  } else if (Platform.OS === 'android') {
    const response = await fetch(
      'http://10.0.2.2:8080/homepage/get-posts',
    ).then(res => {
      return res.json();
    });
    posts = Object.values(response.posts);
  }
  return posts;
};
