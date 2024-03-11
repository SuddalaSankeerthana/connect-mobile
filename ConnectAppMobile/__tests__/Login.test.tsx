import 'react-native';
import React from 'react';
import LoginScreen from '../screens/Login';
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';
// Note: import explicitly to use the types shipped with jest.
import {NavigationContainer} from '@react-navigation/native';
import {Alert} from 'react-native';
import LoginButton from '../src/components/loginScreen/Button';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

describe('test for the login screens', () => {
  jest.spyOn(Alert, 'alert');
  afterAll(() => console.log('1 - afterAll'));
  test('To check logo', () => {
    render(<LoginScreen />);
    const logo = screen.getByTestId('logo');
    expect(logo).toBeDefined();
  });
});
test('To check title connect', () => {
  render(<LoginScreen />);
  const title = screen.getByText('CONNECT');
  expect(title).toBeDefined();
});

test('To check subtitle', () => {
  render(<LoginScreen />);
  const subtitle = screen.getByText('Welcome to our Connect community');
  expect(subtitle).toBeDefined();
});

test('To check Heading', () => {
  render(<LoginScreen />);
  const subtitle = screen.getByText('Login to Connect');
  expect(subtitle).toBeDefined();
});

test('To check Login button', () => {
  render(
    <NavigationContainer>
      <LoginScreen />
    </NavigationContainer>,
  );
  const subtitle = screen.getByText('Login');
  expect(subtitle).toBeDefined();
});

test('To check for caption', () => {
  render(
    <NavigationContainer>
      <LoginScreen />
    </NavigationContainer>,
  );
  const caption = screen.getByText("Don't have an account?");
  expect(caption).toBeDefined();
});

test('To check for Email input field', () => {
  render(
    <NavigationContainer>
      <LoginScreen />
    </NavigationContainer>,
  );
  const email = screen.getByText('Email');
  expect(email).toBeDefined();
});

test('test for navigation', async () => {
  const navigation = {
    navigate: jest.fn(() => {}),
  };
  jest.spyOn(Alert, 'alert');
  render(
    <>
      <LoginScreen navigation={navigation} />
    </>,
  );
  const login = await screen.findByTestId('loginButton');
  expect(login).toBeDefined();
  fireEvent.press(login);
  waitFor(() => expect(Alert.alert).toHaveBeenCalled());
});
test('test for navigation', async () => {
  const navigation = {
    navigate: jest.fn(() => {}),
  };
  render(
    <NavigationContainer>
      <LoginScreen navigation={navigation} />
    </NavigationContainer>,
  );
  const register = await screen.findByText('Sign Up');
  expect(register).toBeDefined();
  fireEvent.press(register);
  waitFor(() => expect(navigation.navigate).toHaveBeenCalled());
});

test('To check for Password input field', () => {
  render(<LoginScreen />);
  const password = screen.getByText('Password');
  expect(password).toBeDefined();
});

test('Alert on not filling all the details in input field', () => {
  render(<LoginButton email="" password="" />);
  jest.spyOn(Alert, 'alert');
  const login = screen.getByText('Login');
  expect(login).toBeDefined();
  fireEvent.press(login);
  expect(Alert.alert).toHaveBeenCalledWith('please fill out all the fields');
});

test('Alert on not filling all the details in input field', () => {
  render(
    <NavigationContainer>
      <LoginButton email="hjdghgdgd" password="" />
    </NavigationContainer>,
  );
  jest.spyOn(Alert, 'alert');
  const login = screen.getByText('Login');
  expect(login).toBeDefined();
  fireEvent.press(login);
  expect(Alert.alert).toHaveBeenCalledWith('please fill out all the fields');
});

test('Alert on not filling all the details in input field', () => {
  const navigation = {
    navigate: jest.fn(() => {}),
  };
  render(
    <NavigationContainer>
      <LoginButton
        email="hjdghgdgd@gmailcom"
        password=""
        navigation={navigation}
      />
    </NavigationContainer>,
  );

  jest.spyOn(Alert, 'alert');
  const login = screen.getByText('Login');
  expect(login).toBeDefined();
  fireEvent.press(login);
  expect(Alert.alert).toHaveBeenCalledWith('please fill out all the fields');
});

test('Alert on not filling invalid email in input field', () => {
  const navigation = {
    navigate: jest.fn(() => {}),
  };
  render(
    <NavigationContainer>
      <LoginButton
        email="hjdghgdgd@gmailcom"
        password="hjgjhg"
        navigation={navigation}
      />
    </NavigationContainer>,
  );
  jest.spyOn(Alert, 'alert').mockImplementation(() => {
    return 'Please enter valid email address';
  });
  const login = screen.getByText('Login');
  expect(login).toBeDefined();
  fireEvent.press(login);
  expect(Alert.alert).toHaveBeenCalled();
});
