import {Image, View, Text} from 'react-native';
import React from 'react';
import {styles} from '../styles/HomeScreenBodyStyles';

export function Profile({
  profile_pic,
  name,
}: {
  profile_pic: string;
  name: string;
}) {
  return (
    <>
      <View style={styles.profileContainer}>
        <Image source={{uri: profile_pic}} style={styles.profileImage} />
        <Text>{name}</Text>
      </View>
    </>
  );
}
