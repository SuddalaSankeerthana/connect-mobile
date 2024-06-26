import React, {useContext} from 'react';
import {Text} from 'react-native';
import {styles} from '../../styles/Login.styles';
import {Alert} from 'react-native';
import {handleLogin} from '../../handlers/handlelogin';
import {CurrentUserContext} from '../CurrentContext';

function LoginButton(props: any): React.JSX.Element {
  let emailRegex = /[_A-Za-z'\\.\\!'0-9-\\+]+@gmail+\.com/;
  let emailRegex2 = /[_A-Za-z'\\.\\!'0-9-\\+]+@everest+\.engineering/;
  const userContext = useContext(CurrentUserContext);
  const handleValidations = () => {
    if (!props.password || !props.email) {
      Alert.alert('please fill out all the fields');
      return;
    }
    if (!emailRegex.test(props.email) && !emailRegex2.test(props.email)) {
      Alert.alert('Please enter valid email');
      return;
    } else {
      handleLogin(props.userData, props.navigation, userContext);
    }
  };
  return (
    <Text
      style={styles.loginButton}
      onPress={handleValidations}
      testID="loginButton">
      Login
    </Text>
  );
}

export default LoginButton;
