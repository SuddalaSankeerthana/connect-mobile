import React from 'react';
import {TextInput, View} from 'react-native';

import styles from '../../styles/registration.style';

const TextInputBox = ({
  onChangeText,
  placeholder,
  secureTextEntry,
  value,
}: {
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry: boolean;
  value: string;
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputStyle}
        autoCorrect={false}
        value={value}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={'#000000CC'}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default TextInputBox;
