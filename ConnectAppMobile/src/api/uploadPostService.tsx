import {PostDataBody} from '../types/PostBodyType';
import {getHostName} from '../utils/getHostName';

export const uploadPostDetails = async (
  newPost: PostDataBody,
): Promise<Response> => {
  const response = await fetch(
    `http://${getHostName()}:8080/upload/upload-post`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(newPost),
    },
  );

  return response;
};
