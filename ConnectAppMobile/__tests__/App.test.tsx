/**
 * @format
 */
import 'react-native';
import React from 'react';
import {Alert} from 'react-native';
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';
import AppStack from '../App';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

jest.mock('react-native-image-crop-picker', () => {
  return {
    openPicker: jest.fn().mockImplementation(() => Promise.resolve()),
  };
});

jest.mock('react-native-fs', () => ({
  readFile: jest.fn().mockResolvedValue('base64data'),
}));

describe('Testing react navigation', () => {
  test('test for page is at login screen', async () => {
    const component = <AppStack />;
    render(component);
    const login = await screen.findByText('Login');
    expect(login).toBeDefined();
  });
  test('page navigates to registration screen on click to register button ', async () => {
    const component = <AppStack />;
    render(component);
    const registration = await screen.findByText('Sign Up');
    expect(registration).toBeDefined();
    fireEvent.press(registration);
    await waitFor(() => {
      expect(screen.getByText('CONNECT')).toBeDefined();
    });
  });
  test('page navigates to Home screen on click to login screen from login screen ', async () => {
    const component = <AppStack />;
    jest.spyOn(Alert, 'alert').mockImplementation(() => {});
    render(component);
    const loginButton = await screen.findByTestId('loginButton');
    expect(loginButton).toBeDefined();
    fireEvent.press(loginButton);
    expect(Alert.alert).toHaveBeenCalled();
  });
});
