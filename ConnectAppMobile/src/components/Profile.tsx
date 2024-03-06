import {Image, View, Text} from 'react-native';
import React from 'react';
import {styles} from '../styles/HomeScreenBodyStyles';

export function Profile({
  profile_pic,
  name,
  containerStyle,
  imageStyle,
profileName
}: {
  profile_pic: string;
  name: string;
  containerStyle?:any,
  imageStyle:any
  profileName?:any
}) {
  return (
    <>
      <View style={containerStyle}>
        <Image source={{uri: profile_pic}} style={imageStyle} />
        <Text style={profileName}>{name}</Text>
      </View>
    </>
  );
}
