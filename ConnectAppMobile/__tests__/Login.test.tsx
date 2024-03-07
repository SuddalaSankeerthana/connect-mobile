import 'react-native';
import React from 'react';

import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';
import LoginScreen from '../src/screens/Login';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: ''
  }))

describe('Test for login screen navigations', () => {
    test('test for navigation', async () => {
        const navigation = {
            navigate: jest.fn(() => {}),
          };
          render(<LoginScreen navigation={navigation}/>);
          const login = await screen.findByText('Login');
          expect(login).toBeDefined()
          fireEvent.press(login)
          waitFor(() => expect(navigation.navigate).toHaveBeenCalled());
    });
    test('test for navigation', async () => {
        const navigation = {
            navigate: jest.fn(() => {}),
          };
          render(<LoginScreen navigation={navigation}/>);
          const register = await screen.findByText('Register');
          expect(register).toBeDefined()
          fireEvent.press(register)
          waitFor(() => expect(navigation.navigate).toHaveBeenCalled());
    });
})