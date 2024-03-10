import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import RNFS from 'react-native-fs';

import TextInputBox from '../components/registrationScreen/InputField';
import LogoAndTitle from '../components/registrationScreen/LogoTitle';
import RegistraionProfile from '../components/registrationScreen/RegistrationProfile';
import RegisterButton from '../components/registrationScreen/RegisterButton';
import WelcomeAndTagline from '../components/registrationScreen/WelcomAndTagline';
import BackGroundImage from '../components/registrationScreen/BackgroundImage';
import styles from '../styles/registration.style';
import SigInContent from '../components/registrationScreen/SignInContent';

const RegistrationScreen = ({navigation}: any) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [changedImage, setChangedImage] = useState('');
  const [uploadedStatus, setUploadedStatus] = useState(false);

  const handleImageCropPicker = () => {
    ImagePicker.openPicker({
      width: 100,
      height: 100,
      cropping: true,
    })
      .then(image => {
        if (image && image.path) {
          RNFS.readFile(image.path, 'base64')
            .then(base64 => {
              setChangedImage(base64);
              setUploadedStatus(true);
            })
            .catch(error => {
              console.error('Error reading image file:', error);
            });
        }
      })
      .catch(error => {
        console.error('Error picking image:', error);
      });
  };

  const userData = {
    username: fullName,
    email: email,
    password: password,
    profileImageAddress: 'profileImageAddress',
  };

  const userDataValidations = {
    username: fullName,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    profileImageAddress: 'profileImageAddress',
  };

  const imageUrl = {uri: 'https://example.com/image.jpg'};
  return (
    <SafeAreaView>
      <View style={styles.registrationContainer}>
        <BackGroundImage></BackGroundImage>
        <View style={styles.registrationInputContainer}>
          <LogoAndTitle></LogoAndTitle>
          <WelcomeAndTagline></WelcomeAndTagline>
          <RegistraionProfile
            uploadedStatus={uploadedStatus}
            changedImage={changedImage}
            handleImageCropPicker={handleImageCropPicker}
            url={imageUrl}
          />
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
          <RegisterButton
            navigation={navigation}
            userData={userDataValidations}
            changedImage={changedImage}></RegisterButton>
          <SigInContent navigation={navigation}></SigInContent>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
