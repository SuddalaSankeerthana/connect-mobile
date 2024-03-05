import React from 'react';
import { Text, View, TextInput} from 'react-native';

function InputField(props:any): React.JSX.Element {
  return (
    <View>
       <Text>{props.label}</Text>
        <TextInput
             onChangeText={props.onChangeText}
             value={props.text}
             placeholder="Email"
             inlineImageLeft="Frame1"
             inlineImagePadding={2}
           />
    </View>
  );
}

export default InputField;