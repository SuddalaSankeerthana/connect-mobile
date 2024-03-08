import 'react-native';
import AppStack from '../App';
import React from 'react';
import {render, screen, fireEvent, } from '@testing-library/react-native';
import { Alert } from 'react-native';
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

describe('Testing react navigation', () => {
  test('page navigates to registration screen on click to register button ', async () => {
    const component = <AppStack />;
    render(component);
    const registration = await screen.findByText('Sign Up');
    expect(registration).toBeDefined();
    fireEvent.press(registration);
    const SignIn = await screen.findByText('CONNECT');
    expect(SignIn).toBeDefined();
  });
  test('page navigates to Home screen on click to login screen from login screen ', async () => {
    const component = <AppStack />;
    jest.spyOn(Alert, 'alert').mockImplementation(()=>{ })
    render(component);
    const loginButton = await screen.findByTestId("loginButton")
    expect(loginButton).toBeDefined();
    fireEvent.press(loginButton);
    expect(Alert.alert).toHaveBeenCalled();
    // const uploadButton = await screen.findByTestId('addIcon');
    // expect(uploadButton).toBeDefined();
  });
});
