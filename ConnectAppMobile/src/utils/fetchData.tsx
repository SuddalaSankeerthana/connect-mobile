import { PostType } from "../components/homeScreen/Body";

export const fetchData = async () => {
  const response = await fetch(
    'http://localhost:8080/homepage/get-posts',
  ).then(res => {
    return res.json();
  });
  const posts: PostType[] = Object.values(response.posts);
  return posts;
};