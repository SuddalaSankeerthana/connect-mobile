import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { act } from 'react-test-renderer';
import UploadScreen from '../src/screens/Upload';
import { uploadPostDetails } from '../src/api/uploadPostService';

jest.mock('react-native-image-crop-picker', () => {
  return {
    openPicker: jest.fn().mockImplementation(() => Promise.resolve()),
  };
});


jest.mock('react-native-fs', () => ({
  readFile: jest.fn().mockResolvedValue('base64data'),
}));

jest.mock('../src/api/uploadPostService', () => ({
  uploadPostDetails: jest.fn().mockResolvedValue({status: 200}),
}));



describe('UploadPostScreen component', () => {
  test('renders correctly without selected images', () => {
    const {getByText, queryByTestId} = render(<UploadScreen />);
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

  test('renders cancel and upload buttons when images are selected', async () => {
    const {getByTestId} = render(<UploadScreen />);
    const uploadIcon = getByTestId('upload-icon');

    jest.mock('react-native-image-crop-picker', () => ({
      openPicker: jest.fn().mockResolvedValue([{path: 'image1.jpg'}]),
    }));

    await act(async () => {
      fireEvent.press(uploadIcon);
    });

    expect(getByTestId('cancel-button')).toBeTruthy();
    expect(getByTestId('upload-button')).toBeTruthy();
  });

  test('should upload images and caption successfully', async () => {
    const navigation = {navigate: jest.fn()};
    const {getByTestId} = render(<UploadScreen navigation={navigation} />);

     await act(async () => {
       fireEvent.press(getByTestId('upload-icon'));
     });

    await act(async () => {
       fireEvent.press(getByTestId('upload-button'));
    });

    await waitFor(() => {
      expect(uploadPostDetails).toHaveBeenCalledWith({
        UserId: '1',
        PostCaption: '',
        Images: ['base64data', 'base64data'],
      });

      expect(navigation.navigate).toHaveBeenCalledWith('Home');
    });
  });

});




