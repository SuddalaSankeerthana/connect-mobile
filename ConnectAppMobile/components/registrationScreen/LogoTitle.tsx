import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const LogoAndTitle = (): React.JSX.Element => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image
        source={require('../../images/png/logo2.png')}
        style={{width: 38, height: 38}}></Image>
      <Text>CONNECT</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LogoAndTitle;
