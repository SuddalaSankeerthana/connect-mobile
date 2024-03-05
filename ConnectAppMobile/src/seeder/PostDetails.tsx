export interface PostDetails {
  id: number;
  name: string;
  profile_pic: string;
  images: images[];
  description: string;
  likes_count: number;
}
export interface images {
  image: string;
}

export const PostsData: PostDetails[] = [
  {
    id: 1,
    name: 'Pavan',
    profile_pic:
      'https://static.vecteezy.com/system/resources/thumbnails/006/541/188/small/bearded-male-cartoon-character-with-sunglasses-minimalist-cartoon-avatar-profile-illustration-free-vector.jpg',
    images: [
      {
        image:
          'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
      },
      {
        image: 'https://static.toiimg.com/photo/77630680.cms?imgsize=780095',
      },
    ],
    description: 'Description...',
    likes_count: 100,
  },
  {
    id: 2,
    name: 'Jyothi',
    profile_pic:
      'https://cdn.analyticsvidhya.com/wp-content/uploads/2023/08/Magic-AI-.png',
    images: [
      {
        image: 'https://static.toiimg.com/photo/77630680.cms?imgsize=780095',
      },
      {
        image:
          'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
      },
    ],
    description: 'Description...',
    likes_count: 100,
  },
  {
    id: 3,
    name: 'Lavanya',
    profile_pic:
      'https://i.pinimg.com/originals/d8/2b/ca/d82bca57dcaa9ceb4c827e3d6ab9fcfe.jpg',
    images: [
      {
        image:
          'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
      },
      {
        image:
          'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
      },
    ],
    description: 'Description...',
    likes_count: 100,
  },
  {
    id: 4,
    name: 'Srikanth',
    profile_pic:
      'https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png',
    images: [
      {
        image:
          'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
      },
      {
        image:
          'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
      },
    ],
    description: 'Description...',
    likes_count: 100,
  },
  {
    id: 5,
    name: 'Deepika',
    profile_pic:
      'https://media.istockphoto.com/id/1483487034/photo/portrait-of-a-cute-female-video-game-avatar.webp?b=1&s=170667a&w=0&k=20&c=tMwM3rBZ6eOhv9LQi2lTUgfbC96X2BDKAmpUpK2r-BA=',
    images: [
      {
        image:
          'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
      },
      {
        image:
          'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
      },
    ],
    description: 'Description...',
    likes_count: 100,
  },
];
