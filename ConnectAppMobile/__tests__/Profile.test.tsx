import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {Profile} from '../src/components/homeScreen/Profile';

describe("test profile image",()=>
{
  afterAll(() => console.log('1 - afterAll'));
  test('renders correctly', () => {
    render(
      <Profile
        profile_pic="https://static.vecteezy.com/system/resources/thumbnails/006/541/188/small/bearded-male-cartoon-character-with-sunglasses-minimalist-cartoon-avatar-profile-illustration-free-vector.jpg"
        name="Lavanya"
      />,
    );
  
    expect(screen.getByTestId('profile')).toBeDefined();
    expect(screen.getByText('Lavanya')).toBeDefined();
  });
})

