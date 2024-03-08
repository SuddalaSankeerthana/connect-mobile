import 'react-native';
import React from 'react';

import {fireEvent, render, screen} from '@testing-library/react-native';
import {LikesContext} from '../src/components/homeScreen/LikeContext';
import LikeButton from '../src/components/homeScreen/LikeButton';
import {LikesAndComments} from '../src/components/homeScreen/LikesandComments';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));
describe('Test suit for liked Button component', () => {
  test('test for likeButton', () => {
    var likesCount = 100;
    const setLikesCount = jest.fn();
    const setLikeStatus = jest.fn();
    var likeStatus = false;
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
    var likesCount = 100;
    const setLikesCount = jest.fn();
    const setLikeStatus = jest.fn();
    var likeStatus = false;
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
    var likesCount = 100;
    const setLikesCount = jest.fn();
    const setLikeStatus = jest.fn();
    var likeStatus = true;
    render(
      <LikesContext.Provider
        value={{likesCount, setLikesCount, likeStatus, setLikeStatus}}>
        <LikeButton></LikeButton>
      </LikesContext.Provider>,
    );
    const likedButton = screen.getByTestId('liked-button');
    expect(likedButton).toBeDefined();
  });
  test('test for likeButton', () => {
    var likesCount = 100;
    const setLikesCount = jest.fn();
    const setLikeStatus = jest.fn();
    var likeStatus = true;
    render(
      <LikesContext.Provider
        value={{likesCount, setLikesCount, likeStatus, setLikeStatus}}>
        <LikeButton></LikeButton>
      </LikesContext.Provider>,
    );
    const likedButton = screen.getByTestId('liked-button');
    expect(likedButton).toBeDefined();
    fireEvent.press(likedButton);
    expect(setLikeStatus).toHaveBeenCalled();
    expect(setLikesCount).toHaveBeenCalled();
  });
});
describe('test suit for likes and comment', () => {
  test('test for like count', () => {
    var likesCount = 100;
    const setLikesCount = jest.fn();
    const setLikeStatus = jest.fn();
    var likeStatus = true;
    render(
      <LikesContext.Provider
        value={{likesCount, setLikesCount, likeStatus, setLikeStatus}}>
        <LikesAndComments></LikesAndComments>
      </LikesContext.Provider>,
    );
    const count = screen.getByText('100');
    expect(count).toBeDefined();
  });
  test('test for comment button', () => {
    var likesCount = 100;
    const setLikesCount = jest.fn();
    const setLikeStatus = jest.fn();
    var likeStatus = true;
    render(
      <LikesContext.Provider
        value={{likesCount, setLikesCount, likeStatus, setLikeStatus}}>
        <LikesAndComments></LikesAndComments>
      </LikesContext.Provider>,
    );
  });
});
