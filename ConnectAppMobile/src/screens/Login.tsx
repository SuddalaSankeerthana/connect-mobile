import React from 'react';
import { Image, ImageBackground, SafeAreaView, Text,View} from 'react-native';
import InputField from '../components/loginScreen/InputFields';
import LoginButton from '../components/loginScreen/Button';
import Caption from '../components/loginScreen/Caption';
import { styles } from '../styles/Login.styles';
import Logo from '../components/loginScreen/Logo';

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
   <ImageBackground source={require('../assets/background_style.png')} style={styles.rectangle}>
    <View>
     <Image source={require('../assets/Vector1.png')} style={styles.vectorStyle}/>
    </View>
    <View style={styles.loginMainContainer}>
     <Logo/>
     <InputField onChangeText={setEmail} value={email.toLowerCase()} label="Email" source={require('../assets/email.png')}
      style={styles.emailIcon} secureTextEntry={false}/>
     <InputField
      onChangeText={setPassword}
      value={password}
      label="Password"
      source={require('../assets/password.png')}
      style={styles.passwordIcon}
      secureTextEntry={true}
     />
     <View >
<ImageBackground source={require('../assets/background_style2.png')} style={styles.backgroundEffect}>
     <LoginButton password={password} email={email} userData={userData} navigation={navigation}/>
     <View style={styles.noAccount}>
     <Caption text="Don't have an account?" />
     <Caption text="Sign Up" style={styles.signUp} onPress={()=> navigation.navigate('Registration')}/>
     </View>
     <View style={styles.vectorContainer}>
     </View>
     </ImageBackground>
     </View>
     </View>
     </ImageBackground>
    </View>
  </SafeAreaView>
 );
}
export default LoginScreen;