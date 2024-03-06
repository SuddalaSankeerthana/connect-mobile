import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {PostItem} from '../src/components/PostItem';
import exp from 'constants';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: ''
}))
describe("test rendeirng post details",()=>

{
    
    test('renders correctly', () => {
        const onSnapToItem=jest.fn();
        const item = {
          id:1,
          profile_pic:
            'https://static.vecteezy.com/system/resources/thumbnails/006/541/188/small/bearded-male-cartoon-character-with-sunglasses-minimalist-cartoon-avatar-profile-illustration-free-vector.jpg',
          name: 'Dhana',
          images: [{image: 'dhana'}, {image: 'ddn'}],
          likes_count: 100,
          description: 'test caption',
        };
        render(
          <PostItem
            profile_pic={item.profile_pic}
            name={item.name}
            images={item.images}
            likes_count={item.likes_count}
            description={item.description}
            id={item.id}
          />
        );
        expect(screen.getByText("Dhana")).toBeTruthy();
        expect(screen.getByTestId("profile")).toBeDefined()
      expect(screen.getByTestId('images')).toBeTruthy()
      expect(screen.getByText("test caption")).toBeDefined()
      });
})

