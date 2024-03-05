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

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
    paddingTop: 10,
  },
  inputStyle: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: 50,
    width: 380,
    borderRadius: 20,
    paddingLeft: '10%',
  },
});

export default TextInputBox;
