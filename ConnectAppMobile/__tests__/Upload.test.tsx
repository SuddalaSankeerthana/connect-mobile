import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import UploadScreen from '../screens/Upload';
import { act } from 'react-test-renderer';

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
   
    test('renders warning message if more than 4 images are selected', async () => {

     require('react-native-image-crop-picker').openPicker.mockResolvedValue([
       {path: 'image1.jpg'},
       {path: 'image2.jpg'},
       {path: 'image3.jpg'},
       {path: 'image4.jpg'},
       {path: 'image5.jpg'}, 
     ]);

     const {getByText, getByTestId} = render(<UploadScreen />);
     const uploadIcon = getByTestId('upload-icon');

     await act(async () => {
       fireEvent.press(uploadIcon);
     });

     expect(getByText('You can select only upto four images')).toBeTruthy();
    });
    test('renders selected images', async () => {

      require('react-native-image-crop-picker').openPicker.mockResolvedValue([
        {path: 'image1.jpg'},
        {path: 'image2.jpg'},
      ]);

      const {getByTestId} = render(<UploadScreen />);
      const uploadIcon = getByTestId('upload-icon');

      await act(async () => {
        fireEvent.press(uploadIcon);
      });

      expect(getByTestId('selected-image-0')).toBeTruthy();
      expect(getByTestId('selected-image-1')).toBeTruthy();
    });

   

});  


