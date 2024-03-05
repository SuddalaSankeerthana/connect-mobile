/**
 * @format
 */

import 'react-native';
import React from 'react';
import LoginScreen from '../screens/Login';
import { render, screen, fireEvent } from '@testing-library/react-native';
// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';
import { NavigationContainer } from '@react-navigation/native';


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<LoginScreen />);
});

describe("test for the login screens",()=>{
  test("To check logo",()=>{
    render(
      <NavigationContainer>
      <LoginScreen/>
      </NavigationContainer>
    )
    const logo=screen.getByTestId("logo")
    expect(logo).toBeDefined();
  })

  test("To check title connect",()=>{
    render(
      <NavigationContainer>
      <LoginScreen/>
      </NavigationContainer>
    )
    const title=screen.getByText("CONNECT")
    expect(title).toBeDefined();
  })

  test("To check subtitle",()=>{
    render(
      <NavigationContainer>
      <LoginScreen/>
      </NavigationContainer>
    )
    const subtitle=screen.getByText("Welcome to our Connect community")
    expect(subtitle).toBeDefined();
  })

  test("To check Heading",()=>{
    render(
      <NavigationContainer>
      <LoginScreen/>
      </NavigationContainer>
    )
    const subtitle=screen.getByText("Login to Connect")
    expect(subtitle).toBeDefined();
  })


  test("To check Login button",()=>{
    render(
      <NavigationContainer>
      <LoginScreen/>
      </NavigationContainer>
    )
    const subtitle=screen.getByText("Login")
    expect(subtitle).toBeDefined();
  })

  test("To check Login button",()=>{
    render(<NavigationContainer>
      <LoginScreen/>
      </NavigationContainer>)
    const loginButton=screen.getByText("Login")
    expect(loginButton).toBeDefined();
  })

  test("To check for caption",()=>{
    render(<NavigationContainer>
        <LoginScreen/>
        </NavigationContainer>)
    const caption=screen.getByText("Don't have an account?")
    expect(caption).toBeDefined();
  })
 
  test("To check for Sign Up button",()=>{
    render(<NavigationContainer>
        <LoginScreen/>
        </NavigationContainer>)
    const signUp=screen.getByText("Sign Up")
    expect(signUp).toBeDefined();
  })

  test("To check for Email input field",()=>{
    render(<NavigationContainer>
        <LoginScreen/>
        </NavigationContainer>)
    const email=screen.getByText("Email")
    expect(email).toBeDefined();
  })
 
  test("To check for Password input field",()=>{
    render(<NavigationContainer>
        <LoginScreen/>
        </NavigationContainer>)
    const password=screen.getByText("Password")
    expect(password).toBeDefined();
  })

})