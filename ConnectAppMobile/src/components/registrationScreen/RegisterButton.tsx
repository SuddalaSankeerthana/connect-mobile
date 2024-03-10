import React, {useContext} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {handleRegister} from '../../handlers/handleRegister';
import styles from '../../styles/registration.style';
import {Alert} from 'react-native';
import {CurrentUserContext} from '../CurrentContext';

const RegisterButton = (props: any) => {
  const userContext = useContext(CurrentUserContext);
  const handleValidations = () => {
    const emailRegex = /[_A-Za-z'\\.\\!'0-9-\\+]+@gmail+\.com/;
    const emailRegex2 = /[_A-Za-z'\\.\\!'0-9-\\+]+@everest+\.engineering/;

    if (
      !props.userData.password ||
      !props.userData.username ||
      !props.userData.email ||
      !props.userData.confirmPassword
    ) {
      Alert.alert('please fill out all the fields');
      return;
    }
    if (
      !emailRegex.test(props.userData.email) &&
      !emailRegex2.test(props.userData.email)
    ) {
      Alert.alert('Please enter valid email');
      return;
    }
    if (
      !/[A-Z]/.test(props.userData.password) ||
      !/[a-z]/.test(props.userData.password) ||
      !/\d/.test(props.userData.password) ||
      !/[^A-Za-z0-9]/.test(props.userData.password) ||
      props.userData.password.length < 8
    ) {
      Alert.alert(
        'password must have  minimum 8 charactersand  at least one uppercase character,lowercase characte,digit/number, special character,',
      );
      return;
    }
    if (props.userData.password !== props.userData.confirmPassword) {
      Alert.alert('Password not matched');
      return;
    } else {
      handleRegister(props.userData, props.navigation, userContext);
      return;
    }
  };

  return (
    <TouchableOpacity
      style={styles.registrationButtonContainer}
      onPress={handleValidations}>
      <View style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Register</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RegisterButton;
