import React, {useState} from 'react';
import {View, Image, TouchableOpacity, ImageSourcePropType} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import styles from '../../styles/registration.style';

const RegistrationProfile = (url: {url: ImageSourcePropType}) => {
  const [changedImage, setChangedImage] = useState('');
  const [uploadedStatus, setUploadedStatus] = useState(false);
  const handleImageCropPicker = () => {
    ImagePicker.openPicker({
      width: 100,
      height: 100,
      cropping: true,
    })
      .then(image => {
        if (image && image.path) {
          setChangedImage(image.path);
          setUploadedStatus(true);
        }
      })
      .catch(error => {
        console.error('Error selecting image from picker:', error);
      });
  };

  return (
    <View style={{display: 'flex'}}>
      <Image
        testID="profile"
        style={styles.profile}
        source={
          uploadedStatus
            ? {uri: changedImage}
            : require('../../images/png/user.png')
        }></Image>
      <TouchableOpacity onPress={handleImageCropPicker}>
        <Image
          testID="edit-icon"
          style={styles.editIcon}
          source={require('../../images/png/Group.png')}></Image>
      </TouchableOpacity>
    </View>
  );
};
export default RegistrationProfile;
