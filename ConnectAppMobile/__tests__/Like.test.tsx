import 'react-native';
import React from 'react';

import {fireEvent, render, screen} from '@testing-library/react-native';
import {LikesContext} from '../src/components/LikeContext';
import LikeButton from '../src/components/LikeButton';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));
describe('Test for Post Image component', () => {
  var likesCount = 100;
  const setLikesCount = jest.fn();
  const setLikeStatus = jest.fn();
  var likeStatus = false;
  test('test for likeButton', () => {
    render(
      <LikesContext.Provider
        value={{likesCount, setLikesCount, likeStatus, setLikeStatus}}>
        <LikeButton></LikeButton>
      </LikesContext.Provider>,
    );
    const likedButton = screen.getByTestId('not-liked-button');
    expect(likedButton).toBeDefined();
  });
  test('test for likeButton', () => {
    render(
      <LikesContext.Provider
        value={{likesCount, setLikesCount, likeStatus, setLikeStatus}}>
        <LikeButton></LikeButton>
      </LikesContext.Provider>,
    );
    const notLikedButton = screen.getByTestId('not-liked-button');
    fireEvent.press(notLikedButton);
    expect(setLikeStatus).toHaveBeenCalled();
    expect(setLikesCount).toHaveBeenCalled();
  });
  test('test for likeButton', () => {
    likeStatus = true;
    render(
      <LikesContext.Provider
        value={{likesCount, setLikesCount, likeStatus, setLikeStatus}}>
        <LikeButton></LikeButton>
      </LikesContext.Provider>,
    );
    const likedButton = screen.getByTestId('liked-button');
    expect(likedButton).toBeDefined();
  });
});
