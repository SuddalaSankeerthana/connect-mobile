import {Button, View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../styles/HomeScreenBodyStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlusSquare} from '@fortawesome/free-regular-svg-icons';
import {Profile} from './Profile';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';

export function Header({navigation}: any) {
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);
  return (
    <View style={styles.header}>
      <View style={styles.logoAndTitleContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} testID="logo"/>
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
        <TouchableOpacity onPress={() => navigation.navigate('Upload')} testID="addIcon">
          <FontAwesomeIcon
            icon={faPlusSquare}
            size={27}
            style={styles.addIcon}
          />
        </TouchableOpacity>
        <Menu
          visible={visible}
          anchor={
            <TouchableOpacity onPress={showMenu}>
              <FontAwesomeIcon icon={faBars} size={27} style={styles.menuBar} testID="menuBar"/>
            </TouchableOpacity>
          }
          onRequestClose={hideMenu}>
          <MenuItem onPress={hideMenu} style={styles.logOutContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} >
              <Text>Log out</Text>
            </TouchableOpacity>
          </MenuItem>
        </Menu>
      </View>
    </View>
  );
}
