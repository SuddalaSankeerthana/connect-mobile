import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import styles from '../../styles/registration.style';

const RegistraionProfile = () => {
  return (
    <View style={{display: 'flex'}}>
      <Image
        testID="profile"
        style={styles.profile}
        source={require('../../images/png/user.png')}></Image>
      <TouchableOpacity>
        <Image
          testID="edit-icon"
          style={styles.editIcon}
          source={require('../../images/png/Group.png')}></Image>
      </TouchableOpacity>
    </View>
  );
};
export default RegistraionProfile;
