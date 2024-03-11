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

describe('test rendering', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
    console.error = jest.fn();
  });
  afterAll(() => console.log('1 - afterAll'));

  it('render posts', async () => {
    let renderer: ReactTestRenderer;
    act(() => {
      renderer = TestRenderer.create(<NavigationContainer><Body /></NavigationContainer>);
    });
    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledTimes(1);
    });
  });
});
