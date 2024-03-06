import 'react-native';
import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {Header} from '../src/components/Header';
import exp from 'constants';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

test('renders correctly', () => {
  render(<Header />);

  expect(screen.getByTestId('logo')).toBeDefined();
  expect(screen.getByText('CONNECT')).toBeDefined();
  expect(screen.getByTestId('menuBar')).toBeDefined();
  expect(screen.getByTestId('addIcon')).toBeDefined();
});

test('renders correctly', () => {
    const {getByTestId}=render(<Header />);
  const menubar = getByTestId("menuBar")
  fireEvent.press(menubar)
  expect("Log out").toBeDefined()
  });

  