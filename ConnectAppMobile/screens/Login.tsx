import React from 'react';
import { SafeAreaView, View} from 'react-native';
import LoginLogo from '../src/components/Logo';
import InputField from '../src/components/InputFields';
import LoginButton from '../src/components/Button';
import Caption from '../src/components/Caption';
import {styles} from '../src/styles/Login.styles';

function LoginScreen(navigation: any): React.JSX.Element {
  const [email, setEmal]= React.useState('');
  const [password, setPassword]= React.useState('');
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.loginMainContainer}>
          <LoginLogo />
          <InputField onChangeText={setEmal} value={email} label="Email"  source={require('../src/assets/email.png')}
            style={styles.emailIcon}/>
          <InputField
            onChangeText={setPassword}
            value={password}
            label="Password"
            source={require('../src/assets/password.png')}
            style={styles.passwordIcon}
          />
          <LoginButton />
          <View style={styles.noAccount}>
          <Caption text="Don't have an account?" />
          <Caption text="Sign Up" style={styles.signUp} onPress={()=>{}}/>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default LoginScreen;
