/**
 * @format
 */

import 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render, screen, fireEvent} from '@testing-library/react-native';

import AppStack from '../App';

// Note: import explicitly to use the types shipped with jest.
// import {it, jest} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import LoginScreen from '../screens/Login';


describe('Testing react navigation', () => {
  test('page contains the header and 10 items', async () => {
    const component = <AppStack />;
    render(component);
    const registration = await screen.findByText('Register');
    expect(registration).toBeDefined();
    fireEvent.press(registration);
    const SignIn = await screen.findByText('Sign in');
    expect(SignIn).toBeDefined();
  });

});
