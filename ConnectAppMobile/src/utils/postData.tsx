import {Platform} from 'react-native';
import {PostType} from '../components/homeScreen/Body';

const postUpdateLikeTable = async (
  url: string,
  data: {UserId: string; PostId: string},
) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();
  console.log(result);
};
export const postLikeUpdatetoPostData = async (url: string) => {
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();
  console.log(result);
};
export default postUpdateLikeTable;
