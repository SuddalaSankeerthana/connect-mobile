import React from 'react';
import {SafeAreaView, Text, View, Image, Button, Pressable, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../styles/Login.styles';

function LoginButton(): React.JSX.Element {
  return (
    <TouchableOpacity onPress={()=>{}} >
        <Text style={styles.loginButton}>Login</Text>
      </TouchableOpacity>
  );
}

export default LoginButton;
