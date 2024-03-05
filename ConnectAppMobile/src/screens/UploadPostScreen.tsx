import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles/UploadPostScreen.styles';
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';

export const UploadPostScreen = () => {
    const [selectedImages, setSelectedImages] = useState<ImageOrVideo[]>([]);
    const [imagesSelected, setImagesSelected] = useState(false);

  const handleUploadIconPress = async () => {
      const images = await ImagePicker.openPicker({
        multiple: true,
        mediaType: 'photo',
      });
      setSelectedImages(images);
      setImagesSelected(true);
    
  };

  return (
    <>
      <>
        <View style={styles.container}>
          <Text style={styles.uploadText}>Upload</Text>

          <TouchableOpacity>
            <Image
              style={styles.crossIcon}
              source={require('../assets/cross-icon.png')}
            />
          </TouchableOpacity>
          {!imagesSelected && (
            <View style={styles.blueBox}>
              <TouchableOpacity onPress={handleUploadIconPress}>
                <Image
                  style={styles.uploadIcon}
                  source={require('../assets/upload-icon.png')}
                />
              </TouchableOpacity>

              <Text style={styles.uploadImageText}>Upload the images</Text>

              <Text style={styles.supportedFormatsText}>
                Supported formats: JPEG, PNG, JPG
              </Text>
            </View>
          )}
        </View>
        <View style={styles.imageContainer}>
          {selectedImages.map((image, index) => (
            <Image
              key={index}
              style={styles.selectedImage}
              source={{uri: image.path}}
            />
          ))}
        </View>
        {imagesSelected && (
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="Add a caption"
              placeholderTextColor="#A0A0A0"
            />
          </View>
        )}
      </>
    </>
  );
};
