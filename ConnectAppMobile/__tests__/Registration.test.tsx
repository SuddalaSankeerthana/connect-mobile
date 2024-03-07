import 'react-native';
import React from 'react'; 
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';
import RegistrationScreen from '../src/screens/Registration';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: ''
  }))

describe('Test for home screen navigations', () => {
    test('test for register button', async () => {
        const navigation = {
          navigate: jest.fn(() => {
            console.log('mock called');
          }),
        };
        render(<RegistrationScreen navigation={navigation}></RegistrationScreen>);
        const register = await screen.findByText('Register');
        expect(register).toBeDefined();
        fireEvent.press(register);
        waitFor(() => expect(navigation.navigate).toHaveBeenCalled());
      });
      test('test for register button', async () => {
        const navigation = {
          navigate: jest.fn(() => {
            console.log('mock called');
          }),
        };
        render(<RegistrationScreen navigation={navigation}></RegistrationScreen>);
        const login = await screen.findByText('Sign-In');
        expect(login).toBeDefined();
        fireEvent.press(login);
        waitFor(() => expect(navigation.navigate).toHaveBeenCalled());
      });
})