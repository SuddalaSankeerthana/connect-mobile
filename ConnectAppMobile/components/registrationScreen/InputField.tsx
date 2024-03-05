import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

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
    <View style={styles.passwordContainer}>
      <TextInput
        style={styles.inputStyle}
        autoCorrect={false}
        value={value}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  passwordContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingBottom: 10,
  },
  inputStyle: {
    flex: 1,
  },
});

export default TextInputBox;
