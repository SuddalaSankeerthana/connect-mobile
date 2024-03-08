import React from 'react';
import { SafeAreaView, View} from 'react-native';
import InputField from '../components/InputFields';
import LoginButton from '../components/Button';
import Caption from '../components/Caption';
import {styles} from '../styles/Login.styles';
import Logo from '../components/Logo';



function LoginScreen({navigation}:any): React.JSX.Element {
  const [email, setEmail]= React.useState('');
  const [password, setPassword]= React.useState('');
  const userData={
    email: email,
    password: password
  }
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.loginMainContainer}>
          <Logo />
          <InputField onChangeText={setEmail} value={email.toLowerCase()} label="Email"  source={require('../assets/email.png')}
            style={styles.emailIcon} secureTextEntry={false}/>
          <InputField
            onChangeText={setPassword}
            value={password}
            label="Password"
            source={require('../assets/password.png')}
            style={styles.passwordIcon}
            secureTextEntry={true}
          />
          <LoginButton password={password} email={email} userData={userData} navigation={navigation}/>
          <View style={styles.noAccount}>
          <Caption text="Don't have an account?" />
          <Caption text="Sign Up" style={styles.signUp} onPress={()=> navigation.navigate('Registration')}/>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default LoginScreen;
