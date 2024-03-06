import { TextInput, View } from 'react-native';
import {styles} from '../styles/UploadPostScreen.styles';

type TextInputProps = {
  placeholder: string;
  placeholderTextColor: string;
};
export const TextInputContainer = ({ placeholder, placeholderTextColor }: TextInputProps) => (
  <View style={styles.textInputContainer}>
    <TextInput placeholder={placeholder} placeholderTextColor={placeholderTextColor} />
  </View>
);


