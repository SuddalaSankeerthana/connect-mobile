import React from 'react';
import {Button, Text, View} from 'react-native';

const UploadScreen = ({navigation}: any) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <Text>Upload screen</Text>
      <Button
        title="Upload"
        onPress={() => navigation.navigate('Home')}></Button>
    </View>
  );
};
export default UploadScreen;
