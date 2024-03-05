import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import LoginLogo from '../src/components/Logo';
import InputField from '../src/components/InputFields';
import LoginButton from '../src/components/Button';
import Caption from '../src/components/Caption';
import { styles } from '../src/styles/Login.styles';
  
function LoginScreen(navigation:any): React.JSX.Element {
    const [text, onChangeText] = React.useState('');

    return (
      <SafeAreaView style={styles.loginMainContainer}>
        <LoginLogo/>
        <InputField onChangeText={onChangeText} value={text} label="Email"/>
        <InputField onChangeText={onChangeText} value={text}  label="Password"/>
        <LoginButton/>
        <Caption text="Don't have an account?" />
        <Caption text="Sign Up" />
      </SafeAreaView>
    );
  }
  export default LoginScreen;
