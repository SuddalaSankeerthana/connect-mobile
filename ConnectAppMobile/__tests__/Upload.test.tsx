import 'react-native';
import React from 'react'; 
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';
import RegistrationScreen from '../src/screens/Registration';
import UploadScreen from '../src/screens/Upload';

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
        render(<UploadScreen navigation={navigation}/>);
        const register = await screen.findByText('Upload');
        expect(register).toBeDefined();
        fireEvent.press(register);
        waitFor(() => expect(navigation.navigate).toHaveBeenCalled());
      });
      
})