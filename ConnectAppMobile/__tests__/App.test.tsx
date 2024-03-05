/**
 * @format
 */

import 'react-native';
import React from 'react';

import {render, screen, fireEvent} from '@testing-library/react-native';

import AppStack from '../App';

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
