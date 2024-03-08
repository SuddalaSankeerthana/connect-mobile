import {Image, View, Text} from 'react-native';
import React from 'react';

type PropTyes = {
  profile_pic: string;
  name: string;
  containerStyle?: any;
  imageStyle?: any;
  profileName?: any;
};
export function Profile(props: PropTyes) {
  return (
    <>
      <View style={props.containerStyle}>
        <Image
          source={{uri: props.profile_pic}}
          style={props.imageStyle}
          testID="profile"
        />
        <Text style={props.profileName}>{props.name}</Text>
      </View>
    </>
  );
}
