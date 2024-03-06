import React, {useState} from 'react';
import {
  Image,
    Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../styles/UploadPostScreen.styles';
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import { CancelButton } from '../components/CancelButton';
import UploadIcon from '../components/UploadIcon';
import { UploadButton } from '../components/UploadButton';
import { TextInputContainer } from '../components/TextInputContainer';


const UploadScreen = ({navigation}: any) => {
  const [selectedImages, setSelectedImages] = useState<ImageOrVideo[]>([]);
  const [imagesSelected, setImagesSelected] = useState(false);
  const [warningMessage, setWarningMessage] = useState<string>('');

  const handleUploadIconPress = async () => {
    const images = await ImagePicker.openPicker({
      multiple: true,
      mediaType: 'photo',
    });
    if (images.length <= 4) {
      setWarningMessage('');
      setSelectedImages(images);
      setImagesSelected(true);
    } else {
      setSelectedImages([]);
      setImagesSelected(false);
      setWarningMessage('You can select only upto four images');
    }
  };
  const handleCancel = () => {};
  const handleUpload = () => {};
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.uploadText}>Upload</Text>

        <TouchableOpacity>
          {!imagesSelected && (
            <Image
              style={styles.backIcon}
              source={require('../assets/back-icon.png')}
            />
          )}
        </TouchableOpacity>

        {!imagesSelected && (
          <View>
            <View style={styles.blueBox}>
              <TouchableOpacity onPress={handleUploadIconPress}>
                <UploadIcon
                  testID="upload-icon"
                  style={styles.uploadIcon}
                  source={require('../assets/upload-icon.png')}
                />
              </TouchableOpacity>

              <Text style={styles.uploadImageText}>Upload the images</Text>

              <Text style={styles.supportedFormatsText}>
                Supported formats: JPEG, PNG, JPG
              </Text>
            </View>

            {warningMessage && (
              <Text style={styles.warningMessageText}>{warningMessage} </Text>
            )}
          </View>
        )}
      </View>
      <View style={styles.imageContainer}>
        {selectedImages.map((image, index) => (
          <Image
            key={index}
            style={styles.selectedImage}
            source={{uri: image.path}}
            testID={`selected-image-${index}`}
          />
        ))}
      </View>
      {imagesSelected && (
        <>
          <TextInputContainer placeholder="Add a caption" placeholderTextColor="#A0A0A0"/>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleCancel}>
              <CancelButton testID="cancel-button" text="Cancel" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <UploadButton testID="upload-button" text="Upload" />
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );
};

export default UploadScreen;