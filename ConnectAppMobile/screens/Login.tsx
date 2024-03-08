import React from 'react';
import { SafeAreaView, View} from 'react-native';
import LoginLogo from '../src/components/Logo';
import InputField from '../src/components/InputFields';
import LoginButton from '../src/components/Button';
import Caption from '../src/components/Caption';
import {styles} from '../src/styles/Login.styles';

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
          <LoginLogo />
          <InputField onChangeText={setEmail} value={email.toLowerCase()} label="Email"  source={require('../src/assets/email.png')}
            style={styles.emailIcon}/>
          <InputField
            onChangeText={setPassword}
            value={password}
            label="Password"
            source={require('../src/assets/password.png')}
            style={styles.passwordIcon}
          />
          <LoginButton password={password} email={email} userData={userData} navigation={navigation}/>
          <View style={styles.noAccount}>
          <Caption text="Don't have an account?" />
          <Caption text="Sign Up" style={styles.signUp} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default LoginScreen;
