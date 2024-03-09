import {Platform} from 'react-native';
import {PostType} from '../components/homeScreen/Body';

export const fetchData = async () => {
  const url =
    Platform.OS === 'android'
      ? 'http://10.0.2.2:8080/homepage/get-posts?userId=3'
      : 'http://localhost:8080/homepage/get-posts?userId=3';
  const response = await fetch(url).then(res => {
    return res.json();
  });
  const posts: PostType[] = Object.values(response.posts);
  return posts;
};
