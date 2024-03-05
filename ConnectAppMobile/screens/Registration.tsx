import React, {useState} from 'react';
import {Text, View, SafeAreaView} from 'react-native';

import TextInputBox from '../components/registrationScreen/InputField';
import LogoAndTitle from '../components/registrationScreen/LogoTitle';
import RegistraionProfile from '../components/registrationScreen/RegistrationProfile';
import SigIn from '../components/registrationScreen/SignIn';
import RegisterButton from '../components/registrationScreen/RegisterButton';
import WelcomeAndTagline from '../components/registrationScreen/WelcomAndTagline';
import BackGroundImage from '../components/registrationScreen/BackgroundImage';

const RegistrationScreen = ({navigation}: any) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <SafeAreaView>
      <View
        style={{
          display: 'flex',
          backgroundColor: '#F0F4F3',
        }}>
        <BackGroundImage></BackGroundImage>
        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 'auto',
            paddingLeft: 20,
            paddingRight: 20,
            top: '-2%',
          }}>
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
          <RegisterButton navigation={navigation}></RegisterButton>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: '20%',
            }}>
            <Text style={{color: '#000000'}}> Already have an account? </Text>
            <SigIn navigation={navigation}></SigIn>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default RegistrationScreen;
