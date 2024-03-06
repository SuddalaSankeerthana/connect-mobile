import React from 'react';
import {Button, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native';
import {Body} from '../components/Body';
import { Header } from '../components/Header';
import { styles } from '../styles/HomeScreenBodyStyles';

const HomeScreen = ({navigation}:any) => {
  return (
    <SafeAreaView>
      <View style={styles.homeContainer}>
        <Header navigation={navigation}/>
        <Body />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
