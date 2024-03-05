import 'react-native';
import React from 'react';

import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';

import BackGroundImage from '../components/registrationScreen/BackgroundImage';
import LogoAndTitle from '../components/registrationScreen/LogoTitle';
import RegisterButton from '../components/registrationScreen/RegisterButton';
import RegistraionProfile from '../components/registrationScreen/RegistrationProfile';
import SigIn from '../components/registrationScreen/SignIn';
import SigInContent from '../components/registrationScreen/SiginContent';
import RegistrationScreen from '../screens/Registration';

describe('Test for registration screen individual components', () => {
  test('test for background image component', () => {
    render(<BackGroundImage></BackGroundImage>);
    const image = screen.findByTestId('background-image');
    expect(image).toBeDefined();
  });
  test('test for logo in LogoAndTitle component', () => {
    render(<LogoAndTitle></LogoAndTitle>);
    const logo = screen.findByTestId('logo');
    expect(logo).toBeDefined();
  });
  test('test for title component in LogoAndTitle component', () => {
    render(<LogoAndTitle></LogoAndTitle>);
    const logo = screen.findByText('CONNECT');
    expect(logo).toBeDefined();
  });
  test('test for register button', async () => {
    const navigation = {
      navigate: jest.fn(() => {}),
    };
    render(<RegisterButton navigation={navigation}></RegisterButton>);
    const register = await screen.findByText('Register');
    expect(register).toBeDefined();
    fireEvent.press(register);
    waitFor(() => expect(navigation.navigate()).toHaveBeenCalled());
  });
  test('Registration Profile compenent test', () => {
    render(<RegistraionProfile></RegistraionProfile>);
    const profile = screen.findByTestId('profile');
    expect(profile).toBeDefined();
    const editButton = screen.findByTestId('edit-icon');
    expect(editButton).toBeDefined();
  });
  test('SignIn component test', async () => {
    const navigation = {
      navigate: jest.fn(() => {}),
    };
    render(<SigIn navigation={navigation}></SigIn>);
    const signIn = await screen.findByText('Sign in');
    expect(signIn).toBeDefined();
    fireEvent.press(signIn);
    waitFor(() => expect(navigation.navigate).toHaveBeenCalled());
  });
  test('test for SignInContent', async () => {
    const navigation = {
      navigate: jest.fn(() => {}),
    };
    render(<SigInContent navigation={navigation}></SigInContent>);
    const signInContent = await screen.findByText('Already have an account?');
    expect(signInContent).toBeDefined();
    const signIn = await screen.findByText('Sign in');
    expect(signIn).toBeDefined();
    fireEvent.press(signIn);
    waitFor(() => expect(navigation.navigate).toHaveBeenCalled());
  });
});
describe('Test suite for resgistration screen', () => {
  const navigation = {
    navigate: jest.fn(() => {}),
  };
  test('test for full name input box component', async () => {
    render(<RegistrationScreen navigation={navigation}></RegistrationScreen>);
    const fullName = screen.getByPlaceholderText('Enter your full name');
    expect(fullName).toBeDefined();
    fireEvent.changeText(fullName, 'SS');
    expect(fullName.props.value).toBe('SS');
  });
  test('test for email input box component', async () => {
    render(<RegistrationScreen navigation={navigation}></RegistrationScreen>);
    const email = screen.getByPlaceholderText('Enter your Email');
    expect(email).toBeDefined();
    fireEvent.changeText(email, 'SS@gmail.com');
    expect(email.props.value).toBe('SS@gmail.com');
  });
  test('test for password input box component', async () => {
    render(<RegistrationScreen navigation={navigation}></RegistrationScreen>);
    const password = screen.getByPlaceholderText('Enter password');
    expect(password).toBeDefined();
    fireEvent.changeText(password, 'PASSWORD');
    expect(password.props.value).toBe('PASSWORD');
    expect(password.props.secureTextEntry).toBe(true);
  });
  test('test for password input box component', async () => {
    render(<RegistrationScreen navigation={navigation}></RegistrationScreen>);
    const confirmPassword = screen.getByPlaceholderText('confirm password');
    expect(confirmPassword).toBeDefined();
    fireEvent.changeText(confirmPassword, 'PASSWORD');
    expect(confirmPassword.props.value).toBe('PASSWORD');
    expect(confirmPassword.props.secureTextEntry).toBe(true);
  });
  test('test for background image component', () => {
    render(<RegistrationScreen navigation={navigation}></RegistrationScreen>);
    const image = screen.findByTestId('background-image');
    expect(image).toBeDefined();
  });
  test('test for logo in LogoAndTitle component', () => {
    render(<RegistrationScreen navigation={navigation}></RegistrationScreen>);
    const logo = screen.findByTestId('logo');
    expect(logo).toBeDefined();
  });
  test('test for title component in LogoAndTitle component', () => {
    render(<RegistrationScreen navigation={navigation}></RegistrationScreen>);
    const logo = screen.findByText('CONNECT');
    expect(logo).toBeDefined();
  });

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
  test('Registration Profile compenent test', () => {
    render(<RegistrationScreen navigation={navigation}></RegistrationScreen>);
    const profile = screen.findByTestId('profile');
    expect(profile).toBeDefined();
    const editButton = screen.findByTestId('edit-icon');
    expect(editButton).toBeDefined();
  });
  test('SignIn component test', async () => {
    const navigation = {
      navigate: jest.fn(() => {}),
    };
    render(<SigIn navigation={navigation}></SigIn>);
    const signIn = await screen.findByText('Sign in');
    expect(signIn).toBeDefined();
    fireEvent.press(signIn);
    waitFor(() => expect(navigation.navigate).toHaveBeenCalled());
  });
  test('test for SignInContent', async () => {
    const navigation = {
      navigate: jest.fn(() => {}),
    };
    render(<RegistrationScreen navigation={navigation}></RegistrationScreen>);
    const signInContent = await screen.findByText('Already have an account?');
    expect(signInContent).toBeDefined();
    const signIn = await screen.findByText('Sign in');
    expect(signIn).toBeDefined();
    fireEvent.press(signIn);
    waitFor(() => expect(navigation.navigate).toHaveBeenCalled());
  });
});
