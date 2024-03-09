import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native';
import {Body} from '../components/homeScreen/Body';
import {Header} from '../components/homeScreen/Header';
import {styles} from '../styles/HomeScreenBodyStyles';
import {CurrentUserContext} from '../components/homeScreen/LikeContext';

export const HomeScreen = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <CurrentUserContext.Provider value={{UserId: '3'}}>
        <View style={styles.homeContainer}>
          <Header navigation={navigation} />
          <Body />
        </View>
      </CurrentUserContext.Provider>
    </SafeAreaView>
  );
};
