import 'react-native';
import React from 'react';

import {render, fireEvent} from '@testing-library/react-native';
import {act} from 'react-test-renderer';
import RegistrationProfile from '../src/components/registrationScreen/RegistrationProfile';

jest.mock('react-native-image-crop-picker', () => {
  return {
    openPicker: jest.fn().mockImplementation(() => Promise.resolve()),
  };
});

console.error = jest.fn();

test('renders selected images', async () => {
  require('react-native-image-crop-picker').openPicker.mockResolvedValue([
    {path: 'image1.jpg'},
  ]);

  const {getByTestId} = render(<RegistrationProfile url={0} />);
  const editIcon = getByTestId('edit-icon');

  await act(async () => {
    fireEvent.press(editIcon);
  });
});
