import 'react-native';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {LikeContext} from '../src/components/homeScreen/LikeContext';
import LikeButton from '../src/components/homeScreen/LikeButton';
import {LikesAndComments} from '../src/components/homeScreen/LikesandComments';
import 'react-native';
import {ReactTestRenderer} from 'react-test-renderer';
import React from 'react';
import {act, waitFor} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import {Body} from '../src/components/homeScreen/Body';
import {fetchData} from '../src/utils/fetchData';
import { NavigationContainer } from '@react-navigation/native';


jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));
jest.mock('../src/utils/fetchData');

describe('Test suit for liked Button component', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
    console.error=jest.fn();
  });
  afterAll(() => console.log('1 - afterAll'));

  it('render posts', async () => {
    let renderer: ReactTestRenderer;
    act(() => {
      renderer = TestRenderer.create(<NavigationContainer><Body/></NavigationContainer>);
    });
    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledTimes(1);
    });
  });
  test('test for likeButton', () => {
    var likesCount = 100;
    const setLikesCount = jest.fn();
    const setLikeStatus = jest.fn();
    var likeStatus = false;
    render(
      <LikeContext.Provider
        value={{likesCount, setLikesCount, likeStatus, setLikeStatus}}>
        <LikeButton></LikeButton>
      </LikeContext.Provider>,
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
      <LikeContext.Provider
        value={{likesCount, setLikesCount, likeStatus, setLikeStatus}}>
        <LikeButton></LikeButton>
      </LikeContext.Provider>,
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
      <LikeContext.Provider
        value={{likesCount, setLikesCount, likeStatus, setLikeStatus}}>
        <LikeButton></LikeButton>
      </LikeContext.Provider>,
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
      <LikeContext.Provider
        value={{likesCount, setLikesCount, likeStatus, setLikeStatus}}>
        <LikeButton></LikeButton>
      </LikeContext.Provider>,
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
      <LikeContext.Provider
        value={{likesCount, setLikesCount, likeStatus, setLikeStatus}}>
        <LikesAndComments
          likes_count={0}
          post={{
            PostId: '1',
            UserId: undefined,
            Username: 'dhdh',
            ProfileImageAddress: 'dhdh',
            Images: undefined,
            Caption: 'dhhd',
            LikesCount: 1,
            LikeStatus: true,
          }}></LikesAndComments>
      </LikeContext.Provider>,
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
      <LikeContext.Provider
        value={{likesCount, setLikesCount, likeStatus, setLikeStatus}}>
        <LikesAndComments
          likes_count={0}
          post={{
            PostId: '1',
            UserId: undefined,
            Username: 'dhdh',
            ProfileImageAddress: 'dhdh',
            Images: undefined,
            Caption: 'dhhd',
            LikesCount: 1,
            LikeStatus: true,
          }}></LikesAndComments>
      </LikeContext.Provider>,
    );
  });
});
