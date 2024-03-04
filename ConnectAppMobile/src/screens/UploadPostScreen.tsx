import React from "react";
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from "../styles/UploadPostScreen.styles";


export const UploadPostScreen = () => {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.uploadText}>Upload</Text>
          <Image
            style={styles.crossIcon}
            source={require('../assets/cross-icon.png')}
          />
          <View style={styles.blueBox}>
            <TouchableOpacity>
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
        </View>
      </>
    );
};