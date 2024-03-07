/**
 * @format
 */
import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import AppStack from '../App';
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));
global.console = {...global.console, error: jest.fn()};
console.error = jest.fn();
describe('Testing react navigation', () => {
  test('test for page is at login screen', async () => {
    const component = <AppStack />;
    render(component);
    const registration = await screen.findByText('Register');
    const login = await screen.findByText('Login');
    expect(login).toBeDefined();
    expect(registration).toBeDefined();
  });
});
