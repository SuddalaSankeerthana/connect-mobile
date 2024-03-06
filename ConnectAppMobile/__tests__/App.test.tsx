/**
 * @format
 */

import 'react-native';
import React from 'react';
import LoginScreen from '../screens/Login';
import { render, screen, fireEvent } from '@testing-library/react-native';
// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';
import { NavigationContainer } from '@react-navigation/native';


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<LoginScreen />);
});

describe("test for the login screens",()=>{
  test("To check logo",()=>{
    render(
      <NavigationContainer>
      <LoginScreen/>
      </NavigationContainer>
    )
    const logo=screen.getByTestId("logo")
    expect(logo).toBeDefined();
  })
})