import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const LogoAndTitle = (): React.JSX.Element => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={require('../../images/png/logo2.png')}
        style={{width: 38, height: 38}}></Image>
      <Text
        style={{
          color: '#43A5EB',
          width: 118,
          height: 26,
          fontSize: 20,
          fontWeight: '700',
          paddingLeft: '2%',
        }}>
        CONNECT
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LogoAndTitle;
