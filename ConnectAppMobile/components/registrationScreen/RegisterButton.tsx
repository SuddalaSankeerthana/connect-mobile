import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from '../../styles/registration.style';

const RegisterButton = ({navigation}: any) => {
  return (
    <TouchableOpacity
      style={styles.registrationButtonContainer}
      onPress={() => {
        navigation.navigate('Home');
      }}>
      <View style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Register</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RegisterButton;
