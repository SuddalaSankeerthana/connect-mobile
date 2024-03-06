import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import { Body } from '../src/components/Body';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: ''
}))

test('renders correctly', () => {
  render(
    <Body />
  );
});
