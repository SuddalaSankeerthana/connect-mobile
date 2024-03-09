import { TextInput, View } from 'react-native';
import {styles} from '../styles/UploadPostScreen.styles';
import React from 'react';

type TextInputProps = {
  placeholder: string;
  placeholderTextColor: string;
  onChangeText: (text: string) => void;
  value: string
};
export const TextInputContainer = ({ placeholder, placeholderTextColor,onChangeText,value }: TextInputProps) => (
  <View style={styles.textInputContainer}>
    <TextInput placeholder={placeholder} placeholderTextColor={placeholderTextColor} onChangeText={onChangeText} value={value} />
  </View>
);


