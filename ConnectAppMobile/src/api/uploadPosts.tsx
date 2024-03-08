import { PostDataBody } from "../types/PostBodyType"
export const uploadPostFunction = async (newPost : PostDataBody) : Promise<Response> => {
    const response = await fetch(
        'http://localhost:8080/upload/upload-post',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(newPost),
        },
    );
    
    return response
}