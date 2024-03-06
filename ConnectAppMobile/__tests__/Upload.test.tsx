import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import UploadScreen from '../screens/Upload';

jest.mock('react-native-image-crop-picker', () => {
  return {
    openPicker: jest.fn().mockImplementation(() => Promise.resolve()),
  };
});

describe('UploadPostScreen component', () => {
    test('renders correctly without selected images', () => {
        const { getByText, queryByTestId } = render(<UploadScreen />);
        expect(getByText('Upload')).toBeTruthy();
        expect(queryByTestId('cancel-button')).toBeNull();
        expect(queryByTestId('upload-button')).toBeNull();
    });
})


