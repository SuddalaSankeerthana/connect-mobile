import React, {useState} from 'react';
import {
  Button,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import TextInputBox from '../components/registrationScreen/InputField';
import LogoAndTitle from '../components/registrationScreen/LogoTitle';
import RegistraionProfile from '../components/registrationScreen/RegistrationProfile';
import {SafeAreaView} from 'react-native-safe-area-context';

const RegistrationScreen = ({navigation}: any) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ImageBackground
        style={{
          width: 150,
          height: 150,
          marginBottom: 'auto',
          marginEnd: 'auto',
          left: '-2%',
          top: '-2%',
        }}
        source={require('../images/png/shape.png')}></ImageBackground>
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
