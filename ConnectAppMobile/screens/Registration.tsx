import React, {useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  TextInputComponent,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import TextInputBox from '../components/registrationScreen/InputField';
import LogoAndTitle from '../components/registrationScreen/LogoTitle';
import RegistraionProfile from '../components/registrationScreen/RegistrationProfile';

const RegistrationScreen = ({navigation}: any) => {
  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('ß');
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Registration screen</Text>
      <LogoAndTitle></LogoAndTitle>
      <Text>Welcome to Onboard</Text>
      <Text style={{textAlign: 'center', width: 203, height: 40}}>
        Let's help to meet up your connections.
      </Text>
      <RegistraionProfile></RegistraionProfile>
      <TextInputBox
        placeholder="Enter your full name"
        value={fullName}
        onChangeText={fullName => setFullName(fullName)}
        secureTextEntry={false}></TextInputBox>
      <TextInputBox
        value={email}
        placeholder="Enter your Email"
        onChangeText={email => setUserName(email)}
        secureTextEntry={false}></TextInputBox>
      <TextInputBox
        placeholder="Enter password"
        value={password}
        onChangeText={password => setPassword(password)}
        secureTextEntry={true}></TextInputBox>
      <TextInputBox
        placeholder="confirm password"
        value={confirmPassword}
        onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
        secureTextEntry={true}></TextInputBox>
      <Button
        title="Register"
        onPress={() => navigation.navigate('Home')}></Button>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text> Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{color: 'blue'}}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default RegistrationScreen;
