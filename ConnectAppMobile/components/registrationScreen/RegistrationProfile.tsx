import React from 'react';
import {View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const RegistraionProfile = () => {
  return (
    // <SafeAreaView>
    <View style={{}}>
      <Image
        style={{width: 80, height: 80}}
        source={require('../../images/png/user.png')}></Image>
    </View>
    // {/* </SafeAreaView> */}
  );
};
export default RegistraionProfile;
