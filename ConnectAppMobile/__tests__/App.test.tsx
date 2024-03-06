import 'react-native';
import React from 'react';
import App from '../App';
import {render} from '@testing-library/react-native';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: ''
}))

test('renders correctly', () => {
  const {getByText} = render(<App />);
});
