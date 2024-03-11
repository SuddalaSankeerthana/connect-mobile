import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {PostItem} from '../src/components/homeScreen/PostItem';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

describe('test rendeirng post details', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
    console.error = jest.fn();
  });
  afterAll(() => console.log('1 - afterAll'));
  test('renders correctly', () => {
    const onSnapToItem = jest.fn();
    const item = {
      id: '1',
      profile_pic:
        'https://static.vecteezy.com/system/resources/thumbnails/006/541/188/small/bearded-male-cartoon-character-with-sunglasses-minimalist-cartoon-avatar-profile-illustration-free-vector.jpg',
      name: 'Dhana',
      images: ['image1', 'image2'],
      likes_count: 100,
      description: 'test caption',
    };
    render(
      <PostItem
        PostId={item.id}
        Username={item.name}
        ProfileImageAddress={item.profile_pic}
        Images={item.images}
        Caption={item.description}
        LikesCount={item.likes_count} LikeStatus={true}      />,
    );
    expect(screen.getByText('Dhana')).toBeTruthy();
    expect(screen.getByTestId('profile')).toBeDefined();
    expect(screen.getByTestId('images')).toBeTruthy();
    expect(screen.getByText('test caption')).toBeDefined();
  });
});
