import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const RegistraionProfile = () => {
  return (
    <View style={{display: 'flex'}}>
      <Image
        style={{width: 80, height: 80, resizeMode: 'cover', marginTop: '3%'}}
        source={require('../../images/png/user.png')}></Image>
      <TouchableOpacity>
        <Image
          style={{width: 20, height: 20, top: -15, marginStart: 'auto'}}
          source={require('../../images/png/Group.png')}></Image>
      </TouchableOpacity>
    </View>
  );
};
export default RegistraionProfile;
