import {Platform} from 'react-native';
import {PostType} from '../components/homeScreen/Body';
import {getHostName} from './getHostName';

export const fetchData = async () => {
  const networkHost = getHostName();
  const url = `http://${networkHost}:8080/homepage/get-posts?userId=3`;
  const response = await fetch(url).then(res => {
    return res.json();
  });
  const posts: PostType[] = Object.values(response.posts);
  return posts;
};

