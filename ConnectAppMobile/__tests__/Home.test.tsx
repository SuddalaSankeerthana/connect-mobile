import 'react-native';
import React from 'react';

import {HomeScreen} from '../src/screens/Home' 
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';

jest.mock('../src/utils/fetchData')
jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: ''
  }))

describe('Test for home screen navigations', () => {
    test('test for navigation', async () => {
        const navigation = {
            navigate: jest.fn(() => {}),
          };
          render(<HomeScreen navigation={navigation}/>);
          const upload = await screen.findByTestId('addIcon');
          expect(upload).toBeDefined()
          fireEvent.press(upload)
          waitFor(() => expect(navigation.navigate).toHaveBeenCalled());
    });
})