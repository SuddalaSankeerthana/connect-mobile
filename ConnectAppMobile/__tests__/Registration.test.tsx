import 'react-native';
import React from 'react';

import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';

import BackGroundImage from '../src/components/registrationScreen/BackgroundImage';
import LogoAndTitle from '../src/components/registrationScreen/LogoTitle';
import RegisterButton from '../src/components/registrationScreen/RegisterButton';
import RegistrationProfile from '../src/components/registrationScreen/RegistrationProfile';
import SigIn from '../src/components/registrationScreen/SignIn';
import RegistrationScreen from '../src/screens/Registration';
import SignInContent from '../src/components/registrationScreen/SignInContent';
import SignIn from '../src/components/registrationScreen/SignIn';

jest.mock('react-native-image-crop-picker', () => {
  return {
    openPicker: jest.fn().mockImplementation(() => Promise.resolve()),
  };
});

describe('Test for registration screen individual components', () => {
  test('test for background image component', () => {
    render(<BackGroundImage />);
    const image = screen.getByTestId('background-image');
    expect(image).toBeDefined();
  });
  test('test for logo in LogoAndTitle component', () => {
    render(<LogoAndTitle />);
    const logo = screen.getByTestId('logo');
    expect(logo).toBeDefined();
  });
  test('test for title component in LogoAndTitle component', () => {
    render(<LogoAndTitle />);
    const title = screen.getByText('CONNECT');
    expect(title).toBeDefined();
  });
  test('test for register button', async () => {
    const navigation = {
      navigate: jest.fn(),
    };
    render(<RegisterButton navigation={navigation} />);
    const register = await screen.findByText('Register');
    expect(register).toBeDefined();
    fireEvent.press(register);
    await waitFor(() => expect(navigation.navigate).toHaveBeenCalled());
  });
  test('Registration Profile component test', () => {
    render(<RegistrationProfile url={0} />);
    const profile = screen.getByTestId('profile');
    expect(profile).toBeDefined();
    const editButton = screen.getByTestId('edit-icon');
    expect(editButton).toBeDefined();
  });
  test('Sign In component test', async () => {
    const navigation = {
      navigate: jest.fn(),
    };
    render(<SignIn navigation={navigation} />);
    const signIn = await screen.findByText('Sign in');
    expect(signIn).toBeDefined();
    fireEvent.press(signIn);
    await waitFor(() => expect(navigation.navigate).toHaveBeenCalled());
  });
  test('test for SignInContent', async () => {
    const navigation = {
      navigate: jest.fn(),
    };
    render(<SignInContent navigation={navigation} />);
    const signInContent = await screen.findByText('Already have an account?');
    expect(signInContent).toBeDefined();
    const signIn = await screen.findByText('Sign in');
    expect(signIn).toBeDefined();
    fireEvent.press(signIn);
    await waitFor(() => expect(navigation.navigate).toHaveBeenCalled());
  });
});
describe('Test suite for registration screen', () => {
  const navigation = {
    navigate: jest.fn(),
  };
  test('test for full name input box component', () => {
    render(<RegistrationScreen navigation={navigation} />);
    const fullName = screen.getByPlaceholderText('Enter your full name');
    expect(fullName).toBeDefined();
    fireEvent.changeText(fullName, 'SS');
    expect(fullName.props.value).toBe('SS');
  });
  test('test for email input box component', () => {
    render(<RegistrationScreen navigation={navigation} />);
    const email = screen.getByPlaceholderText('Enter your Email');
    expect(email).toBeDefined();
    fireEvent.changeText(email, 'SS@gmail.com');
    expect(email.props.value).toBe('SS@gmail.com');
  });
  test('test for password input box component', () => {
    render(<RegistrationScreen navigation={navigation} />);
    const confirmPassword = screen.getByPlaceholderText('confirm password');
    expect(confirmPassword).toBeDefined();
    fireEvent.changeText(confirmPassword, 'PASSWORD');
    expect(confirmPassword.props.value).toBe('PASSWORD');
    expect(confirmPassword.props.secureTextEntry).toBe(true);
  });
  test('test for confirm password input box component', () => {
    render(<RegistrationScreen navigation={navigation} />);
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
      navigate: jest.fn(() => {}),
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


import 'react-native';
import React from 'react';

import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';

import BackGroundImage from '../src/components/registrationScreen/BackgroundImage';
import LogoAndTitle from '../src/components/registrationScreen/LogoTitle';
import RegisterButton from '../src/components/registrationScreen/RegisterButton';
import RegistraionProfile from '../src/components/registrationScreen/RegistrationProfile';
import SigIn from '../src/components/registrationScreen/SignIn';
import SigInContent from '../src/components/registrationScreen/SiginContent';
import RegistrationScreen from '../src/screens/Registration';
import {Alert} from 'react-native';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));
describe('render registration screen', () => {
  afterAll(() => console.log('1 - afterAll'));
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

  test('To check all the inputs to be entered', () => {
    const navigation = {
      navigate: jest.fn(() => {}),
    };
    const userDataValidations = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
    render(
      <RegisterButton
        navigation={navigation}
        userData={userDataValidations}></RegisterButton>,
    );
    jest.spyOn(Alert, 'alert');
    const register = screen.getByText('Register');
    expect(register).toBeDefined();
    fireEvent.press(register);
    expect(Alert.alert).toHaveBeenCalledWith('please fill out all the fields');
  });

  test('To check all the inputs to be entered', () => {
    const navigation = {
      navigate: jest.fn(() => {}),
    };
    const userDataValidations = {
      username: '',
      email: 'djhfgj',
      password: 'sdjhfg',
      confirmPassword: 'sdhfg',
    };
    render(
      <RegisterButton
        navigation={navigation}
        userData={userDataValidations}></RegisterButton>,
    );
    jest.spyOn(Alert, 'alert');
    const register = screen.getByText('Register');
    expect(register).toBeDefined();
    fireEvent.press(register);
    expect(Alert.alert).toHaveBeenCalledWith('please fill out all the fields');
  });

  test('To check all the inputs to be entered', () => {
    const navigation = {
      navigate: jest.fn(() => {}),
    };
    const userDataValidations = {
      username: '',
      email: 'djhfgj',
      password: '',
      confirmPassword: '',
    };
    render(
      <RegisterButton
        navigation={navigation}
        userData={userDataValidations}></RegisterButton>,
    );
    jest.spyOn(Alert, 'alert');
    const register = screen.getByText('Register');
    expect(register).toBeDefined();
    fireEvent.press(register);
    expect(Alert.alert).toHaveBeenCalledWith('please fill out all the fields');
  });

  test('To check all the inputs to be entered', () => {
    const navigation = {
      navigate: jest.fn(() => {}),
    };
    const userDataValidations = {
      username: '',
      email: '',
      password: 'djhfj',
      confirmPassword: '',
    };
    render(
      <RegisterButton
        navigation={navigation}
        userData={userDataValidations}></RegisterButton>,
    );
    jest.spyOn(Alert, 'alert');
    const register = screen.getByText('Register');
    expect(register).toBeDefined();
    fireEvent.press(register);
    expect(Alert.alert).toHaveBeenCalledWith('please fill out all the fields');
  });

  test('To check all the inputs to be entered', () => {
    const navigation = {
      navigate: jest.fn(() => {}),
    };
    const userDataValidations = {
      username: '',
      email: '',
      password: '',
      confirmPassword: 'sdjhgjf',
    };
    render(
      <RegisterButton
        navigation={navigation}
        userData={userDataValidations}></RegisterButton>,
    );
    jest.spyOn(Alert, 'alert');
    const register = screen.getByText('Register');
    expect(register).toBeDefined();
    fireEvent.press(register);
    expect(Alert.alert).toHaveBeenCalledWith('please fill out all the fields');
  });

  test('To check for the email validataion', () => {
    const navigation = {
      navigate: jest.fn(() => {}),
    };
    const userDataValidations = {
      username: 'sdjhgjf',
      email: 'sdjhgjf',
      password: 'sdjhgjf',
      confirmPassword: 'sdjhgjf',
    };
    render(
      <RegisterButton
        navigation={navigation}
        userData={userDataValidations}></RegisterButton>,
    );
    jest.spyOn(Alert, 'alert');
    const register = screen.getByText('Register');
    expect(register).toBeDefined();
    fireEvent.press(register);
    expect(Alert.alert).toHaveBeenCalled();
  });

  test('To check for missmatch password', () => {
    const navigation = {
      navigate: jest.fn(() => {}),
    };
    const userDataValidations = {
      username: 'harika',
      email: 'hari@gmail.com',
      password: 'HarI@313#',
      confirmPassword: 'HarI',
    };
    render(
      <RegisterButton
        navigation={navigation}
        userData={userDataValidations}></RegisterButton>,
    );
    jest.spyOn(Alert, 'alert');
    const register = screen.getByText('Register');
    expect(register).toBeDefined();
    fireEvent.press(register);
    expect(Alert.alert).toHaveBeenCalled();
  });

  test('To check for not including all the characters', () => {
    const navigation = {
      navigate: jest.fn(() => {}),
    };
    const userDataValidations = {
      username: 'harika',
      email: 'hari@gmail.com',
      password: 'Hari3145',
      confirmPassword: 'Hari3145',
    };
    render(
      <RegisterButton
        navigation={navigation}
        userData={userDataValidations}></RegisterButton>,
    );
    jest.spyOn(Alert, 'alert');
    const register = screen.getByText('Register');
    expect(register).toBeDefined();
    fireEvent.press(register);
    expect(Alert.alert).toHaveBeenCalled();
  });

  test('To check for not including eight characters', () => {
    const navigation = {
      navigate: jest.fn(() => {}),
    };
    const userDataValidations = {
      username: 'harika',
      email: 'hari@gmail.com',
      password: 'Hari314',
      confirmPassword: 'Hari314',
    };
    render(
      <RegisterButton
        navigation={navigation}
        userData={userDataValidations}></RegisterButton>,
    );
    jest.spyOn(Alert, 'alert');
    const register = screen.getByText('Register');
    expect(register).toBeDefined();
    fireEvent.press(register);
    expect(Alert.alert).toHaveBeenCalled();
  });

  test('To check for not including uppercase characters', () => {
    const navigation = {
      navigate: jest.fn(() => {}),
    };
    const userDataValidations = {
      username: 'harika',
      email: 'hari@gmail.com',
      password: 'hari314',
      confirmPassword: 'hari314',
    };
    render(
      <RegisterButton
        navigation={navigation}
        userData={userDataValidations}></RegisterButton>,
    );
    jest.spyOn(Alert, 'alert');
    const register = screen.getByText('Register');
    expect(register).toBeDefined();
    fireEvent.press(register);
    expect(Alert.alert).toHaveBeenCalled();
  });

  test('To check for not including lowercase characters', () => {
    const navigation = {
      navigate: jest.fn(() => {}),
    };
    const userDataValidations = {
      username: 'harika',
      email: 'hari@gmail.com',
      password: 'HARI314',
      confirmPassword: 'HARI314',
    };
    render(
      <RegisterButton
        navigation={navigation}
        userData={userDataValidations}></RegisterButton>,
    );
    jest.spyOn(Alert, 'alert');
    const register = screen.getByText('Register');
    expect(register).toBeDefined();
    fireEvent.press(register);
    expect(Alert.alert).toHaveBeenCalled();
  });

  test('To check for not including digits ', () => {
    const navigation = {
      navigate: jest.fn(() => {}),
    };
    const userDataValidations = {
      username: 'harika',
      email: 'hari@gmail.com',
      password: 'Harikasjd',
      confirmPassword: 'Harikasjd',
    };
    render(
      <RegisterButton
        navigation={navigation}
        userData={userDataValidations}></RegisterButton>,
    );
    jest.spyOn(Alert, 'alert');
    const register = screen.getByText('Register');
    expect(register).toBeDefined();
    fireEvent.press(register);
    expect(Alert.alert).toHaveBeenCalled();
  });

  // test('To check if all validations are correct ', () => {
  //   const navigation = {
  //     navigate: jest.fn(() => {}),
  //   };
  //   jest.spyOn(Alert, 'alert');
  //   const userDataValidations = {
  //     username: 'harika',
  //     email: 'hari@gmail.com',
  //     password: 'Harika@123#',
  //     confirmPassword: 'Harika@123#',
  //   };
  //   render(
  //     <RegisterButton
  //       navigation={navigation}
  //       userData={userDataValidations}></RegisterButton>,
  //   );
  //   const register = screen.getByText('Register');
  //   expect(register).toBeDefined();
  //   fireEvent.press(register);
  //   expect(Alert.alert).toHaveBeenCalled();

  // });

  // test('To check if all validations are correct ', () => {
  //   const navigation = {
  //     navigate: jest.fn(() => {}),
  //   };
  //   const userDataValidations = {
  //     username: 'harika',
  //     email: 'hari@geverest.engineering',
  //     password: 'Harika@123#',
  //     confirmPassword: 'Harika@123#',
  //   };
  //   render(
  //     <RegisterButton
  //       navigation={navigation}
  //       userData={userDataValidations}></RegisterButton>,
  //   );
  //   const register = screen.getByText('Register');
  //   expect(register).toBeDefined();
  //   fireEvent.press(register);
  //   expect(Alert.alert).toHaveBeenCalled();
  // });

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
});
