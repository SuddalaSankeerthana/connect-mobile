import React, {useState} from 'react';
import {
  Button,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import TextInputBox from '../components/registrationScreen/InputField';
import LogoAndTitle from '../components/registrationScreen/LogoTitle';
import RegistraionProfile from '../components/registrationScreen/RegistrationProfile';

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
        <Image
          style={{
            marginBottom: 'auto',
            marginEnd: 'auto',
            left: '-2%',
            top: '-2%',
          }}
          source={require('../images/png/shape.png')}></Image>
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
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              fontFamily: 'bold',
              fontWeight: '700',
              marginTop: '5%',
            }}>
            Welcome to Onboard
          </Text>
          <Text
            style={{
              textAlign: 'center',
              width: 203,
              height: 40,
              color: '#000000CC',
            }}>
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
            onChangeText={confirmPassword =>
              setConfirmPassword(confirmPassword)
            }
            secureTextEntry={true}></TextInputBox>
          <TouchableOpacity
            style={{paddingTop: 30, paddingBottom: 10}}
            onPress={() => navigation.navigate('Home')}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#43A5EB',
                width: 350,
                height: 60,
                borderRadius: 8,
                paddingLeft: '5%',
                paddingRight: 10,
              }}>
              <Text style={{color: 'white', fontWeight: '600', fontSize: 18}}>
                Register
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: '20%',
            }}>
            <Text> Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{color: '#43A5EB'}}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default RegistrationScreen;
