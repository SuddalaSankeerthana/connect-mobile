import 'react-native';
import { ReactTestRenderer } from 'react-test-renderer';
import React from 'react';
import {
  act,
} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import {Body} from '../src/components/homeScreen/Body';
import { fetchData } from '../src/utils/fetchData';

jest.mock('../src/utils/fetchData')
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

describe("test rendering",()=>
{
  
  test("render posts",()=>
  {
    
    let renderer: ReactTestRenderer;
  act(() => {
    renderer = TestRenderer.create(<Body />);
  });
  
    expect(fetchData).toHaveBeenCalledTimes(1);
    
    
  })
})