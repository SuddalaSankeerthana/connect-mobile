import {FlatList, View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from '../styles/HomeScreenBodyStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlusSquare} from '@fortawesome/free-regular-svg-icons';
import {Profile} from './Profile';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.logoAndTitleContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>CONNECT</Text>
      </View>
      <View style={styles.iconsContainer}>
        <View>
        <Profile
          profile_pic="https://i.pinimg.com/originals/d8/2b/ca/d82bca57dcaa9ceb4c827e3d6ab9fcfe.jpg"
          name="Lavanya"
          containerStyle={styles.headerProfileContainer}
          imageStyle={styles.headerProfile}
          profileName={styles.profileName}
        />
        </View>
        <FontAwesomeIcon icon={faPlusSquare} size={27} style={styles.addIcon} />
        <FontAwesomeIcon icon={faBars} size={27} style={styles.menuBar} />
      </View>
    </View>
  );
}
