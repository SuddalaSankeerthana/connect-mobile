import React, {useState} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native';
import {Body} from '../components/homeScreen/Body';
import {Header} from '../components/homeScreen/Header';
import {styles} from '../styles/HomeScreenBodyStyles';

export const HomeScreen = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <View style={styles.homeContainer}>
        <Header navigation={navigation} />
        <Body />
      </View>
    </SafeAreaView>
  );
};
