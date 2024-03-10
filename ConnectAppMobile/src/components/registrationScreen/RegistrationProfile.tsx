import React from 'react';
import {View, Image, TouchableOpacity } from 'react-native';

import styles from '../../styles/registration.style';

const RegistrationProfile = (props: any) => {
  return (
    <View style={{display: 'flex'}}>
      <Image
        testID="profile"
        style={styles.profile}
        source={
         props.uploadedStatus
            ? {uri: `data:image/jpeg;base64,${props.changedImage}`}
            : require('../../images/png/user.png')
        }></Image>
      <TouchableOpacity onPress={props.handleImageCropPicker}>
        <Image
          testID="edit-icon"
          style={styles.editIcon}
          source={require('../../images/png/Group.png')}></Image>
      </TouchableOpacity>
    </View>
  );
};
export default RegistrationProfile;
