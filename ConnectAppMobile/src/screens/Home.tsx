import React from 'react';
import {Button, View, Text} from 'react-native';
import { Body } from '../components/Body';

const HomeScreen = ({navigation}: any) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
        <Body/>
      {/* <Text>Home screen</Text> */}
      {/* <Button
        title="Upload"
        onPress={() => navigation.navigate('Upload')}></Button>
      <Button
        title="Log-out"
        onPress={() => navigation.navigate('Login')}></Button> */}
    </View>
  );
};
export default HomeScreen;
