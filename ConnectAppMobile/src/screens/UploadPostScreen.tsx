import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles/UploadPostScreen.styles';
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';

export const UploadPostScreen = () => {
    const [selectedImages, setSelectedImages] = useState<ImageOrVideo[]>([]);
    const [imagesSelected, setImagesSelected] = useState(false);

  const handleUploadIconPress = async () => {
    try {
      const images = await ImagePicker.openPicker({
        multiple: true,
        mediaType: 'photo',
      });
      setSelectedImages(images);
      setImagesSelected(true);
    } catch (error) {
      console.error('Error picking images: ', error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.uploadText}>Upload</Text>
        {!imagesSelected && (
          <TouchableOpacity onPress={handleUploadIconPress}>
            <Image
              style={styles.crossIcon}
              source={require('../assets/cross-icon.png')}
            />
          </TouchableOpacity>
        )}
        {!imagesSelected && (
          <TouchableOpacity onPress={handleUploadIconPress}>
            <Image
              style={styles.uploadIcon}
              source={require('../assets/upload-icon.png')}
            />
          </TouchableOpacity>
        )}
        {!imagesSelected && (
          <Text style={styles.uploadImageText}>Upload the images</Text>
        )}
        {!imagesSelected && (
          <Text style={styles.supportedFormatsText}>
            Supported formats: JPEG, PNG, JPG
          </Text>
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
    </>
  );
};
