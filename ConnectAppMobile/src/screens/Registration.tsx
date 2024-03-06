import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';

import TextInputBox from '../components/registrationScreen/InputField';
import LogoAndTitle from '../components/registrationScreen/LogoTitle';
import RegistraionProfile from '../components/registrationScreen/RegistrationProfile';
import RegisterButton from '../components/registrationScreen/RegisterButton';
import WelcomeAndTagline from '../components/registrationScreen/WelcomAndTagline';
import BackGroundImage from '../components/registrationScreen/BackgroundImage';
import styles from '../styles/registration.style';
import SigInContent from '../components/registrationScreen/SiginContent';

const RegistrationScreen = ({navigation}: any) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const userData={
    username: fullName,
    email: email,
    password: password,
    profileImageAddress: "profileImageAddress"
   }
  return (
    <SafeAreaView>
      <View style={styles.registrationContainer}>
        <BackGroundImage></BackGroundImage>
        <View style={styles.registrationInputContainer}>
          <LogoAndTitle></LogoAndTitle>
          <WelcomeAndTagline></WelcomeAndTagline>
          <RegistraionProfile></RegistraionProfile>
          <TextInputBox
            placeholder="Enter your full name"
            value={fullName}
            onChangeText={fullName => setFullName(fullName)}
            secureTextEntry={false}></TextInputBox>
          <TextInputBox
            value={email}
            placeholder="Enter your Email"
            onChangeText={email => setEmail(email)}
            secureTextEntry={false}></TextInputBox>
          <TextInputBox
            placeholder="Enter password"
            value={password}
            onChangeText={password => setPassword(password)}
            secureTextEntry={true}></TextInputBox>
          <TextInputBox
            placeholder="confirm password"
            value={confirmPassword}
            onChangeText={confirmPassword =>
              setConfirmPassword(confirmPassword)
            }
            secureTextEntry={true}></TextInputBox>
          <RegisterButton navigation={navigation} userData={userData}></RegisterButton>
          <SigInContent></SigInContent>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default RegistrationScreen;
