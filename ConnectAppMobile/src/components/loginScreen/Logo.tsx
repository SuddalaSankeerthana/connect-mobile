import React from 'react';
import {View, Image} from 'react-native';
import {styles} from '../../styles/Login.styles';
import Caption from './Caption';

function Logo(): React.JSX.Element {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.logoTitle}>
          <View testID="logo">
            <Image
              source={require('../../assets/logo2.png')}
              style={styles.logo}
            />
          </View>
          <View>
            <Caption text="CONNECT" style={styles.title} />
          </View>
        </View>
        <View>
          <Caption
            text="Welcome to our Connect community"
            style={styles.subtitle}
          />
        </View>
      </View>
      <View>
        <Caption text="Login to Connect" style={styles.connect} />
      </View>
    </>
  );
}

export default Logo;
