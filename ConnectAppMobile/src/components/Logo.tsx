import React from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import { styles } from '../styles/Login.styles';
import Caption from './Caption';

function Logo(): React.JSX.Element {
  return (
    <>
      <View >
        <View style={styles.logoTitle}>
          <View testID="logo" >
            <Image source={require('../assets/logo2.png')} />
          </View>
          <View>
            <Caption text="CONNECT" />
          </View>
        </View>
        <View>
          <Caption
            text="Welcome to our Connect community"
          />
        </View>
      </View>
      <View>
      <Caption text="Login to Connect"  />
      </View>
    </>
  );
}

export default Logo;
