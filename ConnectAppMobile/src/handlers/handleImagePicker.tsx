import RNFS from 'react-native-fs';
import ImagePicker from 'react-native-image-crop-picker';
export const handleImageCropPicker = (setChangedImage: any, setUploadedStatus:any) => {
  ImagePicker.openPicker({
    width: 100,
    height: 100,
    cropping: true,
    includeBase64: true,
  })
    .then(image => {
      if (image && image.path) {
        RNFS.readFile(image.path, 'base64')
          .then(base64 => {
            // console.log('base64', base64);
            setChangedImage(base64);
            setUploadedStatus(true);
          })
          .catch(error => {
            console.error('Error reading image file:', error);
          });
      }
    })
    .catch(error => {
      console.error('Error picking image:', error);
    });
};
