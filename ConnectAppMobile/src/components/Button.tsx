import React from 'react';
import {SafeAreaView, Text, View, Image, Button, Pressable, TouchableOpacity} from 'react-native';
import { styles } from '../styles/Login.styles';
import { Alert } from 'react-native';
import { handleLogin } from '../handlers/handlelogin';

function LoginButton(props:any): React.JSX.Element {
let emailRegex = /[_A-Za-z'\\.\\!'0-9-\\+]+@gmail+\.com/
let emailRegex2 = /[_A-Za-z'\\.\\!'0-9-\\+]+@everest+\.engineering/
const handleValidations=()=>{
  if((!props.password) ||  (!props.email))
  {
  Alert.alert('please fill out all the fields')
  return;
  }
  if(!emailRegex.test(props.email) && !emailRegex2.test(props.email) )
  {
    Alert.alert('Please enter valid email');
     return;
  }
  else{
    handleLogin(props.userData);
  }
}
  return (
        <Text style={styles.loginButton} onPress={handleValidations}>Login</Text>
  );
}

export default LoginButton;
