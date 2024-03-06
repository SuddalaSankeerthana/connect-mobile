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


const UploadScreen = () => {
  const [selectedImages, setSelectedImages] = useState<ImageOrVideo[]>([]);
  const [imagesSelected, setImagesSelected] = useState(false);
  const [warningMessage, setWarningMessage] = useState<string>("");

  const handleUploadIconPress = async () => {
    const images = await ImagePicker.openPicker({
      multiple: true,
      mediaType: 'photo',
    });
    if (images.length <= 4) {
      setWarningMessage('');
      setSelectedImages(images);
      setImagesSelected(true);
   }
   else {
     setSelectedImages([]);
     setImagesSelected(false);
     setWarningMessage('You can select only upto four images')
     

    }
  };
    const handleCancel = () => {}
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
                <Image
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
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="Add a caption"
              placeholderTextColor="#A0A0A0"
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleCancel}>
              <View style={styles.cancelButton}>
                <Text testID="cancel-button" style={styles.cancelButtonText}>
                  Cancel
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleUpload}>
              <View style={styles.uploadButton}>
                <Text testID="upload-button" style={styles.uploadButtonText}>Upload</Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );
};

export default UploadScreen;


// import React from 'react';
// import {Button, Text, View} from 'react-native';

// const UploadScreen = ({navigation}: any) => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: 'center',
//         alignContent: 'center',
//         justifyContent: 'center',
//       }}>
//       <Text>Upload screen</Text>
//       <Button
//         title="Upload"
//         onPress={() => navigation.navigate('Home')}></Button>
//     </View>
//   );
// };
// export default UploadScreen;