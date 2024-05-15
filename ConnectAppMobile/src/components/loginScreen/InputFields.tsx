import React from 'react';
import { Text, View, TextInput, Image} from 'react-native';
import { styles } from '../../styles/Login.styles';

function InputField(props:any): React.JSX.Element {
  return (
    <View >
       <Text style={styles.inputLabels}>{props.label}</Text>
       <View style={styles.input}>
        <View style={styles.iconContainer}> 
        <Image source={props.source} style={props.style}/>
        </View>
        <TextInput
             style={styles.inputField}
             onChangeText={props.onChangeText}
             value={props.text}
             inlineImageLeft="Frame1"
             inlineImagePadding={2}
             autoCapitalize='none'
             secureTextEntry={props.secureTextEntry}
           />
       </View>
    </View>
  );
}

export default InputField;