import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import { handleRegister } from '../../handlers/handleRegister';
import styles from '../../styles/registration.style';
import { RegisterRouteProps } from '../../types/RegisterRouteProps';

const RegisterButton = (props:any) => {
  return (
    <TouchableOpacity
      style={styles.registrationButtonContainer}
      onPress={() => {
        handleRegister(props.userData)
      }}>
      <View style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Register</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RegisterButton;
