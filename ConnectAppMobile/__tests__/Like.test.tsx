import 'react-native';
import React from 'react';

import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';
import {PostImage} from '../src/components/PostImage';

describe('Test for Post Image component', () => {
  test('test for background image component', () => {
    render(
      <PostImage
        image={
          'https://static.vecteezy.com/system/resources/thumbnails/006/541/188/small/bearded-male-cartoon-character-with-sunglasses-minimalist-cartoon-avatar-profile-illustration-free-vector.jpg'
        }
        likeStatus={false}
        setLikeStatus={function (value: React.SetStateAction<boolean>): void {}}
        setLikesCount={function (value: React.SetStateAction<number>): void {
          throw new Error('Function not implemented.');
        }}
        likesCount={0}></PostImage>,
    );
    const image = screen.findByTestId('background-image');
    expect(image).toBeDefined();
  });
});
