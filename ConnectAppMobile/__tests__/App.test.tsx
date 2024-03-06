/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';


import App from '../App';
import UploadScreen from '../src/screens/Upload';
jest.mock('react-native-image-crop-picker', () => {
  return {
    openPicker: jest.fn().mockImplementation(() => Promise.resolve()),
  };
});
jest.mock('@react-navigation/native-stack');

describe('UploadPostScreen component', () => {
  test('renders correctly without selected images', () => {
    const { getByText, queryByTestId } = render(<UploadScreen />);
    expect(getByText('Upload')).toBeTruthy();
    expect(queryByTestId('cancel-button')).toBeNull();
    expect(queryByTestId('upload-button')).toBeNull();
  });
});