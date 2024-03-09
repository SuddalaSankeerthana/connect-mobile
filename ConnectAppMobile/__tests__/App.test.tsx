/**
 * @format
 */

import 'react-native';
import React from 'react';

import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';

import AppStack from '../App';

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
    const registration = await screen.findByText('Register');
    const login = await screen.findByText('Login');
    expect(login).toBeDefined();
    expect(registration).toBeDefined();
  });
  test('page navigates to registration screen on click to register button ', async () => {
    const component = <AppStack />;
    render(component);
    const registration = await screen.findByText('Register');
    expect(registration).toBeDefined();
    fireEvent.press(registration);
    await waitFor(() => {
      expect(screen.getByText('Sign in')).toBeDefined();
    });
  });  

  test('page navigates to Home screen on click to login screen from login screen ', async () => {
    const component = <AppStack />;
    render(component);
    const loginButton = await screen.findByText('Login');
    expect(loginButton).toBeDefined();
    fireEvent.press(loginButton);
    const uploadButton = await screen.findByText('Upload');
    const logOutButton = await screen.findByText('Log-out');
     await waitFor(() => {
       expect(uploadButton).toBeDefined();
       expect(logOutButton).toBeDefined();
     });
  });
  test('page navigates from registration screen to home screen on press to register button registration screen', async () => {
    const component = <AppStack />;
    render(component);
    const registrationInLogin = await screen.findByText('Register');
    expect(registrationInLogin).toBeDefined();
    fireEvent.press(registrationInLogin);
    const registerInRegistrationScreen = await screen.findByText('Register');
    fireEvent.press(registerInRegistrationScreen);
    const uploadButton = await screen.findByText('Upload');
    const logOutButton = await screen.findByText('Log-out');
    await waitFor(() => {
      expect(uploadButton).toBeDefined();
      expect(logOutButton).toBeDefined();
    });
  });
  test('page navigates from registration screen to login screen on press to sign in button', async () => {
    const component = <AppStack />;
    render(component);
    const registrationInLoginBefore = await screen.findByText('Register');
    expect(registrationInLoginBefore).toBeDefined();
    fireEvent.press(registrationInLoginBefore);
    const signInRegistration = await screen.findByText('Sign in');
    expect(signInRegistration).toBeDefined();
    fireEvent.press(signInRegistration);
    const loginInLoginScreen = await screen.findByText('Login');
    expect(loginInLoginScreen).toBeDefined();
  });
  test('page navigates from homeScreen to login screen on log-out button press', async () => {
    const component = <AppStack />;
    render(component);
    const loginInLoginScreen = await screen.findByText('Login');
    expect(loginInLoginScreen).toBeDefined();
    fireEvent.press(loginInLoginScreen);
    const logOutButton = await screen.findByText('Log-out');
    expect(logOutButton).toBeDefined();
    fireEvent.press(logOutButton);
    const registrationInLoginAfter = await screen.findByText('Register');
    expect(registrationInLoginAfter).toBeDefined();
  });
  test('page navigates from homeScreen to upload screen on upload post button press', async () => {
    const component = <AppStack />;
    render(component);
    const loginButton = await screen.findByText('Login');
    expect(loginButton).toBeDefined();
    fireEvent.press(loginButton);
    const uploadHomeScreen = await screen.findByText('Upload');
    expect(uploadHomeScreen).toBeDefined();
    fireEvent.press(uploadHomeScreen);
    const uploadInUploadScreen = await screen.findByText('Upload');
    expect(uploadInUploadScreen).toBeDefined();
  });
  test('page navigates from upload screen to home screen on upload button press', async () => {
    const component = <AppStack />;
    render(component);
    const loginButton = await screen.findByText('Login');
    expect(loginButton).toBeDefined();
    fireEvent.press(loginButton);
    const uploadHomeScreen = await screen.findByText('Upload');
    expect(uploadHomeScreen).toBeDefined();
    fireEvent.press(uploadHomeScreen);
    const uploadInUploadScreen = await screen.findByText('Upload');
    expect(uploadInUploadScreen).toBeDefined();
    fireEvent.press(uploadInUploadScreen);
    waitFor(async() => {
      const homeScreenLogOut = await screen.findByText('Log-out');
      expect(homeScreenLogOut).toBeDefined();
    })
  });
});
